export default {
  title: 'Parallax Section',
  name: 'parallaxSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
    {
      title: 'Video',
      name: 'video',
      type: 'file',
    },
  ],
  preview: {
    select: {
      title: 'identifier',
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
