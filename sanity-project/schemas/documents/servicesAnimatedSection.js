export default {
  title: 'Services Animated Section',
  name: 'servicesAnimatedSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'First Sub Text',
      name: 'firstSubText',
      type: 'bodyPortableText',
    },
    {
      title: 'Sec Sub Text',
      name: 'secSubText',
      type: 'bodyPortableText',
    },
    {
      title: 'First Image',
      name: 'firstImage',
      type: 'customImage',
    },
    {
      title: 'Second Image',
      name: 'secondImage',
      type: 'customImage',
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
