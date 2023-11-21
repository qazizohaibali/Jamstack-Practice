import React from 'react'
import clsx from 'clsx'

export const ProfileSection = ({
  otherClasses
}) => {
  const profileSectionClasses = clsx(otherClasses);
  
  return (
    <section className={profileSectionClasses} data-testid='profile-section'>
      New Section!
    </section>
  );
};

export default ProfileSection;
