import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
import './featuredTextSection.scss'

export const FeaturedTextSection = ({ otherClasses, _rawSubText }) => {
  const featuredTextSectionClasses = clsx(otherClasses,'bg-[#2F3034]')

  return (
    <section
      className={featuredTextSectionClasses}
      data-testid="featured-text-section"
    >
     <div className='max-w-[1200px] mx-auto xl:px-[150px] lg:px-[70px] px-4 py-12'>
      <RichText otherClasses="featured-section-richText" richText={_rawSubText}/>
     </div>
    </section>
  )
}

export default FeaturedTextSection
export const query = graphql`
  fragment FeaturedTextSection on SanityFeaturedTextSection {
    __typename
    _rawSubText
  }
`
