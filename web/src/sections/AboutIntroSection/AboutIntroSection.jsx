import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'
import './AboutIntroSection.scss'

export const AboutIntroSection = ({
  otherClasses,
  heading,
  _rawSubText,
  smallImage,
  largeImage,
  happyClients,
  awardsWon,
  projectsDone,
}) => {
  const aboutIntroSectionClasses = clsx(otherClasses, 'bg-[#2F3034]')

  return (
    <section
      className={aboutIntroSectionClasses}
      data-testid="about-intro-section"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6">
        <div className="w-full lg:w-[55%]">
          <div className="flex items-end gap-8 ">
            <div className="w-[40%]">
              <Image imageData={smallImage} />
            </div>
            <div className="w-[60%] mb-6">
              <Heading type="h3" otherClasses="text-white mb-3">
                {heading}
              </Heading>
              <RichText
                richText={_rawSubText}
                otherClasses="aboutInto-richText"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] w-full">
          <div className='w=full h-full'>
            <Image imageData={largeImage} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntroSection

export const query = graphql`
  fragment AboutIntroSection on SanityAboutIntroSection {
    __typename
    heading
    _rawSubText
    smallImage {
      ...CustomImage
    }
    largeImage {
      ...CustomImage
    }
    happyClients
    projectsDone
    awardsWon
  }
`
