import React, { useState } from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Image from '../../components/Image/Image'
import Heading from '../../components/Heading'
export const PortolioHubSection = ({ otherClasses }) => {
  const portolioHubSectionClasses = clsx(otherClasses)

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
          mainPortfolioImage {
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

  const [tab, setTab] = useState('homeInterior')

  const filterTabs = [
    ...new Set(
      nodes.map(({ portfolioCategory }) => {
        return portfolioCategory
      })
    ),
  ]

  const filterImages = nodes.find(
    (item) => item.portfolioCategory === tab
  ).portfolioCardImages

  const filterMainImage = nodes.find(
    (item) => item.portfolioCategory === tab
  ).mainPortfolioImage

  const tabHandler = (item) => {
    setTab(item)
  }


  return (
    <section
      className={portolioHubSectionClasses}
      data-testid="portolio-hub-section"
    >
      <div className="max-w-[1512px] mx-auto lg:px-[70px] px-4 my-10 lg:my-20">
        <div className="flex ">
          {filterTabs.map((node) => {
            return (
              <div
                className="px-4 py-3 w-full flex justify-center items-center border-b-[2px] border-[#AFAFAF] hover:border-black"
                onClick={() => {
                  tabHandler(node)
                }}
              >
                {node}
              </div>
            )
          })}
        </div>
        {/* <div className="mt-5 flex ">
          <div className="w-full relative lg:w-[50%]">
            <Image imageData={} otherClasses="absolute top-0 left-0 w-full h-full" />
            <div className="h-[300px] bg-slate-400">s</div>
            <div className="relative -mt-3 -ml-3">
              <Heading type="h4" otherClasses=""></Heading>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col gap-1">
            <div className="flex gap-1 h-full">
              <div className="bg-slate-600 w-full h-full">hello</div>
              <div className="bg-slate-600 w-full h-full">hello</div>
            </div>

            <div className="flex gap-1 h-full">
              <div className="bg-slate-600 w-full h-full">hello</div>
              <div className="bg-slate-600 w-full h-full">hello</div>
            </div>
          </div>
        </div> */}
      <div className='flex flex-col'>
        {nodes.map((node,index) => {
          return(
            <div className={clsx('flex items-center ',index % 2 ? "flex-row-reverse" :"flex-row")}>
              <div className='main w-2/4'>mian</div>
              <div className='data-iamge w-2/4'>images</div>
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
