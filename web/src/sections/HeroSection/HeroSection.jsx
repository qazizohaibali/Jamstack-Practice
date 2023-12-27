import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'

import './herosection.scss'
import Button from '../../components/Button'
import Icon from '../../components/Icon/Icon'

export const HeroSection = ({
  otherClasses,
  mainHeading,
  image,
  // firstButton,
  // secondButton,
  _rawSubText,
}) => {
  const heroSectionClasses = clsx(otherClasses)

  return (
    <section className={heroSectionClasses} data-testid="hero-section">
      <div className="relative hidden lg:block">
        <div className="relative flex">
          <div className="bg-[#222327] w-[30%]">
            <Image
              imageData={image}
              otherClasses="!absolute top-0 right-0 !w-[70%] !h-full"
            />
          </div>

          <div className="relative lg:py-36 py-10 -translate-x-[200px] xl:-translate-x-[300px] ">
            <Heading
              type="h4"
              otherClasses="text-[90px] max-w-[300px] leading-[100px]"
            >
              {mainHeading}
            </Heading>
            <RichText
              richText={_rawSubText}
              otherClasses="herosection-richtext my-[20px] max-w-[300px] lg:my-[30px]"
            />
            <div className="flex gap-4">
              <Button label="ENQUIRY NOW" variant="primary" />
              <Button label="CALL US" variant="secondary" />
            </div>
          </div>
        </div>
        <div className="absolute top-[40%] bg-[#424242] flex flex-col justify-center rounded-r-xl px-2 py-4 space-y-3">
          <Icon icon="fb-icon" iconHeight={25} iconWidth={25} />
          <Icon icon="instagram-icon" iconHeight={25} iconWidth={25} />
          <Icon icon="linkedin-icon" iconHeight={25} iconWidth={25} />
          <Icon icon="twitter-icon" iconHeight={23} iconWidth={23} />
        </div>
      </div>
      <div className="block lg:hidden ">
        <Image imageData={image} otherClasses="h-[450px] w-full" />
        <div className="h-[250px] bg-[#222327]"></div>
        <div className='absolute flex-col flex px-[30px] -translate-y-[550px] text-[white] md:px-[100px]'>
        <Heading
              type="h4"
              otherClasses="sm:text-[80px] text-[60px] leading-[70px] mx-auto sm:leading-[80px]"
            >
              {mainHeading}
            </Heading>
            <RichText
              richText={_rawSubText}
              otherClasses="herosection-richtext max-w-[425px] my-[30px] lg:my-[30px] pr-6"
            />
            <div className="flex  mx-auto flex-col gap-4">
              <Button label="ENQUIRY NOW" variant="primary" otherClasses="" />
              <Button label="CALL US" variant="secondary" otherClasses=""/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

export const query = graphql`
  fragment HeroSection on SanityHeroSection {
    _id
    __typename
    mainHeading
    image {
      ...CustomImage
    }

    _rawSubText
  }
`
// firstButton {
//   ...Button
// }
// secondButton {
//   ...Button
// }
