import React from 'react'
import clsx from 'clsx'

export const OurProductSection = ({
  otherClasses
}) => {
  const ourProductSectionClasses = clsx(otherClasses);
  
  return (
    <section className={ourProductSectionClasses} data-testid='our-product-section'>
      New Section!
    </section>
  );
};

export default OurProductSection;
