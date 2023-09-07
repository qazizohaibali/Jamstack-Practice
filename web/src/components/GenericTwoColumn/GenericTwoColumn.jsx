import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import { Heading } from '../Heading'
import { RichText } from '../RichText'
import { Button } from '../Button'
import { Image } from '../Image'
import './generic.scss'

export const GenericTwoColumn = ({
  otherClasses,
  toggleFunc,
  genericSections: {
    heading,
    _rawSubText,
    reversed,
    mobileReversed,
    desktopImage,
    mobileImage,
    button,
  },
}) => {
  const genericTwoColumnClasses = clsx(
    otherClasses,
    'flex max-w-[1512px] mx-auto gap-10 xl:gap-[80px] px-4 lg:px-20 xl:px-[120px] items-center relative w-full my-20 lg:my-[120px]',
    reversed ? 'lg:flex-row-reverse' : 'lg:flex-row',
    mobileReversed ? 'flex-col-reverse' : 'flex-col'
  )

  return (
    <div className={genericTwoColumnClasses} data-testid="generic-two-column">
      <div className="w-full lg:w-[35%] flex flex-col">
        {heading && (
          <Heading
            type="h2"
            otherClasses={clsx('font-bold font-Lato text-gray-900 mb-6')}
          >
            {heading}
          </Heading>
        )}
        <RichText
          richText={_rawSubText}
          otherClasses="general_white_richText mb-6"
        />
        {button && (
          <Button
            onClick={() => toggleFunc(button?.form)}
            otherClasses="w-fit"
            {...button}
          />
        )}
      </div>

      <div className="w-full lg:w-[65%] relative">
        <Image
          placeholder="none"
          imageData={desktopImage}
          otherClasses={clsx(
            'relative z-10',
            reversed ? 'float-right' : 'float-left',
            mobileImage &&
              'w-full lg:w-auto !hidden sm:!block mobile_image_two_column_generic'
          )}
        />
        {mobileImage && (
          <Image
            placeholder="none"
            imageData={mobileImage}
            otherClasses="w-full sm:!hidden mobile_image_two_column_generic"
          />
        )}
      </div>
    </div>
  )
}

export default GenericTwoColumn

export const query = graphql`
  fragment GenericTwoColumnSection on SanityTwoColumnGenericSections {
    __typename
    identifier
    genericSections {
      heading
      _rawSubText
      reversed
      mobileReversed
      desktopImage {
        ...CustomImage
      }
      mobileImage {
        ...CustomImage
      }
      button {
        ...Button
      }
    }
  }
`
