export default {
    title: 'Location',
    name: 'location',
    type: 'document',
    fields: [
        {
            title: 'Identifier',
            name: 'identifier',
            type: 'string',
        },
        {
            title: 'City',
            name: 'city',
            type: 'string',
        },
        {
            title: 'Country',
            name: 'country',
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
