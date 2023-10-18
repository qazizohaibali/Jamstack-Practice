export default {
  title: 'Our Product Card',
  name: 'ourProductCard',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
    {
      title: 'Product Url',
      name: 'productUrl',
      type: 'url',
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
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
        media,
      }
    },
  },
}
