export default {
    title: 'Profile Hub Section',
    name: 'profileHubSection',
    type: 'document',
    fields: [
        {
            title: 'Identifier',
            name: 'identifier',
            type: 'string',
            initialValue: 'Career Hero Section',
        },
        {
            title: 'Top Heading',
            name: 'topHeading',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'All Heading',
            name: 'allHeading',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'See All Button',
            name: 'seeAllButton',
            type: 'button',
        },
        {
            title: 'Upload Button',
            name: 'uploadButton',
            type: 'button',
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
