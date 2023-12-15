import React, { useEffect } from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import RichText from '../../components/RichText/RichText'
import './servicesanimatedsection.scss'

export const ServicesAnimatedSection = ({
  otherClasses,
  firstImage,
  secondImage,
  _rawFirstSubText,
  _rawSecSubText,
}) => {
  const servicesAnimatedSectionClasses = clsx(
    otherClasses,
    'bg-[#222327] pb-16 lg:py-16'
  )

  return (
    <section
      className={servicesAnimatedSectionClasses}
      data-testid="services-animated-section"
    >
      <div className="max-w-[1512px] lg:relative mx-auto -mt-10 lg:-mt-0 lg:py-20">
        <div className="lg:flex lg:flex-row lg:items-end gap-10">
          <RichText
            richText={_rawFirstSubText}
            otherClasses="block lg:hidden services-animated-section-richtext float-right z-50 translate-y-20 px-3 md:px-6 lg:px-0"
          />
          <Image
            imageData={firstImage}
            otherClasses="w-[70%] lg:w-[38%] max-h-[350px] lg:max-h-[550px]"
          />
          <RichText
            otherClasses="w-full lg:w-[31%] px-5 py-10 lg:pt-0 lg:pb-24"
            richText={_rawSecSubText}
          />
          <Image
            imageData={secondImage}
            otherClasses="lg:w-[31%]  max-h-[520px] lg:translate-y-20 hidden lg:block"
          />
          <div className="flex justify-end  lg:hidden">
            <Image
              imageData={secondImage}
              otherClasses="w-[80%] lg:w-[31%] max-h-[320px] "
            />
          </div>
        </div>
        <div className="lg:absolute lg:-top-6 lg:left-[40%] hidden lg:block lg:-translate-x-[40%]">
          <RichText
            richText={_rawFirstSubText}
            otherClasses="services-animated-section-richtext"
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesAnimatedSection

export const query = graphql`
  fragment ServicesAnimatedSection on SanityServicesAnimatedSection {
    __typename
    firstImage {
      ...CustomImage
    }
    secondImage {
      ...CustomImage
    }
    _rawFirstSubText
    _rawSecSubText
  }
`
