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

async function uploadImageAsset(filename) {
  const filePath = path.join(process.cwd(), 'public', filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`File ${filePath} does not exist, using fallback.`);
    return null;
  }
  const imageBuffer = fs.readFileSync(filePath);
  const asset = await client.assets.upload('image', imageBuffer, {
    filename: filename,
  });
  return asset._id;
}

async function addProperties() {
  console.log('Uploading image assets to Sanity...');
  const assetId1 = await uploadImageAsset('plot4.png');
  const assetId2 = await uploadImageAsset('plot2.png');
  const assetId3 = await uploadImageAsset('plot1.png');

  const newItems = [
    {
      _type: 'property',
      title: '3 BHK Luxury Apartment - Sector 65',
      slug: { _type: 'slug', current: '3bhk-luxury-apartment-2030sqft-sec65' },
      category: 'flats',
      listingType: 'For Sale',
      price: '₹1.62 Cr',
      priceSub: '₹8,000 / Sq. Ft',
      pricePerSqYd: '₹8,000 / Sq. Ft',
      location: 'Sector 65, Faridabad',
      size: '2030 Sq. Ft (approx)',
      dimensions: '3 BHK + 3 Baths + Servant Room',
      facing: 'North-East Facing',
      roadSize: '18 Meter Wide Road',
      badge: 'Luxury 3 BHK',
      verified: true,
      featured: true,
      features: [
        '2030 Sq. Ft Spacious Layout',
        '₹8,000/Sq. Ft Competitive Pricing',
        'Private Lift & Stilt Car Parking',
        'Italian Marble & Fully Loaded Modular Kitchen',
        '100% Freehold Legal Registry Title'
      ],
      longDescription: 'High-end 3 BHK luxury apartment/floor measuring approximately 2030 Sq. Ft in Sector 65, Faridabad. Offered at ₹8,000/Sq. Ft (₹1.62 Cr total). Premium finishes, private lift, stilt parking, and 100% verified registry titles.',
      image: assetId1 ? { _type: 'image', asset: { _type: 'reference', _ref: assetId1 } } : undefined,
    },
    {
      _type: 'property',
      title: '3 BHK Premium Luxury Apartment - Sector 64',
      slug: { _type: 'slug', current: '3bhk-luxury-apartment-2080sqft-sec64' },
      category: 'flats',
      listingType: 'For Sale',
      price: '₹1.66 Cr',
      priceSub: '₹8,000 / Sq. Ft',
      pricePerSqYd: '₹8,000 / Sq. Ft',
      location: 'Sector 64, Faridabad',
      size: '2080 Sq. Ft (approx)',
      dimensions: '3 BHK + 3 Baths + Utility Balcony',
      facing: 'East Facing',
      roadSize: '18 Meter Wide Road',
      badge: 'Luxury 3 BHK',
      verified: true,
      featured: true,
      features: [
        '2080 Sq. Ft Deluxe Layout',
        '₹8,000/Sq. Ft Value Rate',
        'Gated Security & CCTV Patrol',
        'Italian Marble Flooring & Premium Sanitary',
        'Immediate Registry & Loan Approval'
      ],
      longDescription: 'Spacious 2080 Sq. Ft 3 BHK luxury apartment in Sector 64, Faridabad at ₹8,000/Sq. Ft (₹1.66 Cr total). Featuring modern design, high ventilation, dedicated parking, and full legal clearance.',
      image: assetId2 ? { _type: 'image', asset: { _type: 'reference', _ref: assetId2 } } : undefined,
    },
    {
      _type: 'property',
      title: '4 BHK Ultra Luxury Apartment - Sector 65',
      slug: { _type: 'slug', current: '4bhk-ultra-luxury-apartment-2290sqft-sec65' },
      category: 'flats',
      listingType: 'For Sale',
      price: '₹1.83 Cr',
      priceSub: '₹8,000 / Sq. Ft',
      pricePerSqYd: '₹8,000 / Sq. Ft',
      location: 'Sector 65, Faridabad',
      size: '2290 Sq. Ft (approx)',
      dimensions: '4 BHK + 4 Baths + Powder Room',
      facing: 'North-East Corner',
      roadSize: '24 Meter Wide Road',
      badge: 'Ultra Luxury 4 BHK',
      verified: true,
      featured: true,
      features: [
        '2290 Sq. Ft Ultra Spacious 4 BHK',
        '₹8,000/Sq. Ft Premium Pricing',
        'Dual Balcony & Grand Living Room',
        'Private Elevator & Reserved Double Parking',
        'Clear Title Freehold Land'
      ],
      longDescription: 'Expansive 2290 Sq. Ft 4 BHK ultra-luxury apartment in Sector 65, Faridabad at ₹8,000/Sq. Ft (₹1.83 Cr total). Unmatched luxury with private lift, Italian marble, and premier connectivity.',
      image: assetId3 ? { _type: 'image', asset: { _type: 'reference', _ref: assetId3 } } : undefined,
    }
  ];

  for (const doc of newItems) {
    console.log(`Inserting document: "${doc.title}"...`);
    const created = await client.create(doc);
    console.log(`Created successfully with ID: ${created._id}`);
  }

  const allProps = await client.fetch(`*[_type == "property"]`);
  console.log(`\nDone! Total properties in Sanity now: ${allProps.length}`);
}

addProperties();
