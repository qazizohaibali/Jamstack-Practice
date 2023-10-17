import React from 'react'
import clsx from 'clsx'

export const HeroSection = ({
  otherClasses
}) => {
  const heroSectionClasses = clsx(otherClasses);
  
  return (
    <section className={heroSectionClasses} data-testid='hero-section'>
      New Section!
    </section>
  );
};

export default HeroSection;
