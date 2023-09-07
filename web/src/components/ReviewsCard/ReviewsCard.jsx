import React from 'react'
import clsx from 'clsx'
import Image from '../../components/Image/Image'
import { RichText } from '../RichText'
import './reviewscard.scss'

export const ReviewsCard = ({
  otherClasses,
  image,
  name,
  _rawText,
  logo,
  subHeading,
}) => {
  const reviewsCardClasses = clsx(
    otherClasses,
    'w-full p-[25px] bg_gredient_color'
  )

  return (
    <div className={reviewsCardClasses} data-testid="reviews-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Image
            imageData={image}
            otherClasses="rounded-full min-w-[40px] min-h-[40px] w-10 h-10"
          />
          <p className="text-sm lg:text-base font-inter font-bold lg:leading-6 text-blue-100">
            {name}
          </p>
          <span className="font-inter text-xs lg:text-sm lg:leading-[20px] text-gray-100">
            {subHeading}
          </span>
        </div>
        <Image imageData={logo} otherClasses="w-20 lg:w-[125px]" />
      </div>
      <RichText richText={_rawText} otherClasses="reviews_card_rich_text" />
    </div>
  )
}

export default ReviewsCard
