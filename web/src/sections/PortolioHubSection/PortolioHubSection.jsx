import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading'

import './portfoliohubsection.scss'

import allgray from '../../images/all-gray.svg'
import allbrown from '../../images/all-brown.svg'
import RichText from '../../components/RichText/RichText'

export const PortolioHubSection = ({ otherClasses }) => {
  const portolioHubSectionClasses = clsx(
    otherClasses,
    'bg-[#2f3034] lg:py-20 py-10 lg:px-[70px]  '
  )

  const {
    allSanityPortfolioPage: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityPortfolioPage {
        nodes {
          title
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

  const [tab, setTab] = useState('AllTab')
  // const [allbtn, setAllbtn] = useState(false)
  const [defaultResponse, setDefaultResponse] = useState(nodes)

  console.log('defaultResponse', defaultResponse)

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

  console.log('uniqueTabsArray', uniqueTabsArray)
  const tabHandler = (item) => {
    setTab(item)
  }
  useEffect(() => {
    if (tab === 'AllTab') {
      setDefaultResponse(nodes)
    } else {
      const filterdata = nodes?.filter(({ portfolioCategory }) => {
        return portfolioCategory === tab
      })
      setDefaultResponse(filterdata)
    }
  }, [tab, nodes])

  return (
    <section
      className={portolioHubSectionClasses}
      data-testid="portolio-hub-section"
    >
      <div className="max-w-[1512px] mx-auto ">
        <div className="grid grid-cols-5 lg:px-0 px-4">
          <div
            className={clsx(
              'flex cursor-pointer justify-center items-end gap-4 pb-6 px-3',
              tab === 'AllTab'
                ? 'border-b-[2px] border-[#EBAA70]'
                : 'border-b-[2px]  border-[#96989A]'
            )}
            onClick={() => {
              setTab('AllTab')
            }}
          >
            {' '}
            {tab === 'AllTab' ? (
              <img src={allbrown} alt="" className="w-[25px] h-[25px]" />
            ) : (
              <img src={allgray} alt="" className="w-[25px] h-[25px]" />
            )}
            <p
              className={clsx(
                '',
                tab === 'AllTab' ? 'text-[#EBAA70]' : 'text-[#96989A]'
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
                _rawShortDescription,
                slug: { current },
              },
              index
            ) => {
              return (
                <div
                  className={clsx(
                    'flex lg:flex-row flex-col justify-between lg:items-center gap-10',
                    index % 2 ? 'flex-row-reverse' : 'flex-row'
                  )}
                >
                  <div
                    className={clsx(
                      'w-full  bg-[#EBAA70] py-2 px-2 block lg:hidden'
                    )}
                  >
                    <Heading type="h2" otherClasses="text-[22px] lg:[36px]">
                      {title}
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
                        otherClasses="!h-full !w-full portfolio-main-image relative group group-hover:scale-125 transition-all duration-700 ease-in-out"
                      />
                    </div>
                    <div
                      className={clsx(
                        '!absolute -mt-[100px] left-0 -translate-y-[50px] !w-full !hidden group-hover:!flex-col group-hover:!flex bg-[#EBAA70] py-7 px-7',
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

                  <div className="data-iamge w-full px-4 lg:px-0 lg:w-2/4 gap-5 grid grid-cols-2">
                    {portfolioCardImages.map(({ image }) => {
                      return <Image imageData={image} otherClasses="" />
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
