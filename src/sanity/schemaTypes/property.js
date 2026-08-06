export default {
  name: 'property',
  title: 'Properties',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (Unique Identifier / URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'HUDA / HSVP Sector Plots', value: 'huda' },
          { title: 'Gated Townships & Registry Plots', value: 'gated' },
          { title: 'Independent Builder Floors', value: 'floor' },
          { title: 'Commercial Shops & SCO', value: 'commercial' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'listingType',
      title: 'Listing Type',
      type: 'string',
      options: {
        list: [
          { title: 'For Sale', value: 'For Sale' },
          { title: 'For Rent', value: 'For Rent' },
        ],
      },
      initialValue: 'For Sale',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Example: ₹1.85 Cr or ₹45,000 / mo',
      validation: Rule => Rule.required(),
    },
    {
      name: 'priceSub',
      title: 'Price Subtext / Per Sq. Yd',
      type: 'string',
      description: 'Example: ₹74,000 / Sq. Yd or Rent | + Maintenance',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Example: Sector 14, Faridabad',
      validation: Rule => Rule.required(),
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      description: 'Example: 250 Sq. Yds (Gaj) or 600 Sq. Ft (Carpet)',
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'Example: 30 ft × 75 ft',
    },
    {
      name: 'facing',
      title: 'Facing',
      type: 'string',
      description: 'Example: North-East Facing',
    },
    {
      name: 'roadSize',
      title: 'Road Size',
      type: 'string',
      description: 'Example: 12 Meter Wide Road',
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      description: 'Example: HUDA Approved, Corner Plot, Ground Floor',
    },
    {
      name: 'verified',
      title: 'Verified Listing',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'featured',
      title: 'Featured Listing (Show on Homepage Featured Section)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'features',
      title: 'Features / Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Example: Private Lift, Modular Kitchen, Gated Security',
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      description: 'Detailed description of the property.',
    },
  ],
};
