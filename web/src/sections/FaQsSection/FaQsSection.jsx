import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'
import Image from '../../components/Image/Image'
import FaqsCard from '../../components/FaqsCard/FaqsCard'

export const FaQsSection = ({
  otherClasses,
  image,
  heading,
  _rawSubText,
  cards,
}) => {
  const faQsSectionClasses = clsx(otherClasses, 'bg-[#2f3034] text-white')

  return (
    <section className={faQsSectionClasses} data-testid="fa-qs-section">
      <div className='max-w-[1512px] mx-auto lg:px-[70px] xl:px-[150px] px-4 lg:py-20 py-10'>
        <div className=" text-center max-w-[800px] mx-auto">
          <Heading otherClasses=" mb-6 text-center" type="h2">
            {heading}
          </Heading>
          <RichText richText={_rawSubText} otherClasses="ourproduct-richtext" />
        </div>
        <div className="h-[2px] bg-[#c4c4c4] my-8"></div>
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[50px]">
          <div className="w-full lg:w-[40%]">
            {image && <Image imageData={image} otherClasses="" />}
          </div>
          <div className="w-full space-y-[20px] lg:w-[60%]">
            {
              cards &&
              cards.map((nodes,index)=>{
                return <FaqsCard key={index} {...nodes} otherClasses=""/>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaQsSection

export const query = graphql`
  fragment FaqsSection on SanityFaqsSection {
    _id
    __typename
    image {
      ...CustomImage
    }
    heading
    _rawSubText
    cards {
      question
      _rawAnswer
    }
  }
`
