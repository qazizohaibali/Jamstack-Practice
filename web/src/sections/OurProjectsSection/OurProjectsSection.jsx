import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'

export const OurProjectsSection = ({ otherClasses }) => {
  const ourProjectsSectionClasses = clsx(otherClasses)

  return (
    <section
      className={ourProjectsSectionClasses}
      data-testid="our-projects-section"
    >
      New Section!
    </section>
  )
}

export default OurProjectsSection
export const query = graphql`
  fragment OurProjectsSection on SanityOurProjectsSection {
    __typename
    mainHeading
    _rawSubText
    cards {
      placeholderImage {
        ...CustomImage
      }
      vedioUrl
    }
  }
`
