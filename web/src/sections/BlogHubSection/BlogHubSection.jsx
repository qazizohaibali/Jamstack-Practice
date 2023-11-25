import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import BlogCard from '../../components/BlogCard/BlogCard'

export const BlogHubSection = ({ otherClasses }) => {
  const blogHubSectionClasses = clsx(otherClasses, 'bg-[#2F3034] lg:pb-20 pb-10 mt-[-5px]')
  const {
    allSanityBlogs: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityBlogs {
        nodes {
          featured
          title
          slug {
            current
          }
          publishedAt
          desktopImage {
            ...CustomImage
          }
          mobileImage {
            ...CustomImage
          }
        }
      }
    }
  `)
  return (
    <section className={blogHubSectionClasses} data-testid="blog-hub-section">
      <div className="max-w-[1512px] mx-auto lg:px-[100px] px-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {nodes?.map((node, i) => {
          return !node?.featured && <BlogCard key={i} {...node} />
        })}
      </div>
    </section>
  )
}

export default BlogHubSection
export const query = graphql`
  fragment BlogHubSectionReference on SanityBlogHubSectionReference {
    __typename
    identifier
  }
`
