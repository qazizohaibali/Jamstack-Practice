import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Image from '../../components/Image/Image'

export const ParallaxSection = ({ otherClasses, image, video }) => {
  const parallaxSectionClasses = clsx(
    otherClasses,
    'relative mb-20 lg:mb-[120px]'
  )
  console.log('image?.asset?.url', image)
  return (
    <section className={parallaxSectionClasses} data-testid="parallax-section">
      {/* <Image imageData={image} otherClasses="w-full h-full fixed top-0 right-0"/>
      <div className='absoute top-2/4 left-2/4 translate-x-2/4 translate-y-2/4'> My Button</div> */}
      <div
        className="w-full absolute h-full !bg-fixed !bg-cover !bg-center "
        style={{ backgroundImage: url('../Images/servicesParallaxImage.jpg') }}
      />
      {/* <Image
        imageData={image}
        otherClasses="w-full absolute h-full !bg-fixed !bg-cover !bg-center "
      /> */}
      <div className="relative lg:pt-[111px] lg:pb-[158px] py-[133px] px-5  lg:px-[150px] xl:px-[321px]  bg-transparent">
        <div className="max-w-[892px]  mx-auto p-[25px] lg:p-[86px]  bg-[red]">
          My Button
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection

export const query = graphql`
  fragment ParallaxSection on SanityParallaxSection {
    __typename
    image {
      ...CustomImage
    }
    video {
      asset {
        url
      }
    }
  }
`
