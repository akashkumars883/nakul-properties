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

async function verifySanity() {
  console.log('Fetching all property documents live from Sanity database...');
  const properties = await client.fetch(`*[_type == "property"]{ _id, title, price, category, location, "imageUrl": image.asset->url } | order(_createdAt desc)`);

  console.log(`\n=== TOTAL SANITY PROPERTIES: ${properties.length} ===\n`);
  properties.forEach((p, idx) => {
    console.log(`${idx + 1}. Title: "${p.title}"`);
    console.log(`   ID: ${p._id}`);
    console.log(`   Price: ${p.price}`);
    console.log(`   Category: ${p.category}`);
    console.log(`   Location: ${p.location}`);
    console.log(`   Has Image Asset: ${p.imageUrl ? 'YES (Uploaded to Sanity)' : 'NO'}`);
    console.log('----------------------------------------------------');
  });
}

verifySanity();
