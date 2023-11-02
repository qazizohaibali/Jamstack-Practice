export default {
    title: 'blog Section Reference',
    name: 'blogSectionReference',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'identifier',
        subtitle: 'title',
      },
      prepare({title = 'No title', subtitle}) {
        return {
          title,
          subtitle,
        }
      },
    },
  }
  