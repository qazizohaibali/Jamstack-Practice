import React from 'react'
import clsx from 'clsx'
import Image from '../Image/Image'
import { Heading } from '../Heading'
import Icon from '../Icon/Icon'
import { Button } from '../Button'
import { Link } from 'gatsby'

export const ProfileHubCard = ({ otherClasses, image, slug }) => {
  const profileHubCardClasses = clsx(otherClasses)

  return (
    <div className={profileHubCardClasses} data-testid="profile-hub-card">
      <Link to={slug?.current}>
        <Image imageData={image} otherClasses="" />
        {/* <Heading type="h3">{hh}</Heading> */}
        {/* <p>{title}</p> */}
        <p>
          <Icon
            icon="location-vector-icon-isolated-on-transparent-background-location-logo-concept-P2DN7H.jpg"
            iconHeight={20}
            iconWidth={20}
          />
          Based in {}
        </p>
        <Button
          label="VIEW PORTFOLIO"
          variant="fill-transparent"
          otherClasses="border-2 border-[#D8A171] text-[#D8A171] hover:bg-[#2F3034]"
        />
      </Link>
    </div>
  )
}

export default ProfileHubCard
