import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const projectId = "ydtagkh4";
const dataset = "nakul-sanity";
const apiVersion = "2024-03-01";
const token = "skx6qhisYBsMlc232Ex93iBrb2piQa3mvGA1SliIm6YL1Y0yPHxI4tAXhmNzHD9l73eH9FcmvMzP3r7GpOHXZTx7Pl1kH6yJylGUXKxCUe1vGivykJKxrkJSlnTwwo4TCCfSmdNY096xAfvpL0dBMujhDbboP9g0wLAoIJNglMufKGaXfSKU";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

async function main() {
  const brainDir = 'C:\\Users\\ak706\\.gemini\\antigravity-ide\\brain\\d1f20163-e977-41bf-a956-4a3b40d91779';
  const files = fs.readdirSync(brainDir).filter(f => f.startsWith('media__') && f.endsWith('.png'));
  console.log('Found media files in brain directory:', files);

  // Sort files by creation time
  const mediaFilesWithTime = files.map(f => ({
    filename: f,
    filePath: path.join(brainDir, f),
    time: fs.statSync(path.join(brainDir, f)).mtimeMs
  })).sort((a, b) => a.time - b.time);

  console.log('Sorted media files:', mediaFilesWithTime);

  let img3BhkPath = null;
  let img4BhkPath = null;

  if (mediaFilesWithTime.length >= 2) {
    img3BhkPath = mediaFilesWithTime[0].filePath;
    img4BhkPath = mediaFilesWithTime[1].filePath;
  } else if (mediaFilesWithTime.length === 1) {
    img3BhkPath = mediaFilesWithTime[0].filePath;
  }

  // 1. Delete temporary created GH-11 document if present
  const gh11Docs = await client.fetch(`*[_type == "property" && slug.current == "3bhk-luxury-unit-2046sqft-sec69-imt"]`);
  for (const doc of gh11Docs) {
    console.log(`Deleting extra temporary document: ${doc.title} (${doc._id})...`);
    await client.delete(doc._id);
  }

  // 2. Upload 3BHK image asset & update existing 3BHK document
  if (img3BhkPath && fs.existsSync(img3BhkPath)) {
    console.log('Uploading 3 BHK Floor Plan image to Sanity...');
    const buffer3 = fs.readFileSync(img3BhkPath);
    const asset3 = await client.assets.upload('image', buffer3, { filename: 'sec69-3bhk-plan.png' });
    console.log(`3 BHK Asset uploaded: ${asset3._id}`);

    // Copy to public for local SSR fallback
    fs.copyFileSync(img3BhkPath, path.join(process.cwd(), 'public', 'sec69-3bhk-plan.png'));

    const flats3Bhk = await client.fetch(`*[_type == "property" && (title match "*3 BHK*" || title match "*3BHK*")]`);
    for (const p of flats3Bhk) {
      console.log(`Updating image for 3 BHK listing: "${p.title}" (${p._id})...`);
      await client
        .patch(p._id)
        .set({
          size: '2045.83 Sq. Ft (2046 Sq. Ft)',
          price: '₹1.64 Cr',
          priceSub: '₹8,000 / Sq. Ft',
          location: 'Plot G.H.-11, Sector 69, IMT Faridabad',
          image: { _type: 'image', asset: { _type: 'reference', _ref: asset3._id } }
        })
        .commit();
    }
  }

  // 3. Upload 4BHK image asset & update existing 4BHK document
  if (img4BhkPath && fs.existsSync(img4BhkPath)) {
    console.log('Uploading 4 BHK Floor Plan image to Sanity...');
    const buffer4 = fs.readFileSync(img4BhkPath);
    const asset4 = await client.assets.upload('image', buffer4, { filename: 'sec69-4bhk-plan.png' });
    console.log(`4 BHK Asset uploaded: ${asset4._id}`);

    // Copy to public for local SSR fallback
    fs.copyFileSync(img4BhkPath, path.join(process.cwd(), 'public', 'sec69-4bhk-plan.png'));

    const flats4Bhk = await client.fetch(`*[_type == "property" && (title match "*4 BHK*" || title match "*4BHK*") && category == "flats"]`);
    for (const p of flats4Bhk) {
      console.log(`Updating image for 4 BHK listing: "${p.title}" (${p._id})...`);
      await client
        .patch(p._id)
        .set({
          size: '2227.73 Sq. Ft (2228 Sq. Ft)',
          price: '₹1.78 Cr',
          priceSub: '₹8,000 / Sq. Ft',
          location: 'Plot G.H.-11, Sector 69, IMT Faridabad',
          image: { _type: 'image', asset: { _type: 'reference', _ref: asset4._id } }
        })
        .commit();
    }
  }

  const remaining = await client.fetch(`*[_type == "property"]`);
  console.log(`\nAll done! Total properties in Sanity: ${remaining.length}`);
  remaining.forEach(r => {
    console.log(`- "${r.title}" (${r.price}) - Category: ${r.category}`);
  });
}

main();
