import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import PortfolioSection from '../sections/PortfolioSection/PortfolioSection'

const IndexPage = (props) => {
  const { data } = props
  const portfolio = data && data.page
  return (
    <Layout isCtaEnabled={true}>
      <PortfolioSection
        siteMetadata={data?.site?.siteMetadata}
        {...portfolio}
      />
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
    page: sanityPortfolioPage(id: { eq: $id }) {
      slug {
        current
      }
      seoTitle
      metaDescription
      __typename
      title

      mainHeading
      _rawBody
      hoverIcon {
        ...CustomImage
      }
      icon {
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
