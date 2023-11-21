export default {
    title: 'Experience',
    name: 'experience',
    type: 'document',
    fields: [
        {
            title: 'Identifier',
            name: 'identifier',
            type: 'string',
        },
        {
            title: 'Experience Years',
            name: 'experienceYears',
            type: 'string',
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
