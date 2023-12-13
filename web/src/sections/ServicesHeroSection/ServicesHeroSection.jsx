import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
import Image from '../../components/Image/Image'
import Button from '../../components/Button'
import Heading from '../../components/Heading'

import './servicesherosection.scss'

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
      <div className="max-w-[1440px] mx-auto relative flex flex-col lg:flex-row gap-20 lg:gap-16 xl:gap-[100px] lg:px-[70px] px-4">
        <div className="w-full relative lg:w-[65%] ">
          <div className="lg:flex lg:flex-row lg:relative w-full h-full lg:gap-10">
            <RichText
              richText={_rawFirstSubText}
              otherClasses="serviceshero-FirstSubText w-[70%] lg:w-[35%] pt-11 pb-3 lg:pb-0"
            />
            <Image
              imageData={image1}
              otherClasses="lg:w-[65%] w-[80%] h-full lg:max-h-[420px] float-right right-0"
            />
          </div>
          <Heading
            type="h3"
            otherClasses="absolute -bottom-11 md:bottom-14 text-[60px] max-w-[200px] md:max-w-full leading-[50px]  xl:bottom-20 left-3 md:left-5 lg:text-[130px] lg:leading-[120px] xl:text-[170px] tracking-wide xl:leading-[140px]"
          >
            {mainHeading}
          </Heading>
        </div>
        <div className="w-full lg:w-[35%]">
          <RichText
            richText={_rawSecSubText}
            otherClasses="serviceshero-SecSubText"
          />
          <Button
            label="Reach Us"
            variant="primary"
            otherClasses="mt-6 mb-14 !hidden lg:!block"
          />
          <div className="lg:w-full float-right">
            <Image
              imageData={image2}
              otherClasses="mt-6 lg:mt-0 max-h-[400px]"
            />
            <Button
              label="Reach Us"
              variant="primary"
              otherClasses="mt-6 !block lg:!hidden float-right"
            />
          </div>
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
