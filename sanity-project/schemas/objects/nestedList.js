export default {
    title: 'Nested List',
    name: 'nestedList',
    type: 'object',
    fields: [
      {
        title: 'List Index',
        name: 'ListIndex',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'List',
        name: 'list',
        type: 'array',
        of:[
          {
            type:'bodyPortableText'
          }
        ],
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        text: 'text',
      },
      prepare({text = 'No title'}) {
        return {
          title: text,
        }
      },
    },
  }
  