import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'

export const ProfileFeaturedSection = ({ otherClasses }) => {
  const profileFeaturedSectionClasses = clsx(otherClasses)
  const {
    allSanityProfilePage: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityProfilePage {
        nodes {
          image {
            ...CustomImage
          }
          slug {
            current
          }
        }
      }
    }
  `)

  console.log(nodes, 'nodes')
  return (
    <section
      className={profileFeaturedSectionClasses}
      data-testid="profile-featured-section"
    >
      New Section!
    </section>
  )
}

export default ProfileFeaturedSection
export const query = graphql`
  fragment ProfileFeaturedSection on SanityRelevantProfileFeatured {
    __typename
    identifier
    heading
  }
`
