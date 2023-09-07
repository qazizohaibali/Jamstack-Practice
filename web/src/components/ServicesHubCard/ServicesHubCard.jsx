import React from 'react'
import clsx from 'clsx'
import Image from '../Image/Image'
import { RichText } from '../RichText'
import './serviceshubcard.scss'
import { Button } from '../Button'
import { Link } from 'gatsby'

export const ServicesHubCard = ({ otherClasses, slug, _rawSubText, icon }) => {
  const servicesHubCardClasses = clsx(
    otherClasses,
    'w-full rounded-[8px] bg-white p-6 min-h-[240px]  sm:min-h-max flex flex-col justify-between'
  )

  return (
    <div className={servicesHubCardClasses} data-testid="services-hub-card">
      <div>
        <Image
          imageData={icon}
          otherClasses="max-h-6 max-w-6 mb-3 !hidden md:!inline-block"
        />
        <RichText
          richText={_rawSubText}
          otherClasses="services_hub_card_rich_text"
        />
      </div>

      <Link
        to={`/${slug.current}`}
        className="flex items-center justify-end mt-3"
      >
        <Button
          variant="text-link-light"
          label="Learn more"
          otherClasses="!text-white hover:!text-primary_blue_600"
        />
      </Link>
    </div>
  )
}

export default ServicesHubCard
