import React from 'react'
import IntroSection from '../../sections/IntroSection/IntroSection'

export const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }, index) => {
    switch (__typename) {
      
      case 'SanityIntroSection':
        return (
          <IntroSection key={__typename} {...sectionData} {...props} />
        )
    

      default:
        return null
    }
  })
}

export default EntryRenderer
