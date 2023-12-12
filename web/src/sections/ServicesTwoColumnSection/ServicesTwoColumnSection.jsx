import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'

export const ServicesTwoColumnSection = ({
  otherClasses,
  desktopReversed,
  mobileReversed,
  mainHeading,
  parasAboutServices,
  image,
  _rawSubText,
}) => {
  const servicesTwoColumnSectionClasses = clsx(
    otherClasses,
    'bg-[#222327] py-10'
  )
  console.log('parasAboutServices', parasAboutServices)
  return (
    <section
      className={servicesTwoColumnSectionClasses}
      data-testid="services-two-column-section"
    >
      <div
        className={clsx(
          'flex lg:gap-20 gap-10 max-w-[1440px] mx-auto lg:px-[70px] px-4',
          desktopReversed
            ? 'lg:flex-row-reverse items-center'
            : 'items-center lg:flex-row',
          mobileReversed ? 'flex-col-reverse' : 'flex-col'
        )}
      >
        <div className="w-full lg:w-[50%]">
          {mainHeading && (
            <Heading
              type="h1"
              otherClasses="lg:text-[65px] text-[40px] lg:leading-[80px] leading-[55px] pb-6"
            >
              {mainHeading}
            </Heading>
          )}
          {_rawSubText && <RichText richText={_rawSubText} otherClasses="" />}

          <div className="space-y-3">
            {parasAboutServices &&
              parasAboutServices.map((node, index) => {
                return (
                  <div
                    className={clsx(
                      'flex gap-10 lg:gap-16 items-center',
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    )}
                  >
                    <Heading
                      type="h6"
                      otherClasses="text-base font-light lg:text-xl"
                    >
                      {node}
                    </Heading>
                    <div className="w-1 bg-white h-[100px] rotate-[30deg]"></div>
                    <Heading otherClasses="text-[40px]" type="h1">
                      {` 0${index + 1} `}
                    </Heading>
                  </div>
                )
              })}
          </div>
        </div>
        <Image imageData={image} otherClasses="w-full lg:w-[50%]" />
      </div>{' '}
    </section>
  )
}

export default ServicesTwoColumnSection

export const query = graphql`
  fragment ServicesTwoColumn on SanityServicesTwoColumn {
    __typename
    desktopReversed
    mobileReversed
    mainHeading
    parasAboutServices
    image {
      ...CustomImage
    }
    _rawSubText
  }
`
