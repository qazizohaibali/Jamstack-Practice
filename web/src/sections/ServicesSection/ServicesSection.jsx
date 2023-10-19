import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'
import ServicesCard from '../../components/ServicesCard/ServicesCard'

export const ServicesSection = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  cards,
}) => {
  const servicesSectionClasses = clsx(otherClasses, 'bg-[#424242]')

  return (
    <section className={servicesSectionClasses} data-testid="services-section">
      <div className="max-w-[1512px] mx-auto lg:px-[100px] px-4 lg:py-20 py-10">
        <div className="border-b border-[#AFAFAF] pb-10">
          <Heading otherClasses="text-center mb-6" type="h2">
            {mainHeading}
          </Heading>
          <RichText
            richText={_rawSubText}
            otherClasses="general_white_richText text-center"
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] md:gap-y-[30px] gap-6 mt-[30px]">
          {cards.map((nodes, i) => {
            return <ServicesCard key={i} {...nodes} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
export const query = graphql`
  fragment ServicesSection on SanityServicesSection {
    __typename
    identifier
    mainHeading
    _rawSubText
    cards {
      image {
        ...CustomImage
      }
      heading
      _rawSubText
    }
  }
`
