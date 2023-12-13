import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
import Image from '../../components/Image/Image'
import Button from '../../components/Button'
import Heading from '../../components/Heading'

import "./servicesherosection.scss"

export const ServicesHeroSection = ({
  otherClasses,
  mainHeading,
  image1,
  image2,
  // button,
  _rawFirstSubText,
  _rawSecSubText,
}) => {
  const servicesHeroSectionClasses = clsx(otherClasses, 'bg-[#222327] py-16')

  return (
    <section
      className={servicesHeroSectionClasses}
      data-testid="services-hero-section"
    >
      <div className=" relative flex lg:gap-16 xl:gap-[100px] lg:px-[70px] px-4">
        <div className="w-full relative lg:w-[65%] ">
          <div className="flex relative w-full h-full lg:gap-10">
            <RichText
              richText={_rawFirstSubText}
              otherClasses="serviceshero-FirstSubText w-[35%] pt-10"
            />
            <Image imageData={image1} otherClasses="w-[65%] max-h-[420px]" />
          </div>
          <Heading
            type="h3"
            otherClasses="absolute bottom-20 left-5 lg:text-[170px] tracking-wide leading-[140px]"
          >
            {mainHeading}
          </Heading>
        </div>
        <div className="w-full lg:w-[35%]">
          <RichText
            richText={_rawSecSubText}
            otherClasses="serviceshero-SecSubText"
          />
          <Button label="Reach Us" variant="primary" otherClasses="mt-6 mb-14" />
          <Image imageData={image2} otherClasses="max-h-[400px]" />
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
