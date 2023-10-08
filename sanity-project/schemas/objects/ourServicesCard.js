export default {
    title: 'Our Services Card',
    name: 'ourServicesCard',
    type: 'object',
    fields: [
      {
        title: 'Image',
        name: 'image',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
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
    ],
    preview: {
      select: {
        title: 'heading',
        media: 'image',
      },
      prepare({title = 'No title', media}) {
        return {
          title,
          media
        }
      },
    },
  }
  