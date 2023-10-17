import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'
import Image from '../../components/Image/Image'
import Button from '../../components/Button'

import './introsection.scss'

export const IntroSection = ({
  otherClasses,
  heading,
  image1,
  image2,
  _rawSubText,
  _rawSecSubText,
}) => {
  const introSectionClasses = clsx(otherClasses, 'bg-[#2E3034] text-white')

  return (
    <section className={introSectionClasses} data-testid="intro-section">
      <div className="max-w-[1512px] flex flex-col lg:flex-row gap-[40px] lg:gap-0 mx-auto lg:px-[70px] px-4 lg:py-20 py-10">
        <div className="lg:w-[20%] pr-[30px]">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#d8a171]"></div>
            <Heading type="h4" otherClasses="intro-heading text-[34px]">{heading}</Heading>
          </div>
          <RichText richText={_rawSubText} otherClasses="intro-subtext mt-2" />
        </div>
        <div className="lg:w-[80%] border-l-[1px] border-white pl-[10px] lg:pl-[20px] xl:pl-[30px] py-[20px] lg:py-0">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 ">
            <Image imageData={image1} otherClasses="lg:w-[60%] max-h-[250px] lg:max-h-full" />
            <Image
              imageData={image2}
              otherClasses="lg:w-[40%] max-h-[250px] lg:max-h-[300px] xl:max-h-[480px] object-cover"
            />
          </div>
          <div className="max-w-[450px]">
            <RichText
              otherClasses="intro-images-subtext my-4"
              richText={_rawSecSubText}
            />
            <Button label="Read More" variant="primary" otherClasses="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection

export const query = graphql`
  fragment IntroSection on SanityIntroSection {
    _id
    __typename
    heading
    image1 {
      ...CustomImage
    }
    image2 {
      ...CustomImage
    }
    _rawSubText
    _rawSecSubText
  }
`
