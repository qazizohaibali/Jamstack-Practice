export default {
    title: 'video',
    name: 'video',
    type: 'object',
    fields: [
      {
        title: 'Heading',
        name: 'heading',
        type: 'string',
      },
      {
        name: 'Cards',
        type: 'array',
        title: 'cards',
        of: [
          {
            type: 'founderVideoCard',
        
          }
        ],
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'heading',
      },
      prepare({title = 'No title'}) {
        return {
          title,
        }
      },
    },
  }
  