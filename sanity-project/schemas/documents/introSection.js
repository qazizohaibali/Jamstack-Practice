export default {
  title: 'heroSection',
  name: 'introSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      initialValue: 'Career Hero Section',
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
      title: 'Image1',
      name: 'image1',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image2',
      name: 'image2',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Sec Sub Text',
      name: 'secSubText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
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
