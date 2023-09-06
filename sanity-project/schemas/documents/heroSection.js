export default {
    title: 'heroSection',
    name: 'heroSection',
    type: 'document',
    fields: [
      {
        title: 'Identifier',
        name: 'identifier',
        type: 'string',
        initialValue: 'Career Hero Section',
      },
      {
        title: 'Main Heading',
        name: 'mainHeading',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Sub Text',
        name: 'subText',
        type: 'bodyPortableText',
        validation: (Rule) => Rule.required(),
      },
    //   {
    //     title: 'mobile Background Image',
    //     name: 'mobileBackgroundImage',
    //     type: 'customImage',
    //     validation: (Rule) => Rule.required(),
    //   },
    //   {
    //     title: 'Desktop Background Image',
    //     name: 'desktopBackgroundImage',
    //     type: 'customImage',
    //     validation: (Rule) => Rule.required(),
    //   },
    //   {
    //     title: 'ImagesCards',
    //     name: 'imagesCards',
    //     type: 'array',
    //     of: [
    //       {
    //         type: 'logoCard',
    //       },
    //     ],
    //   },
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
  