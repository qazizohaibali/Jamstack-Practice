export default {
  name: 'pages',
  type: 'document',
  title: 'Pages',
  fields: [
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
      title: 'Indexed',
      name: 'isIndexed',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
          to: [{type: 'heroSection'}],
        },
        {
          title: 'Intro Section',
          name: 'introSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'introSection'}],
        },
        {
          title: 'Services Section',
          name: 'servicesSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'servicesSection'}],
        },
        {
          title: 'Our Projects Section',
          name: 'ourProjectsSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'ourProjectsSection'}],
        },
        {
          title: 'Faqs Section',
          name: 'faqsSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'faqsSection'}],
        },
        {
          title: 'Our Products Section',
          name: 'ourProductsSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'ourProductsSection'}],
        },
        {
          title: 'Portfolio Hub Section',
          name: 'portfolioHubSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'portfolioHubSection'}],
        },
        {
          title: 'Social Media Section',
          name: 'socialMediaSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'socialMediaSection'}],
        },
        {
          title: 'Mini Hero Section',
          name: 'miniHeroSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'miniHeroSection'}],
        },
        {
          title: 'Featured Text Section',
          name: 'featuredTextSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'featuredTextSection'}],
        },
        {
          title: 'About Intro Section',
          name: 'aboutIntroSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'aboutIntroSection'}],
        },
        {
          title: 'About Two Column Section',
          name: 'twoColumnSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'twoColumnSection'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
