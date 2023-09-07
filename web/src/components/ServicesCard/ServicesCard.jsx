import React from 'react'
import clsx from 'clsx'
import Image from '../Image/Image'
import { Heading } from '../Heading'
import RichText from '../RichText/RichText'
import './servicescard.scss'
import { Button } from '../Button'

export const ServicesCard = ({
  otherClasses,
  slug,
  heading,
  _rawSubText,
  image,
  hoverImage,
}) => {
  const servicesCardClasses = clsx(
    otherClasses,
    'w-full group bg-blue_600 hover:bg-blue_400 flex flex-col justify-between pb-6 gap-3 service_card_main_container transition duration-300'
  )

  return (
    <div className={servicesCardClasses} data-testid="services-card">
      <div className="">
        <Image
          imageData={image}
          otherClasses="group-hover:!hidden !block w-full bg-white"
        />
        <Image
          imageData={hoverImage}
          otherClasses="group-hover:!block !hidden w-full bg-white"
        />
        <div className="px-4 pt-6">
          <Heading type="h5" otherClasses="font-Rubik text-white font-bold">
            {heading}
          </Heading>
          <RichText
            richText={_rawSubText}
            otherClasses="general_white_richText services_card_rich_text"
          />
        </div>
      </div>
      <a className=" flex items-center gap-[6px] group ml-auto w-fit mr-4">
        <p className="text-base leading-6 font-bold font-inter text-typography_heading_white group-hover:opacity-100 opacity-0 transition duration-300">
          Learn More
        </p>
        <div className="rounded-full border-[3px] border-primary_blue_600 w-[28.08px] h-[28.08px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            className="group-hover:translate-x-[9px] transition duration-300"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.8914 7.27842L20.7312 13.3278C21.0896 13.6991 21.0896 14.3009 20.7312 14.6722L14.8914 20.7216C14.533 21.0928 13.952 21.0928 13.5936 20.7216C13.2353 20.3504 13.2353 19.7485 13.5936 19.3773L17.867 14.9506L7 14.9506L7 13.0494L17.867 13.0494L13.5936 8.62273C13.2353 8.25151 13.2353 7.64964 13.5936 7.27842C13.952 6.90719 14.533 6.90719 14.8914 7.27842Z"
              fill="#F7F7F7"
            />
          </svg>
        </div>
      </a>
    </div>
  )
}

export default ServicesCard
