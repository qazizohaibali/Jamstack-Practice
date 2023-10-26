export default {
    title: 'About Intro Section',
    name: 'aboutIntroSection',
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
        title: 'Small Image',
        name: 'smallImage',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Large Image',
        name: 'largeImage',
        type: 'customImage',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Happy Clients',
        name: 'happyClients',
        type: 'number',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Projects Done',
        name: 'projectsDone',
        type: 'number',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Awards Won',
        name: 'awardsWon',
        type: 'number',
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
  