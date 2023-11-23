import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading'

import allgray from '../../images/all-gray.svg'
import allbrown from '../../images/all-brown.svg'

export const PortolioHubSection = ({ otherClasses }) => {
  const portolioHubSectionClasses = clsx(otherClasses)

  const {
    allSanityPortfolioPage: { nodes }
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
      <div className="max-w-[1512px] mx-auto lg:px-[70px] px-4 my-10 lg:my-20">
        <div className="grid grid-cols-5">
          <div
            className={clsx(
              'flex cursor-pointer justify-center items-end gap-4 pb-6 ',
              tab === 'AllTab'
                ? 'border-b-[4px] border-[#EBAA70]'
                : 'border-b-[4px]  border-[#96989A]'
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
                  'flex cursor-pointer justify-center items-end gap-4 w-full  pb-6',
                  category === tab
                    ? 'border-b-[4px] border-[#EBAA70]'
                    : 'border-b-[4px] border-[#96989A]'
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
        <div className="flex flex-col gap-10 mt-10">
          {defaultResponse.map(({ mainImage, portfolioCardImages }, index) => {
            return (
              <div
                className={clsx(
                  'flex items-center gap-10',
                  index % 2 ? 'flex-row-reverse' : 'flex-row'
                )}
              >
                <div className="main w-2/4">
                  <Image imageData={mainImage} otherClasses="" />
                </div>
                <div className="data-iamge w-2/4 gap-5 grid grid-cols-2">
                  {portfolioCardImages.map(({ image }) => {
                    return <Image imageData={image} otherClasses="" />
                  })}
                </div>
              </div>
            )
          })}
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
