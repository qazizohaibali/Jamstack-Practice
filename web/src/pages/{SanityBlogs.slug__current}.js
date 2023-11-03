import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'
import BlogPostSection from '../sections/BlogPostSection/BlogPostSection'
// import FeaturedBlogSection from '../sections/FeatureBlogSection/FeatureBlogSection'
// import FeaturedBlogSection from '../sections/FeaturedBlogSection/FeaturedBlogSection'

const BlogPostTemplate = (props) => {
  const { data } = props
  const post = data && data.sanityBlogs
  const site = data && data.site
  return (
    <Layout>
      <BlogPostSection {...post} {...site} />
    </Layout>
  )
}

export const Head = ({
  data: {
    sanityBlogs: { seoTitle, metaDescription },
  },
}) => <Seo title={seoTitle} description={metaDescription} />

export default BlogPostTemplate

export const query = graphql`
  query BlogPostQuery($id: String!) {
    sanityBlogs(id: { eq: $id }) {
      __typename
      id
      title
      slug {
        current
      }
      publishedAt(formatString: "MMMM d, yyyy")
      seoTitle
      metaDescription
      desktopImage {
        ...CustomImage
      }
      mobileImage {
        ...CustomImage
      }
      authors {
        name
        customImage {
          asset {
            gatsbyImageData
          }
        }
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
