import React from 'react'
import BlogHubSection from '../../sections/BlogHubSection/BlogHubSection'
import HeroSection from '../../sections/HeroSection/HeroSection'
import ServicesSection from '../../sections/ServicesSection/ServicesSection'
import WhyUsSection from '../../sections/WhyUsSection/WhyUsSection'
import TestimonialsSection from '../../sections/TestimonialsSection/TestimonialsSection'
import FeaturedBlogSection from '../../sections/FeaturedBlogSection/FeaturedBlogSection'
import AboutHeroSection from '../../sections/AboutHeroSection/AboutHeroSection'
import OurStorySection from '../../sections/OurStorySection/OurStorySection'
import MiniHeroSection from '../../sections/MiniHeroSection/MiniHeroSection'
import ReviewsSection from '../../sections/ReviewsSection/ReviewsSection'
import SubHeroSection from '../../sections/SubHeroSection/SubHeroSection'
import MeetTheTeamSection from '../../sections/MeetTheTeamSection/MeetTheTeamSection'
import ServicesHubSection from '../../sections/ServicesHubSection/ServicesHubSection'
import ServicesHeroSection from '../../sections/ServicesHeroSection/ServicesHeroSection'
import MeetTheTeamTwoColumnSection from '../../sections/MeetTheTeamTwoColumnSection/MeetTheTeamTwoColumnSection'
import OtherServicesSection from '../../sections/OtherServicesSection/OtherServicesSection'
import OurBodySection from '../../sections/OurBodySection/OurBodySection'
import PrivacyPolicySection from '../../sections/PrivacyPolicySection/PrivacyPolicySection'

export const EntryRenderer = ({ pageBuilderData, ...props }) => {
  return pageBuilderData.map(({ __typename, ...sectionData }, index) => {
    switch (__typename) {
      case 'SanityHeroSection':
        return <HeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityServicesSection':
        return <ServicesSection key={__typename} {...sectionData} {...props} />
      case 'SanityWhyUsSection':
        return <WhyUsSection key={__typename} {...sectionData} {...props} />
      case 'SanityTestimonialsSection':
        return (
          <TestimonialsSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityBlogSectionReference':
        return (
          <FeaturedBlogSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityAboutHeroSection':
        return <AboutHeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityOurStorySection':
        return <OurStorySection key={__typename} {...sectionData} {...props} />
      case 'SanityBlogHubSection':
        return <BlogHubSection key={__typename} {...sectionData} {...props} />
      case 'SanityMiniHeroSection':
        return <MiniHeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityReviewReferenceSection':
        return <ReviewsSection key={__typename} {...sectionData} {...props} />
      case 'SanityOurBodySection':
        return <OurBodySection key={__typename} {...sectionData} {...props} />
      case 'SanitySubHeroSection':
        return <SubHeroSection key={__typename} {...sectionData} {...props} />
      case 'SanityMeetTheTeamReferenceSection':
        return (
          <MeetTheTeamSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityServicesHubReferenceSection':
        return (
          <ServicesHubSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityServicesHeroSection':
        return (
          <ServicesHeroSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityMeetTheTeamTwoColumn':
        return (
          <MeetTheTeamTwoColumnSection
            key={__typename}
            {...sectionData}
            {...props}
          />
        )
      case 'SanityOtherServicesSection':
        return (
          <OtherServicesSection key={__typename} {...sectionData} {...props} />
        )
      case 'SanityPrivacyPolicySection':
        return (
          <PrivacyPolicySection key={__typename} {...sectionData} {...props} />
        )

      default:
        return null
    }
  })
}

export default EntryRenderer
