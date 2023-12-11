export default {
  title: 'Services Hero Section',
  name: 'servicesHeroSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Main Heading',
      name: 'mainHeading',
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
      title: 'Image1',
      name: 'image1',
      type: 'customImage',
    },
    {
      title: 'Image2',
      name: 'image2',
      type: 'customImage',
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
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
