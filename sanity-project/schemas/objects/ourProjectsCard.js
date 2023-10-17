export default {
    title: 'Our Projects Card',
    name: 'ourProjectsCard',
    type: 'object',
    fields: [
      {
        title: 'Placeholder Image',
        name: 'placeholderImage',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Vedio Url',
        name: 'vedioUrl',
        type: 'url',
        validation: (Rule) => Rule.required(),
      },

    ],
    preview: {
      select: {
        title: 'heading',
        media: 'placeholderImage',
      },
      prepare({title = 'No title', media}) {
        return {
          title,
          media
        }
      },
    },
  }
  