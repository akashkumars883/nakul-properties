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

const propertiesData = [
  // 500 Gaj
  {
    title: 'HUDA Approved Residential Plot - Sector 65',
    slug: 'sector-65-500-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹5.15 Cr',
    priceSub: '₹1,03,000 / Sq. Yd',
    location: 'Sector 65, Faridabad',
    size: '500 Sq. Yds (Gaj)',
    dimensions: '50 ft × 90 ft',
    facing: 'North-East Facing',
    roadSize: '18 Meter Wide Road',
    badge: 'Sector 65 Hot Deal',
    verified: true,
    featured: true,
    features: ['100% Clear Legal Title', 'Freehold HSVP Registry', 'Wide 18m Planned Sector Road', 'Bank Loan Approved'],
    longDescription: 'HUDA approved 500 Sq. Yds (Gaj) prime residential plot available for sale in Sector 65, Faridabad. Excellent location with wide planned sector roads, quiet green neighborhood, and quick access to Delhi-Mathura Highway and local sector markets.',
    imageFile: 'plot1.png'
  },
  {
    title: 'Prime Sector Plot - Sector 64',
    slug: 'sector-64-500-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹5.65 Cr',
    priceSub: '₹1,13,000 / Sq. Yd',
    location: 'Sector 64, Faridabad',
    size: '500 Sq. Yds (Gaj)',
    dimensions: '50 ft × 90 ft',
    facing: 'East Facing',
    roadSize: '18 Meter Wide Road',
    badge: 'Sector 64 Prime',
    verified: true,
    featured: true,
    features: ['HSVP Approved Layout', 'Immediate Registry & Possession', 'East Facing Vastu Compliant', 'VIP Neighborhood'],
    longDescription: 'Premium 500 Gaj freehold sector plot in Sector 64 Faridabad. East facing Vastu compliant location, wide 18m front road, 100% legal title clearance ready for instant construction.',
    imageFile: 'plot2.png'
  },
  {
    title: 'Freehold Sector Plot - Sector 62',
    slug: 'sector-62-500-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹5.00 Cr',
    priceSub: '₹1,00,000 / Sq. Yd',
    location: 'Sector 62, Faridabad',
    size: '500 Sq. Yds (Gaj)',
    dimensions: '50 ft × 90 ft',
    facing: 'North Facing',
    roadSize: '12 Meter Wide Road',
    badge: 'Freehold Title',
    verified: true,
    featured: true,
    features: ['HUDA Approved', 'Freehold Single Owner Title', 'Close to Metro Link', 'High Value Appreciation'],
    longDescription: 'Large 500 Sq. Yds residential plot in Sector 62, Faridabad. Freehold title, peaceful residential locality with proximity to schools, hospitals, and sector shopping complexes.',
    imageFile: 'plot3.png'
  },

  // 350 Gaj
  {
    title: 'Freehold Residential Plot - Sector 62',
    slug: 'sector-62-350-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹4.25 Cr',
    priceSub: '₹1,21,428 / Sq. Yd',
    location: 'Sector 62, Faridabad',
    size: '350 Sq. Yds (Gaj)',
    dimensions: '35 ft × 90 ft',
    facing: 'North-East Facing',
    roadSize: '12 Meter Wide Road',
    badge: 'HUDA Approved',
    verified: true,
    featured: true,
    features: ['HSVP Approved Layout', 'Clear Title Registry', 'North-East Facing', 'Immediate Possession'],
    longDescription: '350 Gaj freehold residential plot for sale in Sector 62, Faridabad. Ideal for building a independent builder floor or luxury bungalow.',
    imageFile: 'plot4.png'
  },
  {
    title: 'Corner Residential Plot - Sector 65',
    slug: 'sector-65-350-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹4.50 Cr',
    priceSub: '₹1,28,571 / Sq. Yd',
    location: 'Sector 65, Faridabad',
    size: '350 Sq. Yds (Gaj)',
    dimensions: '35 ft × 90 ft',
    facing: 'Corner North-East',
    roadSize: '18 Meter Dual Road',
    badge: 'Corner Plot',
    verified: true,
    featured: true,
    features: ['Premium Corner Plot', 'Dual Road Frontage', 'Wide Sector Road Access', '100% Verified Title'],
    longDescription: 'Corner 350 Sq. Yds plot in Sector 65 Faridabad featuring dual road frontage, top ventilation, and prime location close to main sector entry.',
    imageFile: 'cat-huda.png'
  },
  {
    title: 'Residential Sector Plot - Sector 64',
    slug: 'sector-64-350-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹4.10 Cr',
    priceSub: '₹1,17,142 / Sq. Yd',
    location: 'Sector 64, Faridabad',
    size: '350 Sq. Yds (Gaj)',
    dimensions: '35 ft × 90 ft',
    facing: 'South-East Facing',
    roadSize: '12 Meter Wide Road',
    badge: 'Best Value Deal',
    verified: true,
    featured: false,
    features: ['HUDA Approved Land', 'Freehold Title Clearance', 'Ready for Registry', 'Close to Commercial Hub'],
    longDescription: '350 Gaj residential plot in Sector 64, Faridabad available at ₹4.10 Cr. Excellent connectivity and infrastructure.',
    imageFile: 'plot1.png'
  },

  // 250 Gaj
  {
    title: 'Freehold Residential Plot - Sector 62',
    slug: 'sector-62-250-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹3.30 Cr',
    priceSub: '₹1,32,000 / Sq. Yd',
    location: 'Sector 62, Faridabad',
    size: '250 Sq. Yds (Gaj)',
    dimensions: '30 ft × 75 ft',
    facing: 'North Facing',
    roadSize: '12 Meter Wide Road',
    badge: 'Sector 62 Choice',
    verified: true,
    featured: false,
    features: ['HSVP Clear Title', 'Freehold Registry', 'Quiet Residential Pocket', 'Metro Link Connectivity'],
    longDescription: '250 Sq. Yds (Gaj) residential plot available for sale in Sector 62 Faridabad. Clear title registry, ready for construction.',
    imageFile: 'plot2.png'
  },
  {
    title: 'HUDA Sector Plot - Sector 64',
    slug: 'sector-64-250-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹3.40 Cr',
    priceSub: '₹1,36,000 / Sq. Yd',
    location: 'Sector 64, Faridabad',
    size: '250 Sq. Yds (Gaj)',
    dimensions: '30 ft × 75 ft',
    facing: 'East Facing',
    roadSize: '12 Meter Wide Road',
    badge: 'HUDA Approved',
    verified: true,
    featured: false,
    features: ['HUDA Approved', 'East Facing', 'Wide Road Frontage', 'Immediate Possession'],
    longDescription: '250 Gaj plot in Sector 64 Faridabad at ₹3.40 Cr. Perfect dimensions for 4 BHK builder floor construction.',
    imageFile: 'plot3.png'
  },
  {
    title: 'Prime Location Plot - Sector 65',
    slug: 'sector-65-250-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹3.55 Cr',
    priceSub: '₹1,42,000 / Sq. Yd',
    location: 'Sector 65, Faridabad',
    size: '250 Sq. Yds (Gaj)',
    dimensions: '30 ft × 75 ft',
    facing: 'North-East Facing',
    roadSize: '18 Meter Wide Road',
    badge: 'Sector 65 Hot',
    verified: true,
    featured: false,
    features: ['Sector 65 Prime Pocket', 'Wide 18m Front Road', 'Freehold Clear Title', '100% Verified'],
    longDescription: '250 Gaj plot on 18 meter wide road in Sector 65 Faridabad. Highly desirable sector location.',
    imageFile: 'plot4.png'
  },

  // 160 Gaj
  {
    title: 'Residential Sector Plot - Sector 62',
    slug: 'sector-62-160-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹2.30 Cr',
    priceSub: '₹1,43,750 / Sq. Yd',
    location: 'Sector 62, Faridabad',
    size: '160 Sq. Yds (Gaj)',
    dimensions: '24 ft × 60 ft',
    facing: 'North Facing',
    roadSize: '9 Meter Wide Road',
    badge: 'Budget Sector Plot',
    verified: true,
    featured: false,
    features: ['HSVP Clear Title', 'Immediate Registry', 'Compact Plot Dimensions', 'Good Resale Value'],
    longDescription: '160 Gaj freehold plot in Sector 62 Faridabad. Great option for independent home or floor building.',
    imageFile: 'plot1.png'
  },
  {
    title: 'HUDA Sector Plot - Sector 64',
    slug: 'sector-64-160-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹2.50 Cr',
    priceSub: '₹1,56,250 / Sq. Yd',
    location: 'Sector 64, Faridabad',
    size: '160 Sq. Yds (Gaj)',
    dimensions: '24 ft × 60 ft',
    facing: 'East Facing',
    roadSize: '12 Meter Wide Road',
    badge: 'Clear Title',
    verified: true,
    featured: false,
    features: ['HUDA Approved', 'East Facing', 'Single Owner Registry', 'Near Main Park'],
    longDescription: '160 Sq. Yds sector plot in Sector 64 Faridabad available at ₹2.50 Cr with clear legal titles.',
    imageFile: 'plot2.png'
  },
  {
    title: 'Freehold Sector Plot - Sector 65',
    slug: 'sector-65-160-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹2.55 Cr',
    priceSub: '₹1,59,375 / Sq. Yd',
    location: 'Sector 65, Faridabad',
    size: '160 Sq. Yds (Gaj)',
    dimensions: '24 ft × 60 ft',
    facing: 'North-East Facing',
    roadSize: '12 Meter Wide Road',
    badge: 'Sector 65 Choice',
    verified: true,
    featured: false,
    features: ['Sector 65 Location', 'Freehold Title Clearance', 'Wide Road Access', 'Verified Ownership'],
    longDescription: '160 Gaj plot in Sector 65 Faridabad. Excellent connectivity, ready for immediate registry.',
    imageFile: 'plot3.png'
  },

  // 100 Gaj
  {
    title: 'Compact Sector Plot - Sector 62',
    slug: 'sector-62-100-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹1.55 Cr',
    priceSub: '₹1,55,000 / Sq. Yd',
    location: 'Sector 62, Faridabad',
    size: '100 Sq. Yds (Gaj)',
    dimensions: '18 ft × 50 ft',
    facing: 'North Facing',
    roadSize: '9 Meter Wide Road',
    badge: 'Compact Budget Plot',
    verified: true,
    featured: false,
    features: ['HSVP Clear Title', 'Freehold Registry', 'Affordable Ticket Size', 'Great Neighborhood'],
    longDescription: '100 Sq. Yds (Gaj) compact plot in Sector 62 Faridabad at ₹1.55 Cr.',
    imageFile: 'plot4.png'
  },
  {
    title: 'HUDA Residential Plot - Sector 64',
    slug: 'sector-64-100-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹1.60 Cr',
    priceSub: '₹1,60,000 / Sq. Yd',
    location: 'Sector 64, Faridabad',
    size: '100 Sq. Yds (Gaj)',
    dimensions: '18 ft × 50 ft',
    facing: 'East Facing',
    roadSize: '9 Meter Wide Road',
    badge: 'HUDA Approved',
    verified: true,
    featured: false,
    features: ['HUDA Approved', 'East Facing', 'Clear Documents', 'Ready Possession'],
    longDescription: '100 Gaj residential plot in Sector 64 Faridabad at ₹1.60 Cr.',
    imageFile: 'plot1.png'
  },
  {
    title: 'Prime Sector Plot - Sector 65',
    slug: 'sector-65-100-gaj-plot',
    category: 'huda',
    listingType: 'For Sale',
    price: '₹1.70 Cr',
    priceSub: '₹1,70,000 / Sq. Yd',
    location: 'Sector 65, Faridabad',
    size: '100 Sq. Yds (Gaj)',
    dimensions: '18 ft × 50 ft',
    facing: 'North-East Facing',
    roadSize: '12 Meter Wide Road',
    badge: 'Sector 65 Prime',
    verified: true,
    featured: false,
    features: ['Sector 65 Location', '12m Front Road', 'Freehold Title', 'Instant Registry'],
    longDescription: '100 Gaj plot in Sector 65 Faridabad at ₹1.70 Cr. Prime location on 12 meter wide road.',
    imageFile: 'plot2.png'
  }
];

async function runImport() {
  console.log('1. Deleting all existing property documents in Sanity...');
  try {
    const existingProperties = await client.fetch(`*[_type == "property"]{_id}`);
    console.log(`Found ${existingProperties.length} existing properties.`);
    for (const prop of existingProperties) {
      await client.delete(prop._id);
    }
    console.log('All dummy/old properties deleted from Sanity!');
  } catch (err) {
    console.error('Error deleting old properties:', err);
  }

  console.log('\n2. Uploading local images to Sanity assets...');
  const assetMap = {};
  const imageFiles = ['plot1.png', 'plot2.png', 'plot3.png', 'plot4.png', 'cat-huda.png'];
  for (const imgName of imageFiles) {
    const imgPath = path.join(process.cwd(), 'public', imgName);
    if (fs.existsSync(imgPath)) {
      console.log(`Uploading asset: ${imgName}...`);
      const stream = fs.createReadStream(imgPath);
      const assetDoc = await client.assets.upload('image', stream, { filename: imgName });
      assetMap[imgName] = assetDoc._id;
      console.log(`Uploaded ${imgName} -> ${assetDoc._id}`);
    }
  }

  console.log('\n3. Creating 15 Real Property Documents in Sanity...');
  for (const item of propertiesData) {
    const assetId = assetMap[item.imageFile];
    const doc = {
      _type: 'property',
      title: item.title,
      slug: { _type: 'slug', current: item.slug },
      category: item.category,
      listingType: item.listingType,
      price: item.price,
      priceSub: item.priceSub,
      location: item.location,
      size: item.size,
      dimensions: item.dimensions,
      facing: item.facing,
      roadSize: item.roadSize,
      badge: item.badge,
      verified: item.verified,
      featured: item.featured,
      features: item.features,
      longDescription: item.longDescription,
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: assetId
        }
      }
    };

    const res = await client.create(doc);
    console.log(`Created property: "${res.title}" (${res.price}) - ID: ${res._id}`);
  }

  console.log('\nImport complete! 15 real properties uploaded to Sanity successfully!');
}

runImport();
