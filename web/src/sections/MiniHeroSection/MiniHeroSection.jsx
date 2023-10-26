import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading/Heading'
import RichText from '../../components/RichText/RichText'
import './miniHeroSection.scss'

export const MiniHeroSection = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  image,
}) => {
  const miniHeroSectionClasses = clsx(otherClasses, 'relative pt-20 pb-40')

  return (
    <section className={miniHeroSectionClasses} data-testid="mini-hero-section">
      <Image
        imageData={image}
        otherClasses="!absolute h-full w-full top-0 left-0 z-[-1] "
      />
      <div className="max-w-[600px] mx-auto px-4 text-center">
        <Heading
          type="h1"
          otherClasses="text-center lg:text-[70px] leading-[88px] relative after:w-[150px] flex flex-col after:bg-white after:h-[5px] after:mx-auto after:mt-3 mb-10"
        >
          {mainHeading}
        </Heading>
        <RichText richText={_rawSubText} otherClasses='mini-hero-rich-text'/>
      </div>
    </section>
  )
}

export default MiniHeroSection
export const query = graphql`
  fragment MiniHeroSection on SanityMiniHeroSection {
    __typename
    mainHeading
    _rawSubText
    image {
      ...CustomImage
    }
  }
`
