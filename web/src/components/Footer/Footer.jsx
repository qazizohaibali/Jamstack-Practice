import React from 'react'
import clsx from 'clsx'
import { useMediaPredicate } from 'react-media-hook'

import Icon from '../../components/Icon/Icon'

import { Link } from 'gatsby'

import './footer.scss'
import Heading from '../Heading/Heading'

export const Footer = ({ otherClasses, toggleFunc }) => {
  const footerClasses = clsx(otherClasses, 'w-full bg-[#2F3034] relative')

  const Year = new Date().getFullYear()

  return (
    <footer className={footerClasses} data-testid="footer">
      <div className="max-w-[1512px] mx-auto lg:px-[100px] px-6">
        <div className="grid lg:grid-cols-4 gap-6 grid-cols-2 pb-16">
          <div className="">
            <ul className="flex flex-col gap-2">
              <p className="font-bold text-[#B8B9BB] uppercase lg:mb-10 mb-3">
                Navigation
              </p>
              <li className="text-[#B8B9BB]">
                <a href="#">Home</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">About Us</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">What We Do</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">To The Power Of 10</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">Donate</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2">
              <p className="font-bold text-[#B8B9BB] uppercase lg:mb-10 mb-3">
                What We Do
              </p>
              <li className="text-[#B8B9BB]">
                <a href="#">Encouragig Testing</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">Strengthening Advocacy</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">Sharing Information</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">Building Leadership</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">Engaging With Global Fund</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2">
              <p className="font-bold text-[#B8B9BB] uppercase lg:mb-10 mb-3">
                Navigation
              </p>
              <li className="text-[#B8B9BB]">
                <a href="#">Home</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">About Us</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">What We Do</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">To The Power Of 10</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">Donate</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2">
              <p className="font-bold text-[#B8B9BB] uppercase lg:mb-10 mb-3">
                Navigation
              </p>
              <li className="text-[#B8B9BB]">
                <a href="#">Home</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">About Us</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">What We Do</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">To The Power Of 10</a>
              </li>
              <li className="text-[#B8B9BB]">
                <a href="#">Donate</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1512px] mx-auto lg:px-[100px] px-6 border-t border-white">
        <div className="flex md:flex-row flex-col gap-6 justify-between items-center py-10">
          <div>
            <Heading type="h3">Shakseyat</Heading>
          </div>
          <div>
            <p className="text-[#BBBDBD]">
              &copy; {Year} Shakseyat All Rights Reserved
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a rel="noopener noreferrer" target='_blank' href="http://www.facebook.com">
              <Icon icon="fb-icon" iconHeight={25} iconWidth={25} />
            </a>
            <a rel="noopener noreferrer" target='_blank' href="http://www.instagram.com">
              <Icon icon="instagram-icon" iconHeight={25} iconWidth={25} />
            </a>
            <a rel="noopener noreferrer" target='_blank' href="http://www.twitter.com">
              <Icon icon="twitter-icon" iconHeight={23} iconWidth={23} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
