export default {
  name: 'post',
  title: 'Blog Posts',
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
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt (Short Summary for card preview)',
      type: 'text',
      description: 'A short description of the post shown in the blogs list.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Add tags for categorization (e.g. HUDA, Investment, Registry).',
    },
    {
      name: 'body',
      title: 'Body Content (Detailed Text)',
      type: 'text',
      description: 'Write your full blog post here. Use double line breaks for paragraphs.',
      validation: Rule => Rule.required(),
    },
  ],
};
