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

async function uploadFloorPlan() {
  const filePath = path.join(process.cwd(), 'public', 'sec69-3bhk-plan.png');
  console.log('Uploading floor plan image asset to Sanity...');
  const imageBuffer = fs.readFileSync(filePath);
  const asset = await client.assets.upload('image', imageBuffer, {
    filename: 'sec69-3bhk-plan.png',
  });
  console.log(`Uploaded asset ID: ${asset._id}`);

  const doc = {
    _type: 'property',
    title: '3 BHK Luxury Group Housing Unit (2046 Sq. Ft) - Sector 69 IMT',
    slug: { _type: 'slug', current: '3bhk-luxury-unit-2046sqft-sec69-imt' },
    category: 'flats',
    listingType: 'For Sale',
    price: '₹1.64 Cr',
    priceSub: '₹8,000 / Sq. Ft',
    pricePerSqYd: '₹8,000 / Sq. Ft',
    location: 'Plot G.H.-11, Sector 69, IMT Faridabad',
    size: '2045.83 Sq. Ft (2046 Sq. Ft)',
    dimensions: '3 BHK + 3 Baths + Dress + Grand Lobby',
    facing: '3-Side Open Balconies',
    roadSize: '24 Meter Wide Sector Road',
    badge: 'Approved 3 BHK Plan',
    verified: true,
    featured: true,
    features: [
      '2045.83 Sq. Ft Super Builtup Area',
      '1265.02 Sq. Ft Builtup + 443 Sq. Ft Balcony',
      'Grand Lobby/Dining (12\'0" × 24\'6")',
      '3 Attached Toilets + Dedicated Dress Room',
      'Plot G.H.-11, Sector 69, IMT Faridabad',
      'Architect Approved Building Plan'
    ],
    longDescription: 'Architect approved 3 BHK Luxury Group Housing Society Unit Plan on Plot No. G.H.-11, Sector-69, IMT, Faridabad. Total super built-up area of 2045.835 Sq. Ft (1265 Sq. Ft built-up, 443 Sq. Ft balcony area, and common circulation loading). Features 3 spacious bedrooms with attached toilets, dress room, grand 12\'x24\'6" lobby/dining, 13\'9"x8\'6" kitchen, and continuous 3-side balconies. Rate @ ₹8,000/Sq. Ft.',
    image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
  };

  console.log(`Creating document in Sanity: "${doc.title}"...`);
  const created = await client.create(doc);
  console.log(`Created property document in Sanity with ID: ${created._id}`);

  const allProps = await client.fetch(`*[_type == "property"]`);
  console.log(`Total properties in Sanity now: ${allProps.length}`);
}

uploadFloorPlan();
