import React from 'react'
import clsx from 'clsx'
import Image from '../Image/Image'
import { Heading } from '../Heading'
import RichText from '../RichText/RichText'
import './servicescard.scss'
import { Button } from '../Button'

export const ServicesCard = ({
  otherClasses,
  heading,
  _rawSubText,
  image,
}) => {
  const servicesCardClasses = clsx(
    otherClasses,
    'w-full group bg-blue_600 hover:bg-blue_400 flex flex-col justify-between pb-6 gap-3 service_card_main_container transition duration-300'
  )

  return (
    <div className={servicesCardClasses} data-testid="services-card">
      <div className="flex flex-col justify-center">
        <Image
          imageData={image}
          otherClasses="w-full max-w-[70px] mx-auto"
        />
        <div className="mt-6">
          <Heading type="h5" otherClasses="font-Montserrat mb-4 text-center">
            {heading}
          </Heading>
          <RichText
            richText={_rawSubText}
            otherClasses="general_white_richText text-center"
          />
        </div>
      </div>
    </div>
  )
}

export default ServicesCard
