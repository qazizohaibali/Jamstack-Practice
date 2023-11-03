export default {
  title: 'Portfolio Images',
  name: 'portfolioImages',
  type: 'object',
  fields: [
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'customImage',
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'customImage',
        },
      ],
    },
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
