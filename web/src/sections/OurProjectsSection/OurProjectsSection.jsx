import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'
import Slider from '../../components/Slider/Slider'
import Image from '../../components/Image/Image'

import playIcon from '../../images/play-icon.png'

import './ourProjectsSection.scss'
import ReactPlayer from 'react-player'

export const OurProjectsSection = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  cards,
}) => {
  const ourProjectsSectionClasses = clsx(otherClasses, 'bg-[#424242]')
  const customSettings = {
    slidesToShow: 2,
    dots: false,
    arrows: false,
    speed : 200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  }
  return (
    <section
      className={ourProjectsSectionClasses}
      data-testid="our-projects-section"
    >
      <div className="max-w-[1512px] mx-auto lg:px-[70px] lg:pt-20 pt-10 px-4">
        <div className="border-b border-[#AFAFAF] pb-10 ">
          <Heading otherClasses="text-center mb-6" type="h2">
            {mainHeading}
          </Heading>
          <RichText
            richText={_rawSubText}
            otherClasses="general_white_richText text-center"
          />
        </div>
      </div>
      <div className="max-w-[1512px] mx-auto lg:pl-[70px] lg:py-16 py-10 lg:px-0 px-6">
        <Slider customSettings={customSettings}>
          {cards.map((node, index) => {
            return (
              <div key={index}>
                <ReactPlayer
                  // onClickPreview={() => setIsPlaying(true)}
                  url={node.vedioUrl}
                  light={<Image otherClasses='max-h-[400px]' imageData={node.placeholderImage}/>}
                  controls
                  playing
                  className="relative min-h-[400px]"
                  playIcon={
                    <span className="max-w-[80px] absolute">
                    <img src={playIcon} alt=''/>
                    </span>
                  }
                />
              </div>
            )
          })}
        </Slider>
      </div>
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
