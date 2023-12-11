export default {
  title: 'Services Two Column',
  name: 'servicesTwoColumn',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Desktop Reversed',
      name: 'desktopReversed',
      type: 'boolean',
      initialValue: 'false',
    },
    {
      title: 'Mobile Reversed',
      name: 'mobileReversed',
      type: 'boolean',
      initialValue: 'false',
    },
    {
      title: 'Main Heading',
      name: 'mainHeading',
      type: 'string',
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
    },
    {
      title: 'Paras About Services',
      name: 'parasAboutServices',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      title: 'Image',
      name: 'image',
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
