import React, { useState, useRef } from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import './subscribeform.scss'

export const SubscribeForm = ({ otherClasses }) => {
  const subscribeFormClasses = clsx(
    otherClasses,
    'w-full max-w-[800px] mx-auto px-6 lg:px-20 pt-[72px] pb-20 bg-primary_dark_blue_1 border-[1px] border-gray-300'
  )

  const [userEmail, setUserEmail] = useState('')
  const messageRef = useRef('')

  function encode(data) {
    const formData = new FormData()
    for (const key of Object.keys(data)) {
      formData.append(key, data[key])
    }
    return formData
  }

  function handleChange(e) {
    setUserEmail(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    try {
      await fetch('/', {
        method: 'POST',
        body: encode({
          'form-name': form.getAttribute('name'),
          email: userEmail,
        }),
      })
      messageRef.current.innerHTML =
        'Thank you for for submission! We will get in touch with you shortly.'
      setUserEmail('')
      form.reset()
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className={subscribeFormClasses} data-testid="subscribe-form">
      <div className="flex flex-col items-center gap-6">
        <Heading
          type="h4"
          otherClasses="font-Rubik font-semibold text-2xl text-white leading-[34px] text-center tracking-[0.72px]"
        >
          Don’t Miss Out
        </Heading>
        <p className="text-base font-inter leading-6 text-blue-100 text-center">
          Be the first to know about new developments in fleet management,
          public transportation solutions, and smart city applications.
        </p>
        <span
          ref={messageRef}
          className="text-base font-inter leading-6 text-blue-100 text-center"
        ></span>
        <form
          name="Subcriber Email"
          method="post"
          action=""
          onSubmit={handleSubmit}
          // data-netlify="true"
          className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-center w-full"
        >
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
            className="w-full lg:w-[352px] py-[12px] px-5 border-[1px] border-gray-100 placeholder:text-base placeholder:leading-6 placeholder:font-inter placeholder:text-gray-300 lg:rounded-l-[3px] lg:rounded-r-none rounded-[3px]"
            placeholder="Enter your email address"
          />
          <button className="py-[13px] px-5 form_background_color text-white font-Mulish font-semibold leading-6 w-full rounded-[3px] lg:rounded-r-[3px] lg:rounded-l-none lg:w-auto">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default SubscribeForm
