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
            name: 'pageBuilder',
            type: 'array',
            title: 'Page Builder',
            of: [
                {
                    title: 'Hero Section',
                    name: 'heroSection',
                    type: 'reference',
                    validation: (Rule) => Rule.required(),
                    options: {
                        disableNew: true,
                    },
                    to: [{ type: 'heroSection' }],
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
                    title: 'Is Top Designer',
                    name: 'isTopDesigner',
                    type: 'boolean',
                    initialValue: true,
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
                    title: 'Top Project',
                    name: 'topProject',
                    type: 'array',
                    validation: (Rule) => Rule.required(),
                    options: {
                        disableNew: true,
                    },
                    of: [{ type: 'reference', to: [{ type: 'portfolioPage' }] }],
                },
                {
                    title: 'Recent Project',
                    name: 'recentProject',
                    type: 'array',
                    validation: (Rule) => Rule.required(),
                    options: {
                        disableNew: true,
                    },
                    of: [{ type: 'reference', to: [{ type: 'portfolioPage' }] }],
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
