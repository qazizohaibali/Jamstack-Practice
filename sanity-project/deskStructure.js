const JAMSTACK_SECTIONS = [
  {
    sectionType: 'heroSection',
    sectionTitle: 'Hero Section',
  },
  {
    sectionType: 'servicesSection',
    sectionTitle: 'Services Section',
  },
  {
    sectionType: 'introSection',
    sectionTitle: 'Intro Section',
  },
  {
    sectionType: 'ourProjectsSection',
    sectionTitle: 'Our Projects Section',
  },
  {
    sectionType: 'ourProductsSection',
    sectionTitle: 'Our Products Section',
  },
  {
    sectionType: 'faqsSection',
    sectionTitle: 'Faqs Section',
  },
  {
    sectionType: 'socialMediaSection',
    sectionTitle: 'Social Media Section',
  },
  {
    sectionType: 'miniHeroSection',
    sectionTitle: 'Mini Hero Section',
  },
  {
    sectionType: 'featuredTextSection',
    sectionTitle: 'Featured Text Section',
  },
  {
    sectionType: 'aboutIntroSection',
    sectionTitle: 'About Intro Section',
  },
  {
    sectionType: 'twoColumnSection',
    sectionTitle: 'Two Column Section',
  },
  {
    sectionType: 'portfolioHubSection',
    sectionTitle: 'Portfolio Hub Section',
  },
  {
    sectionType: 'authors',
    sectionTitle: 'Authors',
  },
  {
    sectionType: 'blogCategory',
    sectionTitle: 'Blog Category',
  },
  {
    sectionType: 'blogSectionReference',
    sectionTitle: 'Blog Section Reference',
  },
  {
    sectionType: 'experience',
    sectionTitle: 'Experience',
  },
  {
    sectionType: 'location',
    sectionTitle: 'Location',
  },
  {
    sectionType: 'relevantProfileFeatured',
    sectionTitle: 'Relevant Profile Featured',
  },
]

const JAMSTACK_TEMPLATE = [
  {
    templateType: 'pages',
    templateTitle: 'Pages',
  },
  {
    templateType: 'portfolioPage',
    templateTitle: 'Portfolio Page',
  },
  {
    templateType: 'blogs',
    templateTitle: 'Blogs',
  },
  {
    templateType: 'ProfilePage',
    templateTitle: 'Profile Page',
  },

]

export const myStructure = (S) =>
  S.list()
    .title('Website')
    .items([
      S.listItem()
        .title('JamStack Site')
        .child(
          S.list()
            .title('JamStack Site')
            .items([
              S.listItem()
                .title('Sections')
                .child(
                  S.list()
                    .title('Sections')
                    .items(
                      JAMSTACK_SECTIONS.sort((a, b) =>
                        a.sectionTitle.localeCompare(b.sectionTitle),
                      ).map((section) => {
                        return S.listItem()
                          .title(section.sectionTitle)
                          .child(S.documentTypeList(section.sectionType))
                      }),
                    ),
                ),
              S.listItem()
                .title('Templates')
                .child(
                  S.list()
                    .title('Templates')
                    .items(
                      JAMSTACK_TEMPLATE.sort((a, b) =>
                        a.templateTitle.localeCompare(b.templateTitle),
                      ).map((section) => {
                        return S.listItem()
                          .title(section.templateTitle)
                          .child(S.documentTypeList(section.templateType))
                      }),
                    ),
                ),
            ]),
        ),
      S.divider(),
    ])
