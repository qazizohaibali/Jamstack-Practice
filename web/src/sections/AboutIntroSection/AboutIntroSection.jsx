import React, { useState } from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'
import './AboutIntroSection.scss'
import { ScrollTrigger } from 'react-scroll-trigger'
import CountUp from 'react-countup/build/CountUp'

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

  const [counter, setCounter] = useState(false)

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <section
          className={aboutIntroSectionClasses}
          data-testid="about-intro-section"
        >
          <div className="max-w-[1440px] mx-auto flex lg:flex-row flex-col lg:px-0 px-4 items-center justify-between gap-6">
            <div className="w-full lg:w-[55%]">
              <div className="flex lg:flex-row flex-col items-end gap-8">
                <div className="lg:w-[40%] w-full">
                  <Image imageData={smallImage} />
                </div>
                <div className="lg:w-[60%] w-full mb-6">
                  <Heading type="h3" otherClasses="text-white mb-3">
                    {heading}
                  </Heading>
                  <RichText
                    richText={_rawSubText}
                    otherClasses="aboutInto-richText"
                  />
                </div>
              </div>
              <div className="flex items-center gap-10 lg:gap-20 lg:ml-20 my-10">
                <div>
                  <p className="text-[#c59874] font-light text-3xl  lg:text-[60px] lg:leading-[78px] text-center">
                    {counter && (
                      <CountUp
                        start={0}
                        end={`${happyClients}k`}
                        duration={2}
                        delay={0}
                      />
                    )}
                  </p>
                  <p className="font-light text-white text-center mt-2">
                    Happy Clients
                  </p>
                </div>
                <div>
                  <p className="text-[#c59874] font-light text-3xl  lg:text-[60px] lg:leading-[78px] text-center">
                    {projectsDone}k
                  </p>
                  <p className="font-light text-white text-center mt-2">
                    Projects Done
                  </p>
                </div>
                <div>
                  <p className="text-[#c59874] font-light text-3xl  lg:text-[60px] lg:leading-[78px] text-center">
                    {awardsWon}+
                  </p>
                  <p className="font-light text-white text-center mt-2">
                    Awards Won
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[45%] w-full">
              <div className="w=full h-full">
                <Image imageData={largeImage} />
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
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
