export default {
    title: 'Blog Hub Section Reference',
    name: 'blogHubSectionReference',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
        validation: (Rule) => Rule.required(),
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
  