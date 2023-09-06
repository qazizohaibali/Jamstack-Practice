export default {
    title: 'Founder Video Card',
    name: 'founderVideoCard',
    type: 'object',
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },         
          {
            title: 'Youtube',
            name: 'youtube',
            type: 'youtube',
          },
    ],
    preview: {
      select: {
        heading: 'heading',
      },
      prepare({ heading = 'No title' }) {
        return {
          title: heading,
        }
      },
    },
  }