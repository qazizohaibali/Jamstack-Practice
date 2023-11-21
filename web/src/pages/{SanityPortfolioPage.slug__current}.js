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
  query PortfolioPageQuery($id: String!) {
    sanityPortfolioPage(id: { eq: $id }) {
      slug {
        current
      }
      seoTitle
      metaDescription
      __typename
      title
      _rawBody
      hoverIcon{
        ...CustomImage
      }
      icon{
        ...CustomImage
      }
      mainImage {
        ...CustomImage
      }
      portfolioCardImages {
        image {
          ...CustomImage
        }
      }
      portfolioCategory
      _rawShortDescription
      _rawDescription
      _rawBody
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
