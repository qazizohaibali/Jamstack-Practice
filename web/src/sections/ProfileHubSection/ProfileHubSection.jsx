import React from 'react'
import clsx from 'clsx'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'
import { graphql, useStaticQuery } from 'gatsby'
import ProfileHubCard from '../../components/ProfileHubCard/ProfileHubCard'

export const ProfileHubSection = ({
  otherClasses,
  topHeading,
  allHeading,
  seeAllButton,
  uploadButton,
}) => {
  const profileHubSectionClasses = clsx(
    otherClasses,
    'w-full bg-[#2f3034] pt-20 lg:pt-24'
  )
  const {
    allSanityProfilePage: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityProfilePage {
        nodes {
          image {
            ...CustomImage
          }
          isTopDesigner
          slug {
            current
          }
          name
          atPosition
          location {
            country
          }
        }
      }
    }
  `)
  const isTopDesigner_dest = nodes.filter((node) => node.isTopDesigner === true)

  const not_is_TopDesigner_dest = nodes.filter(
    (node) => node.isTopDesigner === false
  )
  return (
    <section
      className={profileHubSectionClasses}
      data-testid="profile-hub-section"
    >
      <div className="max-w-[1512px] mx-auto lg:px-[70px] xl:px-[150px] px-4 lg:py-20 py-10 flex flex-col gap-20">
        <div className="flex flex-col gap-20">
          <Heading type="h2">{topHeading}</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {isTopDesigner_dest &&
              isTopDesigner_dest?.map(
                ({ image, slug, name, atPosition, location }, index) => {
                  return (
                    <ProfileHubCard
                      key={index}
                      slug={slug}
                      image={image}
                      name={name}
                      atPosition={atPosition}
                      location={location}
                    />
                  )
                }
              )}
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <Heading type="h2">{allHeading}</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {not_is_TopDesigner_dest &&
              not_is_TopDesigner_dest?.map(
                ({ image, slug, name, atPosition, location }, index) => {
                  return (
                    <ProfileHubCard
                      key={index}
                      slug={slug}
                      image={image}
                      name={name}
                      atPosition={atPosition}
                      location={location}
                    />
                  )
                }
              )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <Button
            {...seeAllButton}
            variant="fill-transparent"
            otherClasses="hover:bg-[#2F3034] w-full md:w-fit text-center"
          />
          <Button {...uploadButton} otherClasses="w-full md:w-fit" />
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
