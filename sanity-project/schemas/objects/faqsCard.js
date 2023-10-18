export default {
  title: 'Faqs Card',
  name: 'faqsCard',
  type: 'object',
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'string',
    },
    {
      title: 'Answer',
      name: 'answer',
      type: 'bodyPortableText',
    },
  ],
  preview: {
    select: {
      title: 'question',
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
