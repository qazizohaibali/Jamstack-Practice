import React from 'react'
import { PortableText } from '@portabletext/react'
import clsx from 'clsx'
import { getImageDimensions } from '@sanity/asset-utils'
import clientConfig from '../../../client-config'
import ImageUrlBuilder from '@sanity/image-url'
import { Link } from 'gatsby'
import Button from '../Button'
import OurBodyFaqs from '../OurBodyFaqs/OurBodyFaqs'
import OurBodyCard from '../OurBodyCard/OurBodyCard'

const builder = ImageUrlBuilder({
  ...clientConfig.sanity,
})

const FaqsRichText = ({value}) => {
  return <OurBodyFaqs {...value}/>
}

const OurBodyEquipment = ({value,isInline}) => {
  return <OurBodyCard {...value} isInline={isInline}/>
}

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value)
  return (
    <img
      src={builder
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="eager"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

export const RichText = ({ richText, otherClasses, ...rest }) => {
  const richTextClasses = clsx(otherClasses, 'relative')
  const ButtonComponent = (props) => {
    const data = props.value
    const { toggleFunc } = rest
    return (
      <Button
        {...data}
        otherClasses="mt-4"
        onClick={() => toggleFunc(data?.form)}
      />
    )
  }

  return (
    <div className={richTextClasses}>
      <PortableText
        value={richText}
        components={{
          types: {
            iframe: ({ value }) => {
              const { url, height } = value
              return (
                <iframe
                  title="Irame"
                  src={url}
                  className="!w-full"
                  width="100%"
                  height={`${height}px`}
                />
              )
            },
            image: SampleImageComponent,
            button: ButtonComponent,
            richTextFaqs: FaqsRichText,
            ourBodyEquipment:OurBodyEquipment
          },
          marks: {
            link: ({ children, value }) => {
              const rel = !value?.href?.startsWith('/')
                ? 'noreferrer noopener'
                : undefined

              return (
                <Link to={value.href} target={rel && '_blank'} rel={rel}>
                  {children}
                </Link>
              )
            },
          },
        }}
      />
    </div>
  )
}

export default RichText
