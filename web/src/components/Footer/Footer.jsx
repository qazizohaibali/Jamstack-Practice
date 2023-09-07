import React from 'react'
import clsx from 'clsx'
import { useMediaPredicate } from 'react-media-hook'

import Icon from '../../components/Icon/Icon'

import { Link } from 'gatsby'

import './footer.scss'

export const Footer = ({ otherClasses, toggleFunc }) => {
  const footerClasses = clsx(otherClasses, 'w-full bg-white relative')

  const Year = new Date().getFullYear()
  const biggerThan1024 = useMediaPredicate('(max-width: 1024px)')

  return (
    <footer className={footerClasses} data-testid="footer">
      <div className="max-w-[1512px] mx-auto pt-[44px] pb-[44px] pl-[21px] pr-[21px] xl:pl-[156px] xl:pr-[140px] xl:pt-[59px] xl:pb-[86px] ">
        <div className="grid  grid-cols-2 lg:grid-cols-5 gap-y-[49px] gap-x-[75px] md:gap-x-[50px]  md:gap-y-[50px] lg:gap-x-[68px] lg:gap-y-[68px] mb-[33px]">
          <Link to="/" className="col-span-2">
            <Icon
              icon="footer-logo"
              iconHeight={biggerThan1024 ? 48 : 66.09}
              iconWidth={biggerThan1024 ? 203 : 279}
            />
          </Link>
          <div className="flex flex-col gap-6">
            <p className="text-primary_dark_blue_1 cursor-default font-inter text-base leading-6 font-semibold ">
              Company
            </p>
            <ul className="flex flex-col gap-3 ">
              <li className="text-primary_dark_blue_1 hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-primary_dark_blue_1 hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
                <Link to="/about/meet-the-team">Meet the Team</Link>
              </li>
              <li className="text-primary_dark_blue_1 hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
                <Link to="/solutions">Solutions</Link>
              </li>
              <li className="text-primary_dark_blue_1  hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
                <Link to="/resources/testimonials">Testimonials</Link>
              </li>
              <li className="text-primary_dark_blue_1 hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 ">
            <p className="text-primary_dark_blue_1 cursor-default font-inter text-base leading-6 font-semibold ">
              <Link to="/solutions">Solutions</Link>
            </p>
            <ul className="flex flex-col gap-3 ">
              <li className="text-primary_dark_blue_1 hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
                <Link to="/solutions/transit-management">
                  Rail / Transit Management Systems
                </Link>
              </li>
              <li className="text-primary_dark_blue_1 hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
                <Link to="/solutions/fleet-management">Fleet Management</Link>
              </li>
              <li className="text-primary_dark_blue_1 hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
                <Link to="/solutions/smart-city">IOT / Smart City</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 mobile_footer_area">
            <p className="cursor-default text-primary_dark_blue_1 font-inter text-base leading-6 font-semibold ">
              Contact
            </p>
            <ul className="flex flex-col gap-3 ">
              <li className="text-primary_dark_blue_1  opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
                95 Pinon Trail <br /> Cedar Crest, NM 87008
              </li>
              <li className="text-primary_dark_blue_1 hover:text-primary_blue_600 opacity-70 font-inter text-[14px] font-normal leading-[20px] ">
                <a href="tel:8339362832">(833) 936-2832</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-[33px] after:absolute after:left-0 after:w-full after:h-[1px] after:bg-[#4F5EAC] after:top-[0px]">
          <div className="flex items-center justify-center lg:justify-between flex-col-reverse lg:flex-row pt-[33.5px]">
            <ul className="flex flex-col justify-center items-center lg:flex-row gap-4">
              <li className="text-primary_dark_blue_1/[0.70]   font-inter text-[14px] font-normal leading-[20px] ">
                @{Year} XenaTech{' '}
              </li>
              <li className="text-primary_dark_blue_1/[0.70] hover:text-primary_blue_600  font-inter text-[14px] font-normal leading-[20px] ">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="">
                <a
                  className="flex gap-[5.71px]"
                  href="https://www.wisedigitalpartners.com/nest-by-wise/"
                  target="_blank"
                >
                  <p className="text-primary_dark_blue_1/[0.70]  font-inter text-[14px] font-normal leading-[20px] ">
                    Powered by
                  </p>
                  <Icon
                    icon="nest-logo"
                    iconHeight={20.001}
                    iconWidth={75.496}
                  />
                </a>
              </li>
            </ul>
            <div className="pb-[33px] lg:pr-4">
              <a
                href="https://www.linkedin.com/in/jeanne-woodfin-28720518/"
                target="_blank"
              >
                <Icon icon="linkedin-blue" iconHeight={20} iconWidth={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
