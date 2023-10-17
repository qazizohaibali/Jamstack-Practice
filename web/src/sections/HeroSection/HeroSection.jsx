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
      <div className="relative">
        <div className="relative flex">
          <div className="bg-[#2e3034] w-[30%]">
            <Image
              imageData={image}
              otherClasses="!absolute top-0 right-0 !w-[70%] !h-full"
            />
          </div>

          <div className="relative lg:py-36 py-10 -translate-x-[200px] xl:-translate-x-[300px] max-w-[300px]">
            <Heading
              type="h4"
              otherClasses="text-[90px] max-w-[300px] leading-[100px]"
            >
              {mainHeading}
            </Heading>
            <RichText
              richText={_rawSubText}
              otherClasses="herosection-richtext my-[20px] lg:my-[30px]"
            />

            {/* <div className="flex gap-4">
              {firstButton && <Button {...firstButton} otherClasses="" />}
              {secondButton && <Button {...secondButton} otherClasses="" />}
            </div> */}
          </div>
        </div>
        <div className="absolute top-[40%] bg-[#424242] rounded-r-xl">
          <Icon icon="fb" iconHeight={24} iconWidth={24}/>
          <Icon icon="Insta" iconHeight={24} iconWidth={24} />
          <Icon icon="LinkedIn" iconHeight={24} iconWidth={24} />
          <Icon icon="Twitter" iconHeight={24} iconWidth={24} />
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
