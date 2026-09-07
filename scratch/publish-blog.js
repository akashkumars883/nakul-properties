const fs = require('fs');
const path = require('path');

const envFile = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
envFile.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length >= 2) {
    const key = parts[0].trim();
    const val = parts.slice(1).join('=').trim().replace(/^["']|["']$/g, '');
    if (key) process.env[key] = val;
  }
});

const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2023-01-01',
  useCdn: false
});

async function publishBlogWithTable() {
  console.log('Uploading user image...');
  const imagePath = 'C:\\Users\\ak706\\.gemini\\antigravity-ide\\brain\\513c9d6f-f56c-4082-857c-cf70e3ce83ba\\media__1787815961070.jpg';
  const imageStream = fs.createReadStream(imagePath);
  
  const imageAsset = await client.assets.upload('image', imageStream, {
    filename: 'sector64-vs-sector65.jpg'
  });
  
  console.log('Image uploaded asset ID:', imageAsset._id);

  const title = "Sector 64 vs Sector 65 Faridabad — Which Is Better for Plot Investment?";
  const slug = "sector-64-vs-sector-65-faridabad-plot-investment";
  const excerpt = "Comprehensive comparison between Sector 64 and Sector 65 Faridabad plot investment. Compare plot prices, connectivity, road width, and appreciation potential.";
  
  const tags = [
    "plot for sale Sector 65",
    "Sector 65 property",
    "Sector 65 plot price",
    "plot for sale Sector 64",
    "Sector 64 property",
    "Sector 64 plot price"
  ];

  const body = [
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', text: 'If you are hunting for a ' },
        { _type: 'span', marks: ['link-65'], text: 'plot for sale in Sector 65' },
        { _type: 'span', text: ' or a ' },
        { _type: 'span', marks: ['link-64'], text: 'plot for sale in Sector 64' },
        { _type: 'span', text: ", chances are you have already shortlisted both — and now you're stuck comparing them side by side. Both sectors sit next to each other in Faridabad's high-demand Greater Faridabad / Ballabgarh belt, both offer 100 Gaj to 500 Gaj freehold plots, and both are seeing genuine end-user and investor interest in 2026. But the two sectors are not identical, and the right choice depends on your budget, purpose (self-use vs investment), and timeline." }
      ],
      markDefs: [
        { _key: 'link-65', _type: 'link', href: '/properties/sector-65-faridabad' },
        { _key: 'link-64', _type: 'link', href: '/properties/sector-64-faridabad' }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', text: 'This guide breaks down ' },
        { _type: 'span', marks: ['link-64-prop'], text: 'Sector 64 property' },
        { _type: 'span', text: ' and ' },
        { _type: 'span', marks: ['link-65-prop'], text: 'Sector 65 property' },
        { _type: 'span', text: ' on every parameter that actually matters — location, connectivity, plot prices, infrastructure, and future appreciation — so you can make a decision with confidence instead of guesswork.' }
      ],
      markDefs: [
        { _key: 'link-64-prop', _type: 'link', href: '/properties/sector-64-faridabad' },
        { _key: 'link-65-prop', _type: 'link', href: '/properties/sector-65-faridabad' }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'Quick Comparison: Sector 64 vs Sector 65 Faridabad' }]
    },
    // Custom Table Object
    {
      _type: 'table',
      _key: 'comparison-table-key',
      rows: [
        {
          _type: 'tableRow',
          _key: 'row-header',
          cells: ['Parameter', 'Sector 65', 'Sector 64']
        },
        {
          _type: 'tableRow',
          _key: 'row-1',
          cells: [
            'Positioning',
            'Prime sector hub, closer to Delhi-Mumbai Expressway interchange',
            'High-demand adjoining sector, slightly more affordable'
          ]
        },
        {
          _type: 'tableRow',
          _key: 'row-2',
          cells: [
            'Plot Sizes Available',
            '100, 160, 250, 350 & 500 Gaj',
            '100, 160, 250, 350 & 500 Gaj'
          ]
        },
        {
          _type: 'tableRow',
          _key: 'row-3',
          cells: [
            'Road Width',
            '12m to 18m planned sector roads',
            '9m to 18m sector roads'
          ]
        },
        {
          _type: 'tableRow',
          _key: 'row-4',
          cells: [
            'Ownership',
            'Single-owner freehold registry',
            'Single-owner freehold registry'
          ]
        },
        {
          _type: 'tableRow',
          _key: 'row-5',
          cells: [
            'Entry-Level Price (100 Gaj)',
            'Starting ~₹1.70 Cr',
            'Starting ~₹1.60 Cr'
          ]
        },
        {
          _type: 'tableRow',
          _key: 'row-6',
          cells: [
            'Best Suited For',
            'Buyers wanting a prime, established address',
            'Buyers wanting similar infrastructure at a relatively lower entry price'
          ]
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'Location & Connectivity' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', marks: ['strong'], text: 'Sector 65' },
        { _type: 'span', text: " is arguably the more prominent of the two — it sits right where Faridabad's bypass road meets the Delhi-Mumbai Expressway corridor, giving residents a fast, direct route toward Delhi, Gurgaon, and Palwal without fighting through the city's older, congested pockets. The Raja Nahar Singh Metro Station (Violet Line) and Ballabhgarh Railway Station are both roughly 5-6 km away, and NH-19 (Mathura Road) is easily accessible. This is also where Nakul Properties' own head office is based, which means faster site visits and on-ground due diligence for buyers looking at " },
        { _type: 'span', marks: ['link-65-prop2'], text: 'Sector 65 property' },
        { _type: 'span', text: '.' }
      ],
      markDefs: [
        { _key: 'link-65-prop2', _type: 'link', href: '/properties/sector-65-faridabad' }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', marks: ['strong'], text: 'Sector 64' },
        { _type: 'span', text: ' is immediately adjacent to Sector 65 and shares almost the same connectivity backbone — the same bypass road access, the same proximity to Ballabgarh\'s railway and metro links, and the same closeness to IMT Faridabad and the expressway. The difference is largely about maturity: Sector 65 has developed slightly faster as a commercial and social hub, while Sector 64 is still catching up on markets and civic amenities, which is exactly why it currently trades at a lower entry price.' }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'Plot Prices: Sector 65 Plot Price vs Sector 64 Plot Price' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', text: 'This is usually the deciding factor for most buyers, so let\'s look at real numbers.' }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', marks: ['strong', 'link-65-price'], text: 'Sector 65 plot price' },
        { _type: 'span', text: ' (verified freehold listings):' }
      ],
      markDefs: [
        { _key: 'link-65-price', _type: 'link', href: '/properties/sector-65-faridabad' }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [{ _type: 'span', text: '100 Gaj — around ₹1.70 Cr (~₹1,70,000/sq. yd)' }]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [{ _type: 'span', text: '160 Gaj — around ₹2.55 Cr (~₹1,59,375/sq. yd)' }]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [{ _type: 'span', text: '250 Gaj — around ₹3.55 Cr (~₹1,42,000/sq. yd)' }]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [{ _type: 'span', text: '350 Gaj (corner) — around ₹4.50 Cr (~₹1,28,571/sq. yd)' }]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [{ _type: 'span', text: '500 Gaj — around ₹5.15 Cr (~₹1,03,000/sq. yd)' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', marks: ['strong', 'link-64-price'], text: 'Sector 64 plot price' },
        { _type: 'span', text: ' (verified freehold listings):' }
      ],
      markDefs: [
        { _key: 'link-64-price', _type: 'link', href: '/properties/sector-64-faridabad' }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [{ _type: 'span', text: '100 Gaj — around ₹1.60 Cr (~₹1,60,000/sq. yd)' }]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [{ _type: 'span', text: '160 Gaj — around ₹2.50 Cr (~₹1,56,250/sq. yd)' }]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [{ _type: 'span', text: '250 Gaj — around ₹3.40 Cr (~₹1,36,000/sq. yd)' }]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [{ _type: 'span', text: '350 Gaj — around ₹4.10 Cr (~₹1,17,142/sq. yd)' }]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [{ _type: 'span', text: '500 Gaj — around ₹5.65 Cr (~₹1,13,000/sq. yd)' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', text: 'As a broad rule, per-sq.-yd rates in Sector 64 run somewhat lower than Sector 65 across most plot sizes, since Sector 65 commands a premium for its head-office presence, wider primary roads, and more established micro-market. Note that exact rates always vary with facing, corner status, and road width, so treat these as indicative starting points rather than fixed rates. For current verified rates, it\'s best to speak directly to a local consultant rather than rely on portal averages, which can swing widely with a small number of listings.' }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'Infrastructure & Road Network' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', text: "Both sectors follow HUDA's planned layout with sector roads ranging from 12m to 18m wide, underground utilities, and designated green belts. Sector 65 tends to have a marginally higher share of 18m-wide roads and corner/dual-road plots currently on the market, which naturally pushes up per-yard pricing on those specific plots. Sector 64 plots are more commonly on 9m to 12m internal roads, with 18m frontage available mainly on premium 500 Gaj plots — a key reason its overall average sits lower." }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'Social Infrastructure: Schools, Hospitals & Markets' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', text: "Sector 65 currently has a slight edge here simply because it developed earlier — schools like Vishwa Bharti Public High School, hospitals such as Zenith and Sarvodaya, and retail hubs including the Ballabgarh Main Market and nearby malls are all within a comfortable radius. Sector 64 residents rely on largely the same social infrastructure since the two sectors are neighbours, but a few dedicated local markets and schools are still emerging within Sector 64 itself, which is normal for a sector at this stage of development." }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'Investment Potential & Appreciation' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', text: "For long-term investors, the story is really about entry point vs upside. Sector 65 property already carries a premium because of its prime positioning and expressway access, so appreciation from here is likely to be steadier but more moderate in percentage terms. Sector 64, being the newer and comparatively affordable neighbour, has more room to catch up as its own markets, schools, and internal roads mature — which is why several buyers treat a " },
        { _type: 'span', marks: ['link-64-invest'], text: 'plot for sale in Sector 64' },
        { _type: 'span', text: ' as the higher-upside, higher-patience play, while ' },
        { _type: 'span', marks: ['link-65-invest'], text: 'Sector 65 property' },
        { _type: 'span', text: ' is picked for its more immediate, established appeal.' }
      ],
      markDefs: [
        { _key: 'link-64-invest', _type: 'link', href: '/properties/sector-64-faridabad' },
        { _key: 'link-65-invest', _type: 'link', href: '/properties/sector-65-faridabad' }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'Which One Should You Choose?' }]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        { _type: 'span', marks: ['strong'], text: 'Choose Sector 65' },
        { _type: 'span', text: ' if you want a more established address, wider primary roads, faster access to the expressway interchange, and are comfortable paying a modest premium for that maturity.' }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      children: [
        { _type: 'span', marks: ['strong'], text: 'Choose Sector 64' },
        { _type: 'span', text: ' if you want the same freehold HUDA plot benefits and near-identical connectivity, but at a relatively lower entry price, and you\'re willing to hold for a few years as the sector\'s own infrastructure catches up.' }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', text: 'In practice, many serious investors don\'t pick just one — they compare live listings across both sectors before finalising, since a well-located 250 Gaj plot in Sector 64 can sometimes offer better relative value than a similarly priced but interior plot in Sector 65.' }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [{ _type: 'span', text: 'FAQs: Sector 64 vs Sector 65 Faridabad' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', marks: ['strong'], text: 'Q1. Which is more expensive — Sector 64 or Sector 65?' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Sector 65 generally commands a higher per-sq.-yd rate than Sector 64 across comparable plot sizes, mainly due to its more established status and wider primary roads.' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', marks: ['strong'], text: 'Q2. Is Sector 64 a good long-term investment compared to Sector 65?' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Yes — Sector 64 offers similar freehold titles and connectivity at a comparatively lower entry price, giving it more room for appreciation as local infrastructure matures.' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', marks: ['strong'], text: 'Q3. Are both sectors approved for bank loans?' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Yes, plots in both Sector 64 and Sector 65 come with clear freehold titles and are eligible for home loans from major banks, subject to standard due diligence.' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', marks: ['strong'], text: 'Q4. What plot sizes are available in Sector 64 and Sector 65?' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Both sectors offer 100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj and 500 Gaj freehold residential plots.' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', marks: ['strong'], text: 'Q5. Which sector has better connectivity to Delhi?' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: 'Both sectors share similar connectivity via NH-19 and the Delhi-Mumbai Expressway bypass, though Sector 65 sits marginally closer to the expressway interchange.' }]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        { _type: 'span', text: 'Looking for a verified ' },
        { _type: 'span', marks: ['link-65-cta'], text: 'plot for sale in Sector 65' },
        { _type: 'span', text: ' or ' },
        { _type: 'span', marks: ['link-64-cta'], text: 'Sector 64' },
        { _type: 'span', text: '? Nakul Properties has 100% legal-title, registry-ready options across both sectors, with direct site visits from our Sector 65 office. ' },
        { _type: 'span', marks: ['link-wa'], text: 'Call or WhatsApp +91 98115 48267' },
        { _type: 'span', text: ' for current rates and available inventory.' }
      ],
      markDefs: [
        { _key: 'link-65-cta', _type: 'link', href: '/properties/sector-65-faridabad' },
        { _key: 'link-64-cta', _type: 'link', href: '/properties/sector-64-faridabad' },
        { _key: 'link-wa', _type: 'link', href: 'https://wa.me/919811548267' }
      ]
    }
  ];

  const postDoc = {
    _type: 'post',
    title: title,
    slug: {
      _type: 'slug',
      current: slug
    },
    excerpt: excerpt,
    publishedAt: new Date().toISOString(),
    tags: tags,
    mainImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAsset._id
      },
      alt: 'Sector 64 vs Sector 65 Faridabad Plot Investment Comparison'
    },
    body: body
  };

  const existingDoc = await client.fetch('*[_type == "post" && slug.current == $slug][0]', { slug });

  if (existingDoc) {
    console.log('Patching existing blog post:', existingDoc._id);
    const res = await client.patch(existingDoc._id).set(postDoc).commit();
    console.log('Post updated with full table & keywords successfully!', res._id);
  } else {
    console.log('Creating blog post...');
    const res = await client.create(postDoc);
    console.log('Post published with table & keywords successfully!', res._id);
  }
}

publishBlogWithTable().catch(err => console.error('Publish error:', err));
