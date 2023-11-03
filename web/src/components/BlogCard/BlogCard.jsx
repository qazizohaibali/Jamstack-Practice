import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import Image from '../Image/Image'
import './blogcard.scss'

export const BlogCard = ({
  otherClasses,
  slug,
  title,
  mobileImage,
  blogCategory: { category },
}) => {
  const blogCardClasses = clsx(otherClasses)

  return (
    <Link
      to={`/${slug.current}`}
      className={blogCardClasses}
      data-testid="blog-card"
    >
      <div className="bg_gredient">
        <Image
          imageData={mobileImage}
          otherClasses="w-full object-cover h-[216px]"
        />
      </div>

      <p className="font-inter font-bold tracking-[0.42px] uppercase text-sm leading-[18px] text-white mb-2 mt-6">
        {category}
      </p>
      <p className="font-inter text-base leading-6 text-blue-100 font-semibold">
        {title}
      </p>
    </Link>
  )
}

export default BlogCard
