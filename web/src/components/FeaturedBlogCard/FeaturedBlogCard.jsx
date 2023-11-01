import React from 'react'
import clsx from 'clsx'
import image from '../../images/featured-image.png'

export const FeaturedBlogCard = ({ otherClasses }) => {
  const featuredBlogCardClasses = clsx(otherClasses,'bg-[#2F3034]')

  return (
    <div className={featuredBlogCardClasses} data-testid="featured-blog-card">
      <div className="max-w-[1512px] mx-auto xl:px-[100px] lg:[70px] px-4 flex items-stretch lg:flex-row flex-col">
        <div className='lg:w-[45%] w-full'>
          <img className='w-full' src={image} alt="" />
        </div>
        <div className='lg:w-[55%] w-full bg-[#424242] p-20'>
          <p className='font-Montserrat text-xl uppercase text-[#979797] font-semibold'>outdoor design dubai</p>
          <p className='font-Montserrat text-xl uppercase text-[#979797] font-semibold'>July 21, 2034</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogCard
