import React from 'react'
import IntroSection from '../../sections/IntroSection/IntroSection'
import ServicesSection from '../../sections/ServicesSection/ServicesSection'
import HeroSection from '../../sections/HeroSection/HeroSection'
import OurProjectsSection from '../../sections/OurProjectsSection/OurProjectsSection'

export const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }, index) => {
    switch (__typename) {
      case 'SanityHeroSection':
        return (
          <HeroSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityIntroSection':
        return (
          <IntroSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityServicesSection':
        return (
          <ServicesSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityOurProjectsSection':
        return (
          <OurProjectsSection key={__typename} {...sectionData} {...props} />
        )
      default:
        return null
    }
  })
}

export default EntryRenderer
