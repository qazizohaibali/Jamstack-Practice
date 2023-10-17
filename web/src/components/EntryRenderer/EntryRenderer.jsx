import React from 'react'
import IntroSection from '../../sections/IntroSection/IntroSection'
import ServicesSection from '../../sections/ServicesSection/ServicesSection'

export const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }, index) => {
    switch (__typename) {
      
      case 'SanityIntroSection':
        return (
          <IntroSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityServicesSection':
        return (
          <ServicesSection key={__typename} {...sectionData} {...props} />
        )
      default:
        return null
    }
  })
}

export default EntryRenderer
