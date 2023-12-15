import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'

export const ParallaxSection = ({ otherClasses, image, video }) => {
  const parallaxSectionClasses = clsx(otherClasses, 'relative')
  return (
    <section className={parallaxSectionClasses} data-testid="parallax-section">
      {image && (
        <div
          className="w-full absolute h-full !bg-fixed !bg-cover !bg-center "
          style={{
            backgroundImage: `url(${image?.asset?.gatsbyImageData?.images?.fallback?.src})`,
          }}
        />
      )}
      <div className="relative py-[240px]"></div>
    </section>
  )
}

export default ParallaxSection

export const query = graphql`
  fragment ParallaxSection on SanityParallaxSection {
    __typename
    image {
      ...CustomImage
    }
    video {
      asset {
        url
      }
    }
  }
`
