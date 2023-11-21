import React, { useEffect, useState } from 'react'
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

  const filterTabs = [
    ...new Set(
      nodes.map(({ portfolioCategory, icon, hoverIcon }) => {
        return {
          category: portfolioCategory,
          icon: icon,
          hoverIcon: hoverIcon,
        }
      })
    ),
  ]

  const allLocations = locations.map(({ region: { regionName } }) => {
    return {
      region: regionName,
      nodes: locations
        .filter(
          ({ region: { regionName: nestedRegion } }) =>
            nestedRegion === regionName
        )
        
    };
  });

  function makeUniqueByRegion(array) {
    const uniqueArray = [];
    const uniqueRegionsMap = new Map();
    allLocations.forEach((item) => {
      const region = item.region;
      if (!uniqueRegionsMap.has(region)) {
        uniqueRegionsMap.set(region, true);
        uniqueArray.push(item);
      }
    });

    return uniqueArray;
  }
  const uniqueTabsArray = makeUniqueByRegion(filterTabs);

  // filterTabs.unshift('AllTab')
console.log("filterTabs",filterTabs);
  const tabHandler = (item) => {
    setTab(item)
  }
  useEffect(() => {
    if (tab === 'AllTab') {
      setDefaultResponse(nodes)
    } else {
      const filterdata = nodes.filter(({ portfolioCategory }) => {
        return portfolioCategory === tab
      })
      setDefaultResponse(filterdata)
    }
  }, [tab, nodes])

  console.log('nodes', nodes)

  return (
    <section
      className={portolioHubSectionClasses}
      data-testid="portolio-hub-section"
    >
      <div className="max-w-[1512px] mx-auto lg:px-[70px] px-4 my-10 lg:my-20">
        <div className="flex ">
         <div className=''>

         </div>
          {filterTabs.map(({category}) => {
            return (
              <div
                className={clsx(
                  'px-4 py-3 w-full flex justify-center items-center border-b-[2px] border-[#AFAFAF] hover:border-black',
                  category === tab ? 'text-[blue]' : 'text-[red]'
                )}
                onClick={() => {
                  tabHandler(category)
                }}
              >
                {category}
              </div>
            )
          })}
        </div>
        <div className="flex flex-col gap-10">
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
