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

async function cleanDemoProperties() {
  console.log('Fetching all properties from Sanity...');
  const properties = await client.fetch(`*[_type == "property"]`);
  console.log(`Found ${properties.length} total properties in Sanity.`);

  const demoSlugs = [
    '3bhk-luxury-flat-sector-2',
    'luxury-bungalow-villa-sector-14',
    'industrial-plot-sec63-500gaj',
    'retail-shop-world-street-sec79',
    'bptp-parklands-500-gaj-plot',
    'luxury-4bhk-builder-floor-sec15'
  ];

  for (const p of properties) {
    const slugStr = p.slug?.current || '';
    if (demoSlugs.includes(slugStr)) {
      console.log(`Deleting demo property: "${p.title}" (ID: ${p._id})...`);
      await client.delete(p._id);
      console.log(`Deleted "${p.title}"`);
    }
  }

  const remaining = await client.fetch(`*[_type == "property"]`);
  console.log(`\nClean up complete! ${remaining.length} properties remain in Sanity:`);
  remaining.forEach((item) => {
    console.log(`- "${item.title}" (${item.price || ''}) - Category: ${item.category}`);
  });
}

cleanDemoProperties();
