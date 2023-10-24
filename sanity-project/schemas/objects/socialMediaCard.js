export default {
    title: 'social Media Cards',
    name: 'socialMediaCards',
    type: 'object',
    fields: [
      {
        title: 'Icon Image',
        name: 'iconImage',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'link',
        name: 'link',
        type: 'url',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },

    ],
    preview: {
      select: {
        title: 'title',
        media: 'iconImage',
      },
      prepare({title = 'No title', media}) {
        return {
          title,
          media
        }
      },
    },
  }
  