import React from 'react'
import IntroSection from '../../sections/IntroSection/IntroSection'
import ServicesSection from '../../sections/ServicesSection/ServicesSection'
import HeroSection from '../../sections/HeroSection/HeroSection'
import OurProjectsSection from '../../sections/OurProjectsSection/OurProjectsSection'
import OurProductSection from '../../sections/OurProductSection/OurProductSection'
import SocialMediaSection from '../../sections/SocialMediaSection/SocialMediaSection'
import FaQsSection from '../../sections/FaQsSection/FaQsSection'
import MiniHeroSection from '../../sections/MiniHeroSection/MiniHeroSection'
import FeaturedTextSection from '../../sections/FeaturedTextSection/FeaturedTextSection'
import AboutIntroSection from '../../sections/AboutIntroSection/AboutIntroSection'

export const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }, index) => {
    switch (__typename) {
      case 'SanityHeroSection':
        return <HeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityIntroSection':
        return <IntroSection key={__typename} {...sectionData} {...props} />
      case 'SanityServicesSection':
        return <ServicesSection key={__typename} {...sectionData} {...props} />
      case 'SanityOurProjectsSection':
        return (
          <OurProjectsSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityOurProductsSection':
        return (
          <OurProductSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanitySocialMediaSection':
        return (
          <SocialMediaSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityFaqsSection':
        return <FaQsSection key={__typename} {...sectionData} {...props} />
      case 'SanityMiniHeroSection':
        return <MiniHeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityFeaturedTextSection':
        return (
          <FeaturedTextSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityAboutIntroSection':
        return (
          <AboutIntroSection key={__typename} {...sectionData} {...props} />
        )

      default:
        return null
    }
  })
}

export default EntryRenderer
