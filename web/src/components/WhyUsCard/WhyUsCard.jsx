import React from 'react'
import clsx from 'clsx'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading/Heading'
import './whyuscard.scss'
import RichText from '../RichText/RichText'

export const WhyUsCard = ({ otherClasses, icon, heading, _rawSubText }) => {
  const whyUsCardClasses = clsx(
    otherClasses,
    'w-full flex flex-col items-start gap-3 p-[25px] why_us_card_bg_grediant'
  )

  return (
    <div className={whyUsCardClasses} data-testid="why-us-card">
      <Image imageData={icon} />
      <Heading
        type="h5"
        otherClasses="font-Rubik text-xl font-bold leading-[27px] text-white"
      >
        {heading}
      </Heading>
      <RichText richText={_rawSubText} otherClasses="why_us_card_rich_text" />
    </div>
  )
}

export default WhyUsCard
