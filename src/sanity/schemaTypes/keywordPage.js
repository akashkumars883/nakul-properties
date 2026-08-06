export default {
  name: 'keywordPage',
  title: 'SEO Keyword Pages',
  type: 'document',
  fields: [
    {
      name: 'keywordTitle',
      title: 'Keyword Title (Main Header)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL path, e.g. best-plots-sector-15)',
      type: 'slug',
      options: {
        source: 'keywordTitle',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'seoTitle',
      title: 'SEO Title (Google Tab Title)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'seoDesc',
      title: 'SEO Description (Google Search Snippet)',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'longDescription',
      title: 'Long Description (Introduction Text)',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'benefits',
      title: 'Key Benefits / Core Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'propertyCategory',
      title: 'Filter Properties by Category',
      type: 'string',
      options: {
        list: [
          { title: 'All Properties', value: 'all' },
          { title: 'HUDA Sectors', value: 'huda' },
          { title: 'Gated Townships', value: 'gated' },
          { title: 'Budget & Individual Plots', value: 'budget' },
          { title: 'Builder Floors', value: 'floor' },
          { title: 'Commercial', value: 'commercial' },
        ],
      },
      initialValue: 'all',
      validation: Rule => Rule.required(),
    },
  ],
};
