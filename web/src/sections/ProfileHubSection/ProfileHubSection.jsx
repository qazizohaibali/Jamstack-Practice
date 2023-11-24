import React from 'react'
import clsx from 'clsx'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'
import { graphql } from 'gatsby'
// import ProfileHubCard from '../../components/ProfileHubCard/ProfileHubCard'

export const ProfileHubSection = ({
  otherClasses,
  topHeading,
  allHeading,
  seeAllButton,
  uploadButton,
}) => {
  const profileHubSectionClasses = clsx(otherClasses, 'w-full bg-[#2f3034]  ')
  // const {
  //   allSanityProfilePage: { nodes },
  // } = useStaticQuery(graphql`
  //   {
  //     allSanityProfilePage {
  //       nodes {
  //         image {
  //           ...CustomImage
  //         }
  //         slug {
  //           current
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <section
      className={profileHubSectionClasses}
      data-testid="profile-hub-section"
    >
      <div className="max-w-[1512px] mx-auto lg:px-[70px] xl:px-[150px] px-4 lg:py-20 py-10">
        <div>
          <Heading type="h2">{topHeading}</Heading>
          {/* <div>
            {nodes?.map(({ image, slug }, index) => {
              return <ProfileHubCard key={index} slug={slug} image={image} />
            })}
          </div> */}
        </div>
        <Heading type="h2">{allHeading}</Heading>
        <div className="flex gap-10 justify-center items-center">
          <Button
            {...seeAllButton}
            variant="fill-transparent"
            otherClasses="hover:bg-[#2F3034]"
          />
          <Button {...uploadButton} />
        </div>
      </div>
    </section>
  )
}

export default ProfileHubSection
export const query = graphql`
  fragment ProfileHubSection on SanityProfileHubSection {
    __typename
    identifier
    seeAllButton {
      label
      externalLink
      form
      slug {
        current
      }
      action
    }
    uploadButton {
      label
      externalLink
      form
      slug {
        current
      }
      action
    }
    topHeading
    allHeading
  }
`
