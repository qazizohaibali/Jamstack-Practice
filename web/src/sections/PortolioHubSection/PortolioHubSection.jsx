import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading'
import './portfoliohubsection.scss'

import allgray from '../../images/all-gray.svg'
import chairgray from '../../images/chair-gray.svg'
import homegray from '../../images/home-gray.svg'
import sofagray from '../../images/sofa-gray.svg'
import decogray from '../../images/deco-gray.svg'
import decobrown from '../../images/deco-brown.svg'
import allbrown from '../../images/all-brown.svg'
import chairbrown from '../../images/chair-brown.svg'
import homebrown from '../../images/home-brown.svg'
import sofabrown from '../../images/sofa-brown.svg'
import RichText from '../../components/RichText/RichText'
import Icon from '../../components/Icon/Icon'

export const PortolioHubSection = ({ otherClasses }) => {
  const portolioHubSectionClasses = clsx(
    otherClasses,
    'bg-[#2f3034] lg:py-[120px] py-20 lg:px-[70px] '
  )

  const {
    allSanityPortfolioPage: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityPortfolioPage {
        nodes {
          title
          mainHeading
          slug {
            current
          }
          portfolioCategory
          hoverIcon {
            ...CustomImage
          }
          icon {
            ...CustomImage
          }
          mainImage {
            ...CustomImage
          }
          portfolioCardImages {
            image {
              ...CustomImage
            }
          }
          _rawShortDescription
        }
      }
    }
  `)

  const [tab, setTab] = useState('Show All')
  // const [allbtn, setAllbtn] = useState(false)
  const [defaultResponse, setDefaultResponse] = useState(nodes)

  const [dropdown, setDropdown] = useState(false)

  const filterTabs = nodes?.map(({ portfolioCategory, icon, hoverIcon }) => {
    return {
      category: portfolioCategory,
      icon: icon,
      hoverIcon: hoverIcon,
    }
  })

  function makeUniqueByRegion(array) {
    const uniqueArray = []
    const uniqueRegionsMap = new Map()
    filterTabs.forEach((item) => {
      const category = item.category
      if (!uniqueRegionsMap.has(category)) {
        uniqueRegionsMap.set(category, true)
        uniqueArray.push(item)
      }
    })

    return uniqueArray
  }
  const uniqueTabsArray = makeUniqueByRegion(filterTabs)

  const tabHandler = (item) => {
    setTab(item)
    setDropdown(false)
  }
  useEffect(() => {
    if (tab === 'Show All') {
      setDefaultResponse(nodes)
    } else {
      const filterdata = nodes?.filter(({ portfolioCategory }) => {
        return portfolioCategory === tab
      })
      setDefaultResponse(filterdata)
    }
  }, [tab, nodes])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const mobTabs = [
    {
      category: 'Show All',
      icon: allgray,
      hoverIcon: allbrown,
    },
    {
      category: 'Villas',
      icon: homegray,
      hoverIcon: homebrown,
    },
    {
      category: 'Interior Fit-Out',
      icon: chairgray,
      hoverIcon: chairbrown,
    },
    {
      category: 'Home Interior',
      icon: sofagray,
      hoverIcon: sofabrown,
    },
    {
      category: 'Home Decoration',
      icon: decogray,
      hoverIcon: decobrown,
    },
  ]

  const dropdownHandler = () => {
    if (dropdown) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  return (
    <section
      className={portolioHubSectionClasses}
      data-testid="portolio-hub-section"
    >
      <div className="max-w-[1512px] mx-auto ">
        <div
          className="relative bg-[#222327] mx-6 block lg:hidden group rounded-lg"
          onClick={dropdownHandler}
        >
          <div className="px-4 py-4 flex justify-between relative mt-5">
            <div className="flex gap-3 items-center">
              {tab === 'Show All' ? (
                <img src={allbrown} alt="" className="w-[25px] h-[25px]" />
              ) : tab === 'Villas' ? (
                <img src={homebrown} alt="" className="w-[25px] h-[25px]" />
              ) : tab === 'Interior Fit-Out' ? (
                <img src={chairbrown} alt="" className="w-[25px] h-[25px]" />
              ) : tab === 'Home Interior' ? (
                <img src={sofabrown} alt="" className="w-[25px] h-[25px]" />
              ) : (
                <img src={decobrown} alt="" className="w-[25px] h-[25px]" />
              )}

              <p className="text-[18px] font-normal text-[#EBAA70]"> {tab} </p>
            </div>
            <Icon
              icon="arrow-down-white"
              iconHeight={20}
              iconWidth={20}
              otherClasses={clsx(
                'transition-all duration-300 ease-in-out',
                dropdown ? 'rotate-180' : 'rotate-0'
              )}
            />
          </div>
          <div
            className={clsx(
              'absolute mx-auto z-50 rounded-lg bg-[#222327] mt-2 w-full',
              dropdown ? '!block' : '!hidden'
            )}
          >
            <ul className="w-full ">
              {mobTabs.map(({ category, icon, hoverIcon }) => {
                return (
                  <li className="flex gap-3 px-4 py-3 items-center">
                    {tab !== category ? (
                      <img src={icon} alt="" className="w-[25px] h-[25px]" />
                    ) : (
                      <img
                        src={hoverIcon}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                    )}
                    <p
                      className={clsx(
                        ' text-[18px] font-normal',
                        tab === category ? 'text-[#EBAA70]' : 'text-[#96989A]'
                      )}
                      onClick={() => tabHandler(category)}
                    >
                      {category}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="!hidden  lg:!grid grid-cols-5 lg:px-0 px-4">
          <div
            className={clsx(
              'w-[300px] flex cursor-pointer justify-center items-end gap-4 pb-6 px-3',
              tab === 'Show All'
                ? 'border-b-[2px] border-[#EBAA70]'
                : 'border-b-[2px]  border-[#96989A]'
            )}
            onClick={() => {
              setTab('Show All')
            }}
          >
            {' '}
            {tab === 'Show All' ? (
              <img src={allbrown} alt="" className="w-[25px] h-[25px]" />
            ) : (
              <img src={allgray} alt="" className="w-[25px] h-[25px]" />
            )}
            <p
              className={clsx(
                '',
                tab === 'Show All' ? 'text-[#EBAA70]' : 'text-[#96989A]'
              )}
            >
              All
            </p>
          </div>
          {uniqueTabsArray.map(({ category, icon, hoverIcon }) => {
            return (
              <div
                className={clsx(
                  'flex cursor-pointer justify-center items-end gap-4 w-full px-3 pb-6',
                  category === tab
                    ? 'border-b-[2px] border-[#EBAA70]'
                    : 'border-b-[2px] border-[#96989A]'
                )}
                onClick={() => {
                  tabHandler(category)
                }}
              >
                <div className="max-w-[100px]">
                  {category === tab ? (
                    <Image
                      imageData={hoverIcon}
                      otherClasses="w-full h-full"
                      objectFit="contain"
                    />
                  ) : (
                    <Image
                      imageData={icon}
                      otherClasses="w-full h-full"
                      objectFit="contain"
                    />
                  )}
                </div>
                <div
                  className={clsx(
                    '',
                    category === tab ? 'text-[#EBAA70]' : 'text-[#96989A]'
                  )}
                >
                  {category}
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col gap-10 mt-16">
          {defaultResponse.map(
            (
              {
                mainImage,
                portfolioCardImages,
                title,
                mainHeading,
                _rawShortDescription,
                slug: { current },
              },
              index
            ) => {
              return (
                <div
                  className={clsx(
                    'flex flex-col justify-between lg:items-center gap-10',
                    index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  )}
                >
                  <div
                    className={clsx(
                      'w-full  bg-[#EBAA70] py-2 px-2 block lg:hidden'
                    )}
                  >
                    <Heading type="h2" otherClasses="text-[22px] lg:[36px]">
                      {mainHeading}
                    </Heading>
                    <RichText
                      richText={_rawShortDescription}
                      otherClasses="porftolio-card-richtext"
                    />
                  </div>
                  <Link
                    to={current}
                    className="main h-full relative portfolio-main-image w-full  lg:w-2/4 group   hover:cursor-pointer  px-4 lg:px-0"
                  >
                    <div className="overflow-hidden">
                      <Image
                        imageData={mainImage}
                        otherClasses="!h-full rounded-tr-[30px] !w-full portfolio-main-image relative group group-hover:scale-125 transition-all duration-700 ease-in-out"
                      />
                    </div>
                    <div
                      className={clsx(
                        '!absolute  -mt-[100px] left-0 -translate-y-[50px] !w-full !hidden group-hover:lg:!flex-col group-hover:lg:!flex bg-[#EBAA70] py-7 px-7',
                        index % 2 === 0
                          ? '!items-start-start -translate-x-7'
                          : '!items-end translate-x-7'
                      )}
                    >
                      <Heading type="h2" otherClasses={clsx('')}>
                        {title}
                      </Heading>
                      <RichText
                        richText={_rawShortDescription}
                        otherClasses="porftolio-card-richtext"
                      />
                    </div>
                  </Link>

                  <div className="data-iamge w-full px-4 lg:px-0 lg:w-2/4 gap-5  grid grid-cols-2">
                    {portfolioCardImages.map(({ image }) => {
                      return (
                        <Image
                          imageData={image}
                          otherClasses="hover:filter duration-300 ease-in-out transition-all  hover:grayscale-0 grayscale"
                        />
                      )
                    })}
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

export default PortolioHubSection

export const query = graphql`
  fragment PortfolioHubSection on SanityPortfolioHubSection {
    __typename
    identifier
  }
`
