import React from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'
import Image from '../../components/Image/Image'

import './ourproductsection.scss'

export const OurProductSection = ({
  otherClasses,
  heading,
  _rawSubText,
  cards,
}) => {
  const ourProductSectionClasses = clsx(otherClasses, 'bg-[#2f3034] text-white')

  return (
    <section
      className={ourProductSectionClasses}
      data-testid="our-product-section"
    >
      <div className="max-w-[1512px] mx-auto lg:px-[70px] xl:px-[150px] px-4 lg:py-20 py-10">
        <div className="text-center max-w-[800px] mx-auto">
          <Heading otherClasses="" type="h4">
            {heading}
          </Heading>
          <RichText richText={_rawSubText} otherClasses="ourproduct-richtext" />
        </div>
        <div className="h-[2px] bg-[#c4c4c4] my-8"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  mx-auto">
          {cards.map(({ image, heading, _rawSubText }) => {
            return (
              <div className="relative w-full px-3 lg:px-0 mx-auto group h-[350px]">
                <Image imageData={image} otherClasses="absolute w-full h-full " />
                <div className="relative -top-[90px] -left-[15px] bg-[#d8a171] p-2 !hidden group-hover:!block">
                  <Heading otherClasses="text-[20px]" type="h4" >
                    {heading}
                  </Heading>
                  <RichText
                    richText={_rawSubText}
                    otherClasses="productcard-richtext"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurProductSection

export const query = graphql`
  fragment OurProductsSection on SanityOurProductsSection {
    _id
    __typename
    heading
    _rawSubText
    cards {
      image {
        ...CustomImage
      }
      productUrl
      heading
      _rawSubText
    }
  }
`
