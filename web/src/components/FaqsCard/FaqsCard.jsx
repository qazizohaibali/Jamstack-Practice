import React, { useState } from 'react'
import clsx from 'clsx'

import Icon from '../Icon/Icon'
import RichText from '../RichText/RichText'

import './faqscard.scss'
import Heading from '../Heading'
export const FaqsCard = ({ otherClasses, question, _rawAnswer }) => {
  const faqsCardClasses = clsx(otherClasses)

  const [toggle, setToggle] = useState(false)

  const toggleAccordion = (elm) => {
    setToggle(!elm)
  }

  return (
    <div className={faqsCardClasses} data-testid="faqs-card">
      <div className="flex items-center justify-between text-left">
        <button
          onClick={() => toggleAccordion(toggle)}
          type="h6"
          className={clsx(
            'w-full items-center flex justify-between text-[18px] lg:text-[24px] font-DmSans lg:font-DmSerifDisplay font-normal leading-[24px] lg:leading-[34px]  text-left',
            toggle
              ? 'text-primary_heading_color/50 bg-[#d8a171]'
              : 'text-primary_heading_color bg-[#424242] p-5 '
          )}
        >
          <Heading otherClasses="max-w-[490px]" type="h4">
            {question}
          </Heading>
          <Icon
            icon={clsx(toggle ? 'minus-icon' : 'plus-icon')}
            iconWidth={24}
            iconHeight={24}
          />
        </button>
      </div>
      <RichText
        richText={_rawAnswer}
        otherClasses={clsx(
          'accordions_rich_text',
          toggle === true ? 'bg-[#d8a171] block mt-10' : 'bg-[#424242] hidden'
        )}
      />
    </div>
  )
}

export default FaqsCard
