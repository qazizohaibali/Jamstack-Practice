import React from 'react'
import clsx from 'clsx'
import Image from '../../components/Image/Image'
import RichText from '../../components/RichText/RichText'
import { Heading } from '../../components/Heading'
import './ProfileSection.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'
export const ProfileSection = ({
  otherClasses,
  image,
  name,
  atPosition,
  location,
  experience,
  _rawShortDescription,
  topProject,
  recentProject,
}) => {
  const profileSectionClasses = clsx(otherClasses, 'w-full bg-[#2f3034]')
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
  const concat_nodes = nodes.slice(0, 3)
  const hover_nodes_last = nodes.slice(
    concat_nodes.length,
    concat_nodes.length + 1
  )
  return (
    <section className={profileSectionClasses} data-testid="profile-section">
      <div className="max-w-[1512px] mx-auto lg:px-[70px] xl:px-[150px] px-4 lg:py-20 py-10 flex flex-col items-center md:items-start gap-10 md:gap-0 md:flex-row justify-between">
        <div className="w-full md:w-[30%] lg:w-[25%] flex flex-col gap-6">
          <Image imageData={image} otherClasses="w-full min-h-[350px] mb-4" />
          <Heading type="h2">{name}</Heading>
          <Heading type="h4">{atPosition}</Heading>
          <RichText
            richText={_rawShortDescription}
            otherClasses="short_desc_richTest"
          />
          <div className="h-[1px] w-full bg-white opacity-20"></div>
          <Heading type="h5">Location</Heading>
          <p className="text-white font-Montserrat font-normal text-base not-italic leading-5 opacity-70">
            {location.city} , {location.country}
          </p>
          <Heading type="h5">Experience</Heading>

          <p className="text-white font-Montserrat font-normal text-base not-italic leading-5 opacity-70">
            {experience.experienceYears}
          </p>
          <div className="h-[1px] w-full bg-white opacity-20"></div>
          <Heading type="h5">Relevant Profiles</Heading>

          <div className="flex gap-5">
            {concat_nodes?.map(({ image, slug }, index) => {
              return (
                <Link to={slug.current} key={index}>
                  <Image imageData={image} />
                </Link>
              )
            })}
            {hover_nodes_last?.map(({ image }, index) => {
              return (
                <Link to="/hub-profile" key={index} className="relative">
                  <Image imageData={image} otherClasses="relative opacity-50" />
                  <p className="absolute top-[40%] left-[30%] text-white opacity-100 font-Montserrat font-bold">
                    +{nodes.length}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col gap-20">
          <div className="top flex flex-col gap-10">
            <Heading type="h2">Top Projects</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
              {topProject?.map(({ slug, mainImage }, index) => {
                return (
                  <Link
                    to={`/${slug.current}`}
                    key={index}
                    className="hover:opacity-70"
                  >
                    <Image imageData={mainImage} otherClasses="w-full" />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="recent flex flex-col gap-10">
            <Heading type="h2">Recent Projects</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {recentProject?.map(({ slug, mainImage }, index) => {
                return (
                  <Link
                    to={`/${slug.current}`}
                    key={index}
                    className="hover:opacity-70"
                  >
                    <Image imageData={mainImage} otherClasses="w-full" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
