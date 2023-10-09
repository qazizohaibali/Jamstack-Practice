import React from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'
import Image from '../../components/Image/Image'
import Button from '../../components/Button'

export const IntroSection = ({
  otherClasses,
  heading,
  image1,
  image2,
  _rawSubText,
  _rawSecSubText,
}) => {
  const introSectionClasses = clsx(otherClasses,"bg-[#2E3034] text-white")

  return (
    <section className={introSectionClasses} data-testid="intro-section">
      <div className="flex">
        <div className="lg:w-[20%] pr-[30px]">
          <Heading otherClasses="intro-heading">{heading}</Heading>
          <RichText richText={_rawSubText} otherClasses="intro-subtext" />
        </div>
        <div className="lg:w-[80%] border-l-[1px] border-white pl-[30px]">
          <div className="flex gap-3">
            <Image imageData={image1} otherClasses="lg:w-[60%]" />
            <Image imageData={image2} otherClasses="lg:w-[40%] max-h-[480px] object-cover" />
          </div>
          <div className='max-w-[450px]'>
            <RichText otherClasses="intro-images-subtext" richText={_rawSecSubText} />
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
