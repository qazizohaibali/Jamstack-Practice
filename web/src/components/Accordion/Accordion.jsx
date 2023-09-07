import React, { useState } from 'react'
import clsx from 'clsx'


import './accordion.scss'
import Icon from '../Icon/Icon'
export const Accordion = ({ otherClasses,heading,subText}) => {
  const [active, setActive] = useState(false)
  const accordionClasses = clsx(
    otherClasses,
    'w-full last:border-b-[1px] border-gray_200 border-t-[1px]'
  )

  const toggleActive = (active) => {
    setActive(!active)
  }

  return (
    <div className={accordionClasses} data-testid="accordion">
      <div>
        <button
          onClick={() => toggleActive(active)}
          className={clsx(
            'w-full flex text-left gap-3  items-center cursor-pointer faqs-question py-4  text-primary_heading_color text-[#05315A] font-semibold  text-[14px] leading-[20px] font-Inter group '
          )}
        >
          <Icon otherClasses={clsx("group-hover:block hidden",active ? "group-hover:hidden" : "group-hover:block")} icon="faq-open-icon" iconHeight="18" iconWidth="18"></Icon>
          <Icon icon="faq-close-icon" otherClasses={clsx('', !active ? "hidden" : "block")} iconWidth="22" iconHeight="22"></Icon>
          {heading}
          <div
            className={clsx(
              'w-6 cursor-pointer h-6',
              active ? '!hidden' : '!block'
            )}
          >
            <span className="faqs_plus_icon bg-[#008AEC]"></span>
          </div>
          <div
            className={clsx(
              'w-6 cursor-pointer h-6',
              active ? '!block' : '!hidden'
            )}
          >
            <span className="faqs_minus_icon bg-[#008AEC]"></span>
          </div>
        </button>
      </div>
      <div
        className={clsx(
          'overflow-hidden accordion_rich_text',
          active ? 'h-auto pb-8' : 'h-0'
        )}
      >
        {subText}
      </div>
    </div>
  )
}

export default Accordion
