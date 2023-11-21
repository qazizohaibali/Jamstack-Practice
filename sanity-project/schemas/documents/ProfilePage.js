export default {
    title: 'Profile Page',
    name: 'ProfilePage',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Slug',
            description: 'Exclude leading and trailing backslashes',
            name: 'slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
            },
        },
        {
            title: 'Published at',
            name: 'publishedAt',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Make this post featured',
            name: 'featured',
            type: 'boolean',
        },
        {
            title: 'SEO Title',
            name: 'seoTitle',
            type: 'string',
        },
        {
            title: 'Meta Description',
            name: 'metaDescription',
            type: 'text',
        },
        {
            title: 'Image',
            name: 'image',
            type: 'customImage',
        },
        {
            title: 'Name',
            name: 'name',
            type: 'string',
        },
        {
            title: 'At Position',
            name: 'atPosition',
            type: 'string',
        },
        {
            title: 'Short Description',
            name: 'shortDescription',
            type: 'bodyPortableText'
        },
        {
            title: 'Location',
            name: 'location',
            type: 'reference',
            validation: (Rule) => Rule.required(),
            options: {
                disableNew: true,
            },
            to: [{ type: 'location' }],
        },
        {
            title: 'Experience',
            name: 'experience',
            type: 'reference',
            validation: (Rule) => Rule.required(),
            options: {
                disableNew: true,
            },
            to: [{ type: 'experience' }],
        },
        {
            title: 'Profile Card Images',
            name: 'profileCardImages',
            type: 'array',
            of: [
                {
                    type: 'profileCardImages',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title = 'No title' }) {
            return {
                title,
            }
        },
    },
}
