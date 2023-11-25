import { graphql } from 'gatsby'
import React from 'react'
import EntryRenderer from '../components/EntryRenderer/EntryRenderer'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import FeaturedBlogCard from '../components/FeaturedBlogCard/FeaturedBlogCard'

const IndexPage = (props) => {
  return (
    <Layout isCtaEnabled={true}>
      <FeaturedBlogCard />
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
  query BlogPageQuery($id: String!) {
    page: sanityBlogs(id: { eq: $id }) {
      slug {
        current
      }
      id
      seoTitle
      metaDescription
      __typename
      _createdAt
      _updatedAt
      title
      publishedAt
      featured
      desktopImage {
        ...CustomImage
      }
      mobileImage {
        ...CustomImage
      }
      authors {
        name
      }
      blogCategory {
        category
      }
      _rawBody
    }
  }
`
