import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
import './socialMediaSection.scss'
import Heading from '../../components/Heading'
import playIcon from '../../images/play-icon.png'
import SocialMediaSectionCard from '../../components/SocialMediaSectionCard/SocialMediaSectionCard'
import { useState } from 'react'
import VideoModal from '../../components/VideoModal/VideoModal'

export const SocialMediaSection = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  cards,
}) => {
  const socialMediaSectionClasses = clsx(otherClasses, 'bg-[#2F3034]')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoUrl = 'https://youtu.be/OzUkvzyBttA?si=t1S5LJ2yXqM3pZzE'

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section
      className={socialMediaSectionClasses}
      data-testid="social-media-section"
    >
      <div className="max-w-[1512px] mx-auto xl:px-[150px] lg:px-[70px] px-4 py-5 lg:py-10">
        <div className="w-[3px] bg-[#818284] h-[150px] mx-auto mb-6"></div>
        <RichText
          otherClasses="uppercase social_media_richText"
          richText={_rawSubText}
        />
        <Heading
          otherClasses="font-light text-center lg:text-[55px] lg:leading-[60px] text-3xl my-6"
          type="h2"
        >
          {mainHeading}
        </Heading>
        <button onClick={openModal} className='w-fit mx-auto block'>
          <img
            height={100}
            width={100}
            className="mx-auto"
            src={playIcon}
            alt="playIcon"
          />
        </button>
        <VideoModal
          isOpen={isModalOpen}
          videoUrl={videoUrl}
          closeModal={closeModal}
          className='custom-modal'
        />
        <span className="uppercase font-bold text-center text-[#AB835F] text-base block mt-6">
          See us in motion
        </span>
        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          {cards.map((nodes, index) => {
            return <SocialMediaSectionCard key={index} {...nodes} />
          })}
        </div>
      </div>
    </section>
  )
}

export default SocialMediaSection
export const query = graphql`
  fragment SocialMediaSection on SanitySocialMediaSection {
    __typename
    mainHeading
    _rawSubText
    cards {
      iconImage {
        ...CustomImage
      }
      title
      link
    }
  }
`
