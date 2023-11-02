import { graphql } from 'gatsby'
import React from 'react'
import EntryRenderer from '../components/EntryRenderer/EntryRenderer'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

const IndexPage = (props) => {
  return (
    <Layout isCtaEnabled={true}>
      <EntryRenderer pageBuilderData={props.data.page.pageBuilder} />
    </Layout>
  )
}

export const Head = ({
  data: {
    page: { seoTitle, metaDescription },
  },
}) => <Seo title={seoTitle} description={metaDescription} />

export default IndexPage

export const query = graphql`
  query PageQuery($id: String!) {
    page: sanityPages(id: { eq: $id }) {
      seoTitle
      metaDescription
      pageBuilder {
        ...HeroSection
        ...IntroSection
        ...ServicesSection
        ...OurProjectsSection
        ...OurProductsSection
        ...SocialMediaSection
        ...FaqsSection
        ...MiniHeroSection
        ...FeaturedTextSection
        ...AboutIntroSection
        ...AboutTwoColumnSection
        ...PortfolioHubSection
      }
    }
  }
`
