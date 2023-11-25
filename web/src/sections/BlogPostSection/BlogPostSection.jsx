import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
import Icon from '../../components/Icon/Icon'
import RichText from '../../components/RichText/RichText'
import './blogpostsection.scss'
import Image from '../../components/Image/Image'
// import SubscribeForm from '../../components/SubscribeForm/SubscribeForm'

export const BlogPostSection = ({
  otherClasses,
  title,
  slug,
  publishedAt,
  desktopImage,
  authors,
  _rawBody,
  siteMetadata,
}) => {
  const blogPostSectionClasses = clsx(otherClasses, 'pt-[145px] bg-[#2F3034]')

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
          <Icon icon="fb-icon" iconHeight={20} iconWidth={20} />
        </div>
      </FacebookShareButton>
      <LinkedinShareButton
        url={`${siteMetadata?.siteUrl}/${slug?.current}/`}
        quote={title}
      >
        <div>
          <Icon icon="linkedin-icon" iconHeight={20} iconWidth={20} />
        </div>
      </LinkedinShareButton>
      <TwitterShareButton
        url={`${siteMetadata?.siteUrl}/${slug?.current}/`}
        quote={title}
      >
        <div>
          <Icon icon="twitter-icon" iconHeight={20} iconWidth={20} />
        </div>
      </TwitterShareButton>
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
      <div className="max-w-[1512px] mx-auto xl:px-[156px] lg:px-20 px-4">
        <div className="max-w-[800px] mx-auto mb-[46px]">
          <Heading
            type="h1"
            otherClasses="font-Garamond font-bold lg:text-[42px] lg:leading-[52px] text-white mb-8"
          >
            {title}
          </Heading>
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-[14px]">
              {authors?.UserImage?.asset && (
                <Image
                  imgClassName="rounded-full"
                  imageData={authors?.UserImage}
                  otherClasses="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <p className="font-Mulish font-semibold text-sm text-white mb-1">
                  {authors?.name}
                </p>
                <p className="font-Mulish text-sm text-white">
                  {publishedAt && publishedAt}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-6">{shareButtons}</div>
            </div>
          </div>
        </div>
        <Image imageData={desktopImage} alt="blog" className="" />
        <div className="blog_post_section_rich_text md:max-w-[800px] mx-auto lg:px-0 my-10 lg:my-20">
          <RichText richText={_rawBody} />
        </div>
        <div className="flex items-center gap-6 justify-center lg:pb-20 pb-10">
          {shareButtons}
        </div>
        {/* <SubscribeForm
          subText=" Sign up for the latest industry insights from True North Mergers &
          Acquisitions."
          heading="  Subscribe to our Newsletter"
        /> */}
      </div>
    </section>
  )
}

export default BlogPostSection
