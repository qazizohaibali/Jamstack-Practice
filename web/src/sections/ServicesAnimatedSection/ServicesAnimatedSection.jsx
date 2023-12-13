import React from 'react'
import clsx from 'clsx'

export const ServicesAnimatedSection = ({
  otherClasses
}) => {
  const servicesAnimatedSectionClasses = clsx(otherClasses);
  
  return (
    <section className={servicesAnimatedSectionClasses} data-testid='services-animated-section'>
      New Section!
    </section>
  );
};

export default ServicesAnimatedSection;
