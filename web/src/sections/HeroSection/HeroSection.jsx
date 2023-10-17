import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'

export const HeroSection = ({
  otherClasses,
  mainHeading,
  image,
  buttons,
  _rawSubText,
}) => {
  const heroSectionClasses = clsx(otherClasses)

  return (
    <section className={heroSectionClasses} data-testid="hero-section">
      <div className="relative">
        <div className="relative flex">
          <div className="bg-[blue] w-[30%]">
            <Image imageData={image} otherClasses="absolute top-0 right-0" />
          </div>
          <div className='relative lg:py-20 py-10'>
          My-content
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

export const query = graphql`
  fragment HeroSection on SanityHeroSection {
    _id
    __typename
    mainHeading
    image {
      ...CustomImage
    }
    
    _rawSubText
  }
`
