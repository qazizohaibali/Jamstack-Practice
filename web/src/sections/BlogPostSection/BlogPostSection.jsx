import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { FacebookShareButton, LinkedinShareButton } from 'react-share'
import Icon from '../../components/Icon/Icon'
import Heading from '../../components/Heading/Heading'
import Image from '../../components/Image/Image'
import RichText from '../../components/RichText/RichText'
// import SubscribeForm from '../../components/SubscribeForm/SubscribeForm'
import { differenceInDays, format, formatDistance } from 'date-fns'
import './blogpostsection.scss'

export const BlogPostSection = ({
  otherClasses,
  slug,
  title,
  siteMetadata,
  publishedAt,
  desktopImage,
  mobileImage,
  authors,
  blogCategory,
  _rawBody,
}) => {
  const blogPostSectionClasses = clsx(
    otherClasses,
    'w-full pt-[114px] lg:pt-[168px] bg_gredient_color'
  )
  const [copied, setCopied] = useState(false)

  function copy() {
    setCopied(true)
    const el = document.createElement('input')
    el.value = window.location.href
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  useEffect(() => {
    let timer
    if (copied) {
      timer = setTimeout(() => setCopied(false), 1000)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [copied])

  const shareButtons = siteMetadata && (
    <>
      <FacebookShareButton
        url={`${siteMetadata?.siteUrl}/${slug?.current}/`}
        quote={title}
      >
        <div>
          <Icon icon="facebook" iconHeight={20} iconWidth={20} />
        </div>
      </FacebookShareButton>
      <div>
        <Icon icon="instagram" iconHeight={20} iconWidth={20} />
      </div>
      <LinkedinShareButton
        url={`${siteMetadata?.siteUrl}/${slug?.current}/`}
        quote={title}
      >
        <div>
          <Icon icon="linkedin" iconHeight={20} iconWidth={20} />
        </div>
      </LinkedinShareButton>
      <div>
        <Icon icon="youtube" iconHeight={20} iconWidth={20} />
      </div>
      <button onClick={copy} className="relative w-[20px] h-[20px  ]">
        <p
          className={clsx(
            'absolute w-[89px] text-gray_900 fontFamily2 animate-waving-hand font-bold  text-xs bottom-[-30px] left-[-70px] sm:left-[-50px] lg:left-[-30px]',
            copied ? 'opacity-1' : 'opacity-0 '
          )}
        >
          {copied ? 'Link is Copied' : ''}
        </p>
        <Icon icon="link" iconHeight={20} iconWidth={20} />
      </button>
    </>
  )

  return (
    <section className={blogPostSectionClasses} data-testid="blog-post-section">
      <div className="max-w-[1512px] mx-auto xl:px-[156px] px-6 lg:px-20 ">
        <div className="max-w-[800px] mx-auto mb-[46px]">
          <Heading
            type="h1"
            otherClasses="font-work-sans font-semibold lg:text-[44px] text-left  leading-normal text-[34px] text-primary_heading_color mb-8"
          >
            {title}
          </Heading>
          <div className="flex flex-col lg:flex-row lg:justify-between justify-start items-start">
            <div className="flex lg:flex-row flex-col items-start  gap-[14px] mb-4 lg:mb-0">
              {authors?.customImage?.asset && (
                <Image
                  imgClassName="rounded-full"
                  imageData={authors?.customImage}
                  otherClasses="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <p className="font-work-sans leading-[18px] tracking-[0.42px] uppercase font-semibold text-sm text-primary_heading_color mb-1">
                  {authors?.name}
                </p>
                <p className="font-work-sans leading-5 text-sm text-primary_body_color">
                  {publishedAt && publishedAt}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-6">{shareButtons}</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-[1200px]">
          <Image
            imageData={desktopImage}
            alt="blog"
            imgClassName="rounded-3xl"
            otherClasses="w-full rounded-3xl"
          />
        </div>

        <div className="blog_post_section_rich_text w-full max-w-[800px] mx-auto px-6 lg:px-0 my-10 lg:my-20">
          <RichText richText={_rawBody} otherClasses="blog_post_rich_text" />
        </div>
        <div className="flex items-center gap-6 justify-center lg:mb-20 mb-10">
          {shareButtons}
        </div>
        {/* <SubscribeForm /> */}
      </div>
    </section>
  )
}

export default BlogPostSection
