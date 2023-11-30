import React from 'react'
import clsx from 'clsx'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading'
import RichText from '../../components/RichText/RichText'
import Button from '../../components/Button'
import { RiStarSFill } from 'react-icons/ri'
import { GoArrowRight } from 'react-icons/go'
import './portfoliosection.scss'
export const PortfolioSection = ({
  otherClasses,
  title,
  _rawBody,
  mainHeading,
  mainImage,
  portfolioCardImages,
  portfolioCategory,
  _rawShortDescription,
  _rawDescription,
}) => {
  const portfolioSectionClasses = clsx(otherClasses, 'bg-[#424242]')
  const halfWayIndex = Math.round(portfolioCardImages.length / 3)
  const firstPartOfArray = portfolioCardImages.slice(0, halfWayIndex)
  const secondPartOfArray = portfolioCardImages.slice(
    halfWayIndex,
    halfWayIndex + halfWayIndex
  )
  const thirdPartOfArray = portfolioCardImages.slice(
    halfWayIndex + halfWayIndex,
    portfolioCardImages.length
  )
  return (
    <section
      className={portfolioSectionClasses}
      data-testid="portfolio-section"
    >
      <div className="!relative">
        {mainImage && (
          <Image
            imageData={mainImage}
            otherClasses="!absolute top-0 left-0 h-full w-full"
          />
        )}{' '}
        <div className="!relative py-[180px] lg:px-[70px] ">
          <div className="max-w-[670px] p-[50px] portfolio-content">
            <p className="uppercase font-semibold text-[#2e3430] text-[20px] mb-3">
              {title}
            </p>
            <Heading otherClasses="font-Montserrat mb-3 text-[#2e3430] text-[50px] font-bold leading-[70px]">
              {mainHeading}
            </Heading>
            <RichText
              richText={_rawDescription}
              otherClasses="portfolio-richtext"
            />
            <Button
              label="Reach Us"
              variant="primary"
              otherClasses="!py-3 inline-block mt-6"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1512px] flex lg:px-[70px] px-4 pt-16">
        <div className="w-[70%]">
          <RichText richText={_rawBody} otherClasses="portfolio-bodytext" />
          <RichText richText={_rawBody} otherClasses="portfolio-bodytext" />
        </div>
        <div className="w-[30%] space-y-3 h-fit top-2 sticky">
          <div className=" bg-[#2e3034] space-y-4 p-7 rounded-2xl">
            <Heading type="h3" otherClasses="text-[30px] font-Garamond">
              Special Offer
            </Heading>
            <p className="text-[20px] text-white opacity-75">
              Larkin Wood Full Set
            </p>
            <div className="flex gap-[2px]">
              <RiStarSFill className="text-[#ffcc33] text-[35px]" />
              <RiStarSFill className="text-[#ffcc33] text-[35px]" />
              <RiStarSFill className="text-[#ffcc33] text-[35px]" />
              <RiStarSFill className="text-[#ffcc33] text-[35px]" />
              <RiStarSFill className="text-[#ffcc33] text-[35px]" />
            </div>
            <p className="text-[25px] font-semibold text-white">$729.99</p>
          </div>
          <div className="relative group">
            <div className="flex relative  z-50">
              <div className="w-[86%] h-28 bg-[#2e3034] rounded-tl-2xl"></div>
              <div className="w-[14%] h-28 bg-[#2e3034] rounded-tr-2xl rounded-br-2xl"></div>
            </div>
            <div className="bg-[#2e3034]  z-50 relative h-[50px] w-[86%]  rounded-b-2xl"></div>
            <div className="absolute bottom-0 right-0 h-[50px] w-[50px] rounded-full z-50 group-hover:bg-[white]  bg-[#d8a171] border-[4px] border-[#424242] p-[2px]">
              <div className="cursor-pointer w-full h-full rounded-full  bg-[#2e3034] group-hover:bg-[#d8a171] flex items-center justify-center">
                <GoArrowRight className="text-[26px] font-bold group-hover:translate-x-3 transition-all duration-300 ease-in-out  text-[#d8a171] group-hover:text-white" />
              </div>
            </div>
            <div className="w-10 h-10 absolute bottom-5 right-5 z-0 bg-[#2e3034]"></div>
            <div className="absolute p-[30px] top-0 left-0 z-50">
              <div className="flex ">
                <div className="h-16 w-16 rounded-full bg-pink-500"> </div>
                <div className="h-16 w-16 rounded-full bg-white -ml-2"> </div>
                <div className="h-16 w-16 rounded-full bg-green-400 -ml-2">
                  {' '}
                </div>
                <div className="h-16 w-16 rounded-full bg-slate-600 -ml-2">
                  {' '}
                </div>
                <div className="h-16 w-16 rounded-full bg-blue-300 -ml-2">
                  {' '}
                </div>
              </div>
              <Heading type="h3" otherClasses="text-[24px] mt-3 font-Garamond">
                Our Happy Clients
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 pt-20">
        <div>
          {firstPartOfArray.map(({ image }) => {
            return <Image imageData={image} otherClasses="" />
          })}
        </div>
        <div>
          {secondPartOfArray.map(({ image }) => {
            return <Image imageData={image} otherClasses="" />
          })}
        </div>
        <div>
          {thirdPartOfArray.map(({ image }) => {
            return <Image imageData={image} otherClasses="" />
          })}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
