import React from 'react'
import { graphql, Link } from 'gatsby'
import clsx from 'clsx'

import './button.scss'

export const Button = ({
  label = '',
  variant = 'primary',
  otherClasses,
  form,
  external,
  withIcon,
  slug,
  onClick,
}) => {
  const buttonClasses = clsx(
    otherClasses,
    variant === 'primary' &&
      `px-8 py-5 primary_button text-base font-Montserrat font-medium text-white leading-6 uppercase border-[#2F3034] hover:bg-opacity-50 border-2`,
    variant === 'secondary' &&
      `px-8 py-5 secondary_button text-base font-Montserrat font-medium text-white leading-6 uppercase`,
    variant === 'fill-white' &&
      `px-6 py-5 fill-white text-base font-Montserrat font-semibold text-[#2F3034] uppercase`,
    variant === 'fill-transparent' &&
      `text-base bg-transparent border-2 border-white ring-offset-0 leading-6 font-medium font-Montserrat text-typography_heading_white px-6 py-[18px] uppercase hover:bg-[#F7F7F7] hover:text-black`
  )

  const withLinkDarkIcon = variant === 'text-link-dark'
  const withLinkLightIcon = variant === 'text-link-light'

  if (slug) {
    const { current } = slug
    return (
      <>
        {external ? (
          <a
            className={buttonClasses}
            href={current}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
            {withLinkDarkIcon && (
              <div className="rounded-full border-[3px] border-primary_blue_600 w-[28.08px] h-[28.08px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="group-hover:translate-x-[9px] transition duration-300"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.8914 7.27842L20.7312 13.3278C21.0896 13.6991 21.0896 14.3009 20.7312 14.6722L14.8914 20.7216C14.533 21.0928 13.952 21.0928 13.5936 20.7216C13.2353 20.3504 13.2353 19.7485 13.5936 19.3773L17.867 14.9506L7 14.9506L7 13.0494L17.867 13.0494L13.5936 8.62273C13.2353 8.25151 13.2353 7.64964 13.5936 7.27842C13.952 6.90719 14.533 6.90719 14.8914 7.27842Z"
                    fill="#F7F7F7"
                  />
                </svg>
              </div>
            )}
            {withLinkLightIcon && (
              <div className="rounded-full border-[3px] border-primary_blue_600 w-[28.08px] h-[28.08px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="group-hover:translate-x-[9px] transition duration-300"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.8914 7.51947L20.7312 13.5689C21.0896 13.9401 21.0896 14.542 20.7312 14.9132L14.8914 20.9626C14.533 21.3339 13.952 21.3339 13.5936 20.9626C13.2353 20.5914 13.2353 19.9895 13.5936 19.6183L17.867 15.1916L7 15.1916L7 13.2905L17.867 13.2905L13.5936 8.86379C13.2353 8.49257 13.2353 7.8907 13.5936 7.51948C13.952 7.14825 14.533 7.14825 14.8914 7.51947Z"
                    className="fill-[#05315A] group-hover:fill-white"
                  />
                </svg>
              </div>
            )}
          </a>
        ) : (
          <Link
            className={buttonClasses}
            to={`/${current}`}
            target="_self"
            rel=""
          >
            {label}
            {withLinkDarkIcon && (
              <div className="rounded-full border-[3px] border-primary_blue_600 w-[28.08px] h-[28.08px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="group-hover:translate-x-[9px] transition duration-300"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.8914 7.27842L20.7312 13.3278C21.0896 13.6991 21.0896 14.3009 20.7312 14.6722L14.8914 20.7216C14.533 21.0928 13.952 21.0928 13.5936 20.7216C13.2353 20.3504 13.2353 19.7485 13.5936 19.3773L17.867 14.9506L7 14.9506L7 13.0494L17.867 13.0494L13.5936 8.62273C13.2353 8.25151 13.2353 7.64964 13.5936 7.27842C13.952 6.90719 14.533 6.90719 14.8914 7.27842Z"
                    fill="#F7F7F7"
                  />
                </svg>
              </div>
            )}
            {withLinkLightIcon && (
              <div className="rounded-full border-[3px] border-primary_blue_600 w-[28.08px] h-[28.08px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="group-hover:translate-x-[9px] transition duration-300"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.8914 7.51947L20.7312 13.5689C21.0896 13.9401 21.0896 14.542 20.7312 14.9132L14.8914 20.9626C14.533 21.3339 13.952 21.3339 13.5936 20.9626C13.2353 20.5914 13.2353 19.9895 13.5936 19.6183L17.867 15.1916L7 15.1916L7 13.2905L17.867 13.2905L13.5936 8.86379C13.2353 8.49257 13.2353 7.8907 13.5936 7.51948C13.952 7.14825 14.533 7.14825 14.8914 7.51947Z"
                    className="fill-[#05315A] group-hover:fill-primary_blue_600"
                  />
                </svg>
              </div>
            )}
          </Link>
        )}
      </>
    )
  }

  return (
    <button
      onClick={(e) => {
        onClick && onClick(form, e)
      }}
      className={buttonClasses}
      data-testid="button"
    >
      {label}
      {withLinkDarkIcon && (
        <div className="rounded-full border-[3px] border-primary_blue_600 w-[28.08px] h-[28.08px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            className="group-hover:translate-x-[9px] transition duration-300"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.8914 7.27842L20.7312 13.3278C21.0896 13.6991 21.0896 14.3009 20.7312 14.6722L14.8914 20.7216C14.533 21.0928 13.952 21.0928 13.5936 20.7216C13.2353 20.3504 13.2353 19.7485 13.5936 19.3773L17.867 14.9506L7 14.9506L7 13.0494L17.867 13.0494L13.5936 8.62273C13.2353 8.25151 13.2353 7.64964 13.5936 7.27842C13.952 6.90719 14.533 6.90719 14.8914 7.27842Z"
              fill="#F7F7F7"
            />
          </svg>
        </div>
      )}
      {withLinkLightIcon && (
        <div className="rounded-full border-[3px] border-primary_blue_600 w-[28.08px] h-[28.08px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            className="group-hover:translate-x-[9px] transition duration-300"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.8914 7.51947L20.7312 13.5689C21.0896 13.9401 21.0896 14.542 20.7312 14.9132L14.8914 20.9626C14.533 21.3339 13.952 21.3339 13.5936 20.9626C13.2353 20.5914 13.2353 19.9895 13.5936 19.6183L17.867 15.1916L7 15.1916L7 13.2905L17.867 13.2905L13.5936 8.86379C13.2353 8.49257 13.2353 7.8907 13.5936 7.51948C13.952 7.14825 14.533 7.14825 14.8914 7.51947Z"
              className="fill-[#05315A] group-hover:fill-primary_blue_600"
            />
          </svg>
        </div>
      )}
    </button>
  )
}

export default Button

export const query = graphql`
  fragment Button on SanityButton {
    label
    variant
    action
    external
    form
    slug {
      current
    }
  }
`
