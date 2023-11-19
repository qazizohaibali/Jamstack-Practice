export default {
    title: 'Blog Authors',
    name: 'authors',
    type: 'document',
    fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'string',
      },
      {
        title: 'Image',
        name: 'image',
        type: 'customImage',
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  