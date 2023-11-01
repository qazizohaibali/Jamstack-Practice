export default {
    title: 'Portfolio Hub Section',
    name: 'portfolioHubSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'identifier',
      },
      prepare({title = 'No title'}) {
        return {
          title,
        }
      },
    },
  }
  