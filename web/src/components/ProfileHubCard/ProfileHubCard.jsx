import React from 'react'
import clsx from 'clsx'
import Image from '../Image/Image'
import { Heading } from '../Heading'
import { Button } from '../Button'
import { Link } from 'gatsby'
import './ProfileHubCard.scss'
import locationImage from '../../images/xe-icons/location-icon-gary.jpg'
export const ProfileHubCard = ({
  otherClasses,
  image,
  slug,
  name,
  atPosition,
  location,
}) => {
  const profileHubCardClasses = clsx(
    otherClasses,
    'w-full bg-[#424242] py-10 pl-10 pr-20 border_color_top_right  ease-in-out duration-500 transition-all'
  )

  return (
    <div className={profileHubCardClasses} data-testid="profile-hub-card">
      <Link to={`/${slug.current}`} className="flex flex-col gap-10">
        <Image
          imageData={image}
          otherClasses="w-20 h-20 rounded-[50%] object-contain border-tr-2"
        />
        <div className="flex flex-col gap-3">
          <Heading type="h3">{name}</Heading>
          <Heading type="h6">{atPosition}</Heading>

          <p className="flex gap-2 justify-start items-center  text-white font-Garamond font-medium not-italic leading-6 ">
            <img src={locationImage} alt="location-icon" className="w-5 h-5" />
            <span> Based in {location.country}</span>
          </p>
        </div>
        <Button
          label="VIEW PORTFOLIO"
          variant="fill-transparent"
          otherClasses="border-2 border-[#D8A171] text-[#D8A171] hover:bg-[#2F3034] w-fit "
        />
      </Link>
    </div>
  )
}

export default ProfileHubCard
