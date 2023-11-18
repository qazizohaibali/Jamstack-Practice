export default {
  title: 'Portfolio Page',
  name: 'portfolioPage',
  type: 'document',
  fields: [
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      description: 'Exclude leading and trailing backslashes',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Short Description',
      name: 'shortDescription',
      type: 'bodyPortableText',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText',
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'customImage',
    },
    {
      title: 'Portfolio Card Images',
      name: 'portfolioCardImages',
      type: 'array',
      of: [
        {
          type: 'portfolioImages',
        },
      ],
    },
    {
      title: 'portfolioCategory',
      name: 'portfolioCategory',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((variant) => (variant === undefined ? 'This field must not be empty.' : true)),
      options: {
        list: [
          {title: 'Home Interior', value: 'homeInterior'},
          {title: 'Villas', value: 'villas'},
          {title: 'Interior Fit-Out', value: 'interior'},
          {title: 'Home Decoration', value: 'homeDecoration'},
        ],
      },
    },
    {
      title: 'Body',
      name: 'body',
      type: 'bodyPortableText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
