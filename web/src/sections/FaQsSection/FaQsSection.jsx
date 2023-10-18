import React from 'react'
import clsx from 'clsx'

export const FaQsSection = ({
  otherClasses
}) => {
  const faQsSectionClasses = clsx(otherClasses);
  
  return (
    <section className={faQsSectionClasses} data-testid='fa-qs-section'>
      New Section!
    </section>
  );
};

export default FaQsSection;
