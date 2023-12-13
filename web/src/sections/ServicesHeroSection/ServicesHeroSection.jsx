import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
import Image from '../../components/Image/Image'
import Button from '../../components/Button'

export const ServicesHeroSection = ({
  otherClasses,
  mainHeading,
  image1,
  image2,
  // button,
  _rawFirstSubText,
  _rawSecSubText,
}) => {
  const servicesHeroSectionClasses = clsx(otherClasses)

  return (
    <section
      className={servicesHeroSectionClasses}
      data-testid="services-hero-section"
    >
      <div className="flex lg:gap-16 xl:gap-[100px] lg:px-[70px] px-4">
        <div className="w-full lg:w-[65%] flex lg:gap-10">
          <RichText
            richText={_rawFirstSubText}
            otherClasses="serviceshero-FirstSubText w-[30%]"
          />
          <Image imageData={image1} otherClasses="w-[70%]" />
        </div>
        <div className="w-full lg:w-[35%]">
          <RichText
            richText={_rawSecSubText}
            otherClasses="serviceshero-SecSubText"
          />
          {/* <Button {...button} /> */}
          <Image imageData={image2} otherClasses="" />
        </div>
      </div>
    </section>
  )
}

export default ServicesHeroSection

export const query = graphql`
  fragment ServicesHeroSection on SanityServicesHeroSection {
    __typename
    mainHeading
    image1 {
      ...CustomImage
    }
    image2 {
      ...CustomImage
    }

    _rawFirstSubText
    _rawSecSubText
  }
`
