import React from 'react'
import clsx from 'clsx'
import Heading from '../Heading'
import Icon from '../Icon/Icon'

export const TopBar = ({ otherClasses }) => {
  const topBarClasses = clsx(otherClasses, 'bg-[#d8a171] flex md:flex-row flex-col justify-cnter gap-2 md:justify-between md:item-center p-4')

  return (
    <div className={topBarClasses} data-testid="top-bar">
      <div className="flex items-center gap-2">
        <Icon icon="phone" iconHeight={24} iconWidth={24} otherClasses="" />
        <div className="flex items-center gap-1 ">
          <Heading type="h6" otherClasses="text-[15px] lg:text-[20px]">
            +543 65482154,{' '}
          </Heading>
          <Heading type="h6" otherClasses="text-[15px] lg:text-[20px]">
            +044 25462124
          </Heading>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon="mail" iconHeight={22} iconWidth={22} otherClasses="" />
        <div className="flex items-center gap-1 ">
          
          <Heading type="h6" otherClasses="">
            shakseyat@booknow.com
          </Heading>
        </div>
      </div>
    </div>
  )
}

export default TopBar
