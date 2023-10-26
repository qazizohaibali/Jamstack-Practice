import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'

export const FeaturedTextSection = ({ otherClasses }) => {
  const featuredTextSectionClasses = clsx(otherClasses)

  return (
    <section
      className={featuredTextSectionClasses}
      data-testid="featured-text-section"
    >
      New Section!
    </section>
  )
}

export default FeaturedTextSection
export const query = graphql`
  fragment FeaturedTextSection on SanityFeaturedTextSection {
    __typename
    _rawSubText
  }
`
