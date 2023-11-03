import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import BlogCard from '../../components/Blogcard/Blogcard'

export const BlogHubSection = ({ otherClasses }) => {
  const blogHubSectionClasses = clsx(otherClasses, 'w-full pb-16 lg:pb-[131px]')
  const {
    allSanityBlogs: { nodes },
  } = useStaticQuery(graphql`
    query BlogHubSection {
      allSanityBlogs {
        nodes {
          __typename
          title
          mobileImage {
            ...CustomImage
          }
          slug {
            current
          }
          blogCategory {
            category
          }
        }
      }
    }
  `)

  return (
    <section className={blogHubSectionClasses} data-testid="blog-hub-section">
      <div className="w-full max-w-[1512px] mx-auto px-6 lg:px-20 xl:px-[118px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[120px] mb-16">
          {nodes.map((nodes, index) => {
            return <BlogCard {...nodes} key={index} />
          })}
        </div>
        {/* <div className="flex items-center justify-center">
          <Button variant="tertiary" label="Load More" />
        </div> */}
      </div>
    </section>
  )
}

export default BlogHubSection
