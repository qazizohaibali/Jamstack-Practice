import React from 'react'
import clsx from 'clsx'

export const PortfolioSection = ({
  otherClasses
}) => {
  const portfolioSectionClasses = clsx(otherClasses);
  
  return (
    <section className={portfolioSectionClasses} data-testid='portfolio-section'>
      New Section!
    </section>
  );
};

export default PortfolioSection;
