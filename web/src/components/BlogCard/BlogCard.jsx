import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import Image from '../Image/Image'
import './blogcard.scss'
import Heading from '../Heading'

export const BlogCard = ({ otherClasses, slug, mobileImage, title }) => {
  const blogCardClasses = clsx(otherClasses,'')

  return (
    <Link
      to={`/${slug.current}`}
      className={blogCardClasses}
      data-testid="blog-card"
    >
      <>
        <div className="">
          <div className="w-full group">
            {mobileImage && (
              <div className="overflow-hidden">
                <Image
                  imageData={mobileImage}
                  otherClasses="h-full group-hover:scale-[1.1] duration-150 ease-in"
                />
              </div>
            )}
          </div>
          <div className="w-full bg-[#424242] py-6 lg:h-[280px] flex flex-col justify-between px-4">
            <Heading
              type="h6"
              otherClasses="font-light lg:text-3xl relative after:block after:w-[150px] after:h-[1px] after:bg-slate-50 after:absolute after:bottom-[-15px] after:left-0 mb-10"
            >
              {title}
            </Heading>
            <Link
              to={slug.current}
              className="text-[#D99F6F] uppercase text-lg font-semibold font-Montserrat flex items-center"
            >
              Read More
              <div className="w-fit rotate-180">
                <span className="block bg-[#D99F6F] h-[3px] w-[12px] -rotate-[28deg]"></span>
                <span className="block bg-[#D99F6F] h-[3px] w-[22px] mr-2"></span>
                <span className="block bg-[#D99F6F] h-[3px] w-[12px] rotate-[28deg]"></span>
              </div>
            </Link>
          </div>
        </div>
      </>
    </Link>
  )
}

export default BlogCard
