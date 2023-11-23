import { graphql } from 'gatsby'
import React from 'react'
import ProfileSection from '../sections/ProfileSection/ProfileSection'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

const ProfilePageTemplate = (props) => {
  const { data } = props
  const profile = data && data.sanityProfilePage

  return (
    <Layout>
      {profile && <ProfileSection {...profile} />}
    </Layout>
  )
}

export const Head = ({
  data: {
    sanityProfilePage: { seoTitle, metaDescription },
  },
}) => <Seo title={seoTitle} description={metaDescription} />;

export default ProfilePageTemplate;

export const query = graphql`
  query ProfilePageSection($id: String!) {
    sanityProfilePage(id: { eq: $id }) {
      slug {
        current
      }
      seoTitle
      metaDescription
      __typename
      title
      publishedAt
      featured
      image {
        ...CustomImage
      }
      name
      atPosition
      location {
        identifier
        __typename
        city
        country
      }
      experience {
        identifier
        __typename
        experienceYears
      }
      _rawShortDescription
      topProject {
        slug {
          current
        }
        mainImage {
          ...CustomImage
        }
        portfolioCardImages {
          image {
            ...CustomImage
          }
        }
        portfolioCategory
      }
      recentProject {
        slug {
          current
        }
        mainImage {
          ...CustomImage
        }
        portfolioCardImages {
          image {
            ...CustomImage
          }
        }
        portfolioCategory
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;