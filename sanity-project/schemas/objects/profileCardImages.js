export default {
    title: 'Profile Card Images',
    name: 'profileCardImages',
    type: 'object',
    fields: [
        {
            title: 'Identifier',
            name: 'identifier',
            type: 'string',
        },
        {
            title: 'Image',
            name: 'image',
            type: 'customImage',
        },
        {
            name: "url",
            type: "url",
            title: "Source URL",
            validation: (Rule) =>
                Rule.uri({
                    scheme: ["http", "https"],
                    allowRelative: true,
                }).required(),
        },
        {
            title: 'Is Top Project',
            name: 'isTopProject',
            type: 'boolean'
        }
    ],
    preview: {
        select: {
            media: 'image',
            title: 'identifier',
        },
        prepare({ title = 'No title', media }) {
            return {
                title,
                media,
            }
        },
    },
}
