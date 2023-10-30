export default {
    title: 'Two Column Section',
    name: 'twoColumnSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
      },
      {
        title: 'Heading',
        name: 'heading',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Sub Text',
        name: 'subText',
        type: 'bodyPortableText',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Image',
        name: 'image',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
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
  