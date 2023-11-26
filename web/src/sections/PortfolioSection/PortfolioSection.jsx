import React from 'react'
import clsx from 'clsx'

export const PortfolioSection = ({
  otherClasses,
  title,
  _rawBody,
  mainHeading,
  mainImage,
  portfolioCardImages,
  portfolioCategory,
  _rawShortDescription,
  _rawDescription,
}) => {
  const portfolioSectionClasses = clsx(otherClasses)

  return (
    <section
      className={portfolioSectionClasses}
      data-testid="portfolio-section"
    >
      New Section!
    </section>
  )
}

export default PortfolioSection
