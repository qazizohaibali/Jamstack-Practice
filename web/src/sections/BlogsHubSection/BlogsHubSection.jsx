import React from 'react'
import clsx from 'clsx'

export const BlogsHubSection = ({
  otherClasses
}) => {
  const blogsHubSectionClasses = clsx(otherClasses,'bg-[#2F3034]');
  
  return (
    <section className={blogsHubSectionClasses} data-testid='blogs-hub-section'>
      <div className='max--w-[1512px] lg:px-[100px] px-4'>

      </div>
    </section>
  );
};

export default BlogsHubSection;
