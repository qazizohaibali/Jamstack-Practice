export default {
    title: 'Relevant Profile Featured',
    name: 'relevantProfileFeatured',
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
    ],
    preview: {
        select: {
            title: 'identifier',
        },
        prepare({ title = 'No title' }) {
            return {
                title,
            }
        },
    },
}
