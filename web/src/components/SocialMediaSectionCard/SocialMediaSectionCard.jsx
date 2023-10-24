import React from 'react'
import clsx from 'clsx'
import Image from '../Image/Image'
import Heading from '../Heading'
import chevronIcon from '../../images/right-chevron-white.svg'

export const SocialMediaSectionCard = ({
  otherClasses,
  iconImage,
  title,
  link,
}) => {
  const socialMediaSectionCardClasses = clsx(
    otherClasses,
    'bg-[#D7A172] min-h-[400px] flex justify-center items-center px-10'
  )


  return (
    <a
      href={link}
      target='_blank'
      rel="noopener noreferrer"
      className={socialMediaSectionCardClasses}
      data-testid="social-media-section-card"
    >
      <div>
        <div className="max-w-[100px] mx-auto">
          <Image imageData={iconImage} />
        </div>
        <div className='flex items-center gap-3'>
        <Heading
          otherClasses="font-Montserrat lg:text-4xl font-medium text-center mt-8"
          type="h3"
        >
          {title}
        </Heading>
        <img src={chevronIcon} className='mt-8' height={20} width={30} alt="chevronIcon" />
        </div>
      </div>
    </a>
  )
}

export default SocialMediaSectionCard
