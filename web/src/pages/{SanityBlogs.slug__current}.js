import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import BlogPostSection from '../sections/BlogPostSection/BlogPostSection'

const IndexPage = (props) => {
  const { data } = props
  const post = data && data.page
  return (
    <Layout isCtaEnabled={true}>
      <BlogPostSection siteMetadata={data?.site?.siteMetadata} {...post}/>
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
      _rawBody
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
