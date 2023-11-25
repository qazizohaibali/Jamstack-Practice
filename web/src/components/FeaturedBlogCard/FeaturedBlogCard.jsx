import React from 'react'
import clsx from 'clsx'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from '../Image/Image'
import Heading from '../Heading'

export const FeaturedBlogCard = ({ otherClasses }) => {
  const featuredBlogCardClasses = clsx(otherClasses, 'bg-[#2F3034]')

  const {
    allSanityBlogs: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityBlogs {
        nodes {
          _id
          _type
          _createdAt
          title
          featured
          mobileImage {
            ...CustomImage
          }
          desktopImage {
            ...CustomImage
          }
          slug {
            current
          }
        }
      }
    }
  `)
  const featured = nodes?.filter((node) => {
    return node.featured === true
  })

  return (
    <div className={featuredBlogCardClasses} data-testid="featured-blog-card">
      <div className="max-w-[1512px] mx-auto lg:px-[100px] px-4 flex items-stretch lg:flex-row flex-col lg:pt-20 lg:pb-16 pt-10 pb-10 ">
        {featured?.map((node, i) => {
          return (
            <>
              <div className="lg:w-[45%] w-full group">
                {node?.desktopImage && (
                  <div className='overflow-hidden h-full'>
                    <Image
                      imageData={node?.desktopImage}
                      otherClasses="h-full group-hover:scale-[1.1] duration-150 ease-in"
                    />
                  </div>
                )}
              </div>
              <div className="lg:w-[55%] w-full bg-[#424242]  py-8  px-6 lg:p-20">
                <p className="font-Montserrat text-xl uppercase text-[#979797] font-medium">
                  outdoor design dubai
                </p>
                <p className="font-Montserrat text-xl uppercase text-[#979797] font-medium">
                  July 21, 2034
                </p>
                <Heading
                  type="h2"
                  otherClasses="font-light lg:mt-10 lg:text-5xl lg:leading-[58px] relative after:block after:w-[150px] after:h-[1px] after:bg-slate-50 after:absolute after:bottom-[-15px] after:left-0 lg:mb-20 mb-10"
                >
                  {node?.title}
                </Heading>
                <Link
                  to={node?.slug.current}
                  className="text-[#D99F6F] uppercase lg:text-2xl text-lg font-semibold font-Montserrat flex items-center"
                >
                  Read More
                  <div className="w-fit rotate-180">
                    <span className="block bg-[#D99F6F] h-[3px] w-[12px] -rotate-[28deg]"></span>
                    <span className="block bg-[#D99F6F] h-[3px] w-[22px] mr-2"></span>
                    <span className="block bg-[#D99F6F] h-[3px] w-[12px] rotate-[28deg]"></span>
                  </div>
                </Link>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedBlogCard
export const query = graphql`
  fragment BlogSectionRefernce on SanityBlogSectionReference {
    __typename
    identifier
    title
  }
`
