import React from 'react'
import clsx from 'clsx'
import Image from '../Image/Image'
import ImageUrlBuilder from '@sanity/image-url'
import './ourbodycard.scss'

import { Heading } from '../Heading'
import { getImageDimensions } from '@sanity/asset-utils'
import clientConfig from '../../../client-config'
export const OurBodyCard = ({ otherClasses, cards, isInline }) => {

  const builder = ImageUrlBuilder({
    ...clientConfig.sanity,
  })
  const ourBodyCardClasses = clsx(otherClasses,"mt-[32px]")
  return (
    <div className={ourBodyCardClasses} data-testid="our-body-card">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {cards.map(({ heading, icon, subText }) => {
          const { width, height } = getImageDimensions(icon)
          return (
            <div className="max-w-[347px] ">
              <div className="flex items-center gap-[16px] mb-[26px] mt-[32px]">
                <img
                  src={builder
                    .image(icon)
                    .width(isInline ? 100 : 800)
                    .fit('max')
                    .auto('format')
                    .url()}
                  alt={icon.alt || ' '}
                  loading="eager"
                  style={{
                    display: isInline ? 'inline-block' : 'block',
                    aspectRatio: width / height,
                  }}
                />
                <Heading type="h6">{heading}</Heading>
              </div>
              <div>
                <p>{subText}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OurBodyCard
