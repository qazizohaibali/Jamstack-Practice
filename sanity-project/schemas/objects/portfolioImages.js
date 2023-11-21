export default {
  title: 'Portfolio Images',
  name: 'portfolioImages',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare({ title = 'No title', media }) {
      return {
        title,
        media,
      }
    },
  },
}
