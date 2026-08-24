import { createClient } from '@sanity/client';

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

async function updateToSector69() {
  console.log('Fetching the 3 luxury flats from Sanity...');
  const properties = await client.fetch(`*[_type == "property" && category == "flats"]`);
  console.log(`Found ${properties.length} flat documents.`);

  for (const p of properties) {
    let newTitle = p.title;
    if (p.title.includes('Sector 65') || p.title.includes('Sector 64')) {
      newTitle = p.title.replace('Sector 65', 'Sector 69').replace('Sector 64', 'Sector 69');
    } else if (!p.title.includes('Sector 69')) {
      newTitle = `${p.title} - Sector 69`;
    }

    console.log(`Updating "${p.title}" -> "${newTitle}" (Sector 69, Faridabad)...`);
    await client
      .patch(p._id)
      .set({
        title: newTitle,
        location: 'Sector 69, Faridabad',
        longDescription: p.longDescription ? p.longDescription.replace(/Sector (64|65)/g, 'Sector 69') : ''
      })
      .commit();
  }

  console.log('\nSuccessfully updated all 3 properties to Sector 69, Faridabad!');
}

updateToSector69();
