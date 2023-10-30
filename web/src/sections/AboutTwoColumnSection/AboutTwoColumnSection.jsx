import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'
import './AboutTwoColumnSection.scss'

export const AboutTwoColumnSection = ({
  otherClasses,
  heading,
  _rawSubText,
  image,
}) => {
  const aboutTwoColumnSectionClasses = clsx(otherClasses, 'bg-[#2F3034]')

  return (
    <section
      className={aboutTwoColumnSectionClasses}
      data-testid="about-two-column-section"
    >
      <div className="max-w-[1512px] mx-auto xl:px-[100px] lg:px-[70px] px-4 flex lg:flex-row flex-col items-stretch lg:gap-12  gap-6">
        <div className="lg:w-[50%] w-full">
          <Image imageData={image} otherClasses='h-full w-full' />
        </div>
        <div className="lg:w-[50%] w-full">
          <Heading type="h2" otherClasses="lg:text-5xl mb-6">
            {heading}
          </Heading>
          <RichText
            richText={_rawSubText}
            otherClasses="about-two-column-rich-text"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutTwoColumnSection
export const query = graphql`
  fragment AboutTwoColumnSection on SanityTwoColumnSection {
    __typename
    heading
    _rawSubText
    image {
      ...CustomImage
    }
  }
`
