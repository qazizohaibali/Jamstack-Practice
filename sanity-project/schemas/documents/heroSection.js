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
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'First Button',
      name: 'firstButton',
      type: 'button',
    },
    {
      title: 'Second Button',
      name: 'secondButton',
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
