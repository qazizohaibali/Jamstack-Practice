import React from 'react'
// import BlogHubSection from '../../sections/BlogHubSection/BlogHubSection'
// import HeroSection from '../../sections/HeroSection/HeroSection'
// import ServicesSection from '../../sections/ServicesSection/ServicesSection'
// import WhyUsSection from '../../sections/WhyUsSection/WhyUsSection'
// import TestimonialsSection from '../../sections/TestimonialsSection/TestimonialsSection'
// import FeaturedBlogSection from '../../sections/FeaturedBlogSection/FeaturedBlogSection'
// import AboutHeroSection from '../../sections/AboutHeroSection/AboutHeroSection'
// import OurStorySection from '../../sections/OurStorySection/OurStorySection'
// import MiniHeroSection from '../../sections/MiniHeroSection/MiniHeroSection'
// import ReviewsSection from '../../sections/ReviewsSection/ReviewsSection'
// import SubHeroSection from '../../sections/SubHeroSection/SubHeroSection'
// import MeetTheTeamSection from '../../sections/MeetTheTeamSection/MeetTheTeamSection'
// import ServicesHubSection from '../../sections/ServicesHubSection/ServicesHubSection'
// import ServicesHeroSection from '../../sections/ServicesHeroSection/ServicesHeroSection'
// import MeetTheTeamTwoColumnSection from '../../sections/MeetTheTeamTwoColumnSection/MeetTheTeamTwoColumnSection'
// import OtherServicesSection from '../../sections/OtherServicesSection/OtherServicesSection'
// import OurBodySection from '../../sections/OurBodySection/OurBodySection'
// import PrivacyPolicySection from '../../sections/PrivacyPolicySection/PrivacyPolicySection'

export const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }, index) => {
    // switch (__typename) {
      
    //   case 'SanityOtherServicesSection':
    //     return (
    //       <OtherServicesSection key={__typename} {...sectionData} {...props} />
    //     )
    //   case 'SanityPrivacyPolicySection':
    //     return (
    //       <PrivacyPolicySection key={__typename} {...sectionData} {...props} />
    //     )

    //   default:
    //     return null
    // }
  })
}

export default EntryRenderer
