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
import AboutTwoColumnSection from '../../sections/AboutTwoColumnSection/AboutTwoColumnSection'
import PortolioHubSection from '../../sections/PortolioHubSection/PortolioHubSection'
import ProfileHubSection from '../../sections/ProfileHubSection/ProfileHubSection'
import FeaturedBlogCard from '../FeaturedBlogCard/FeaturedBlogCard'
import BlogHubSection from '../../sections/BlogHubSection/BlogHubSection'
import ServicesHeroSection from '../../sections/ServicesHeroSection/ServicesHeroSection'
import ParallaxSection from '../../sections/ParallaxSection/ParallaxSection'
import ServicesTwoColumnSection from '../../sections/ServicesTwoColumnSection/ServicesTwoColumnSection'
import ServicesAnimatedSection from '../../sections/ServicesAnimatedSection/ServicesAnimatedSection'
export const EntryRenderer = ({ pageBuilderData, ...props }) => {
  console.log('pagebuilder', pageBuilderData)
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
      case 'SanityTwoColumnSection':
        return (
          <AboutTwoColumnSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityPortfolioHubSection':
        return (
          <PortolioHubSection key={__typename} {...sectionData} {...props} />
        )

      case 'SanityProfileHubSection':
        return (
          <ProfileHubSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityServicesHeroSection':
        return (
          <ServicesHeroSection key={__typename} {...sectionData} {...props} />
        )
      // case 'SanityParallaxSection':
      //   return (
      //     <ParallaxSection key={__typename} {...sectionData} {...props} />
      //   )
      case 'SanityServicesTwoColumn':
        return (
          <ServicesTwoColumnSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityServicesAnimatedSection':
        return (
          <ServicesAnimatedSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityBlogSectionReference':
        return <FeaturedBlogCard key={__typename} {...sectionData} {...props} />
      case 'SanityBlogHubSectionReference':
        return <BlogHubSection key={__typename} {...sectionData} {...props} />
      default:
        return null
    }
  })
}

export default EntryRenderer
