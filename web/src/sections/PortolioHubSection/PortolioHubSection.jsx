import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
export const PortolioHubSection = ({ otherClasses, title }) => {
  const portolioHubSectionClasses = clsx(otherClasses)

  const {
    allSanityPortfolioPage: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityPortfolioPage {
        nodes {
          title
          slug {
            source
          }
          mainPortfolioImage {
            ...CustomImage
          }
          portfolioCardImages {
            image {
              ...CustomImage
            }
          }
          _rawShortDescription
        }
      }
    }
  `)

  console.log('title', title)

  return (
    <section
      className={portolioHubSectionClasses}
      data-testid="portolio-hub-section"
    >
      New Section!
    </section>
  )
}

export default PortolioHubSection

export const query = graphql`
  fragment PortfolioHubSection on SanityPortfolioHubSection {
    __typename
    identifier
  }
`
