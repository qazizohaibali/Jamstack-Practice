import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import Icon from '../Icon'
import Button from '../Button'
import Heading from '../Heading'

import './contactform.scss'

function encode(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  return formData
}

export const ContactForm = ({ otherClasses, toggleCancel, nodes }) => {
  const contactFormClasses = clsx(
    otherClasses,
    'max-w-[720px] bg-primary_dark_blue_1 overflow-y-auto h-full relative'
  )

  const messageRef = useRef('')
  const [state, setState] = useState({})
  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const [active, setActive] = useState('message')

  const activeToggle = (elm) => {
    setActive(elm)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    try {
      await fetch('/', {
        method: 'POST',
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
      messageRef.current.innerHTML =
        'Thank you for for submission! We will get in touch with you shortly.'
      setState({})
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={contactFormClasses} data-testid="contact-form">
      <div className="flex items-center justify-between px-6 py-4 border-b-[1px] border-b-gray-200">
        <span className="flex items-center gap-2">
          <Icon icon="phone" />
          <p className="font-inter text-base font-bold leading-6 text-white">
            (833) 936-2832
          </p>
        </span>
        <button className="" onClick={() => toggleCancel()}>
          <Icon icon="cancel-icon" iconWidth={16} iconHeight={16} />
        </button>
      </div>

      <div className="pb-10 px-4 md:px-[84px] w-full ">
        <Heading
          type="h3"
          otherClasses="text-center text-3xl font-Rubik font-bold contact_form_text_gredient_color my-8"
        >
          Contact Us Heading
        </Heading>
        <div className="flex items-center mb-8 rounded-full bg-gray-600/20 overflow-hidden">
          <button
            onClick={() => activeToggle('meeting')}
            className={clsx(
              'w-full flex items-center justify-center gap-2 py-3 font-Lato text-xs sm:text-[15px] whitespace-nowrap font-semibold leading-[18px] tracking-[0.42px] text-white uppercase cursor-pointer',
              active === 'meeting'
                ? 'bg-primary_blue_600 opacity-100 rounded-full'
                : 'opacity-20'
            )}
          >
            <Icon
              otherClasses={clsx(
                active === 'meeting'
                  ? 'active-meeting-icon'
                  : 'simple-meeting-icon'
              )}
            />{' '}
            <span>Book a meeting</span>{' '}
          </button>
          <button
            onClick={() => activeToggle('message')}
            className={clsx(
              'w-full flex items-center justify-center gap-2 py-3 font-Lato text-xs sm:text-[15px] whitespace-nowrap font-semibold leading-[18px] tracking-[0.42px] text-white uppercase cursor-pointer',
              active === 'message'
                ? 'bg-primary_blue_600 opacity-100 rounded-full'
                : 'opacity-20'
            )}
          >
            <Icon
              otherClasses={clsx(
                active === 'message'
                  ? 'active-message-icon'
                  : 'simple-message-icon'
              )}
            />{' '}
            <span>Send us a message</span>
          </button>
        </div>
        <form
          method="post"
          onSubmit={handleSubmit}
          action=""
          name="Contact Us"
          // data-netlify="true"
          className={clsx(
            'w-full mt-5 md:mt-8',
            active === 'message' ? 'block' : 'hidden'
          )}
        >
          <p
            className="font-inter text-white  text-base font-bold mb-4"
            ref={messageRef}
          ></p>

          <div className="mb-5">
            <label
              htmlFor="name"
              className="font-inter text-sm font-semibold text-white leading-[20px] uppercase"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              required
              type="text"
              onChange={handleChange}
              className="w-full border-[1px]  pl-4 font-inter bg-transparent text-white  h-12 mt-2 outline-none focus:border-blue-600"
            />
          </div>
          <div className="mb-5 flex flex-col md:flex-row gap-5 lg:gap-[21px]">
            <div className="w-full md:w-2/4">
              <label
                htmlFor="phone"
                className="font-inter text-sm leading-[20px] font-semibold text-white uppercase"
              >
                Phone Number
              </label>
              <input
                name="phone"
                id="phone"
                required
                onChange={handleChange}
                type="number"
                className="w-full border-[1px]  pl-4 font-inter bg-transparent text-white  h-12 mt-2 outline-none focus:border-blue-600"
              />
            </div>
            <div className="w-full md:w-2/4">
              <label
                htmlFor="email"
                className="font-inter text-sm leading-[20px] font-semibold text-white uppercase"
              >
                Email Address
              </label>
              <input
                name="email"
                id="email"
                required
                type="email"
                onChange={handleChange}
                className="w-full border-[1px]  pl-4 font-inter bg-transparent text-white  h-12 mt-2 outline-none focus:border-blue-600"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 mb-5">
            <label
              htmlFor="what-can-we-help-you-with"
              className="font-inter text-sm font-semibold leading-[20px] text-white uppercase"
            >
              What Can We Help You With?
            </label>
            <select
              name="what-can-we-help-you-with"
              id="what-can-we-help-you-with"
              type="text"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 bg-transparent flex justify-between px-4 h-12 items-center text-base text-gray-300 font-normal font-Mulish outline-none  focus:border-primary_blue_600 "
            >
              <option value="" className="text-gray-900">
                Select one...
              </option>
              <option
                value="Rail / Transit Management Systems"
                className="text-gray-900"
              >
                Rail / Transit Management Systems
              </option>
              <option value="Fleet Management" className="text-gray-900">
                Fleet Management
              </option>
              <option value="Smart City Solutions" className="text-gray-900">
                Smart City Solutions
              </option>
              <option value="Other" className="text-gray-900">
                Other
              </option>
            </select>
          </div>
          <div className="w-full mb-5">
            <label
              htmlFor="description"
              className="font-inter text-sm font-semibold leading-[20px] text-white uppercase"
            >
              Message (optional)
            </label>
            <textarea
              type="text"
              onChange={handleChange}
              name="description"
              id="description"
              cols="30"
              rows="10"
              className="w-full border font-inter pl-4 pt-4 border-gray-300 min-h-[136px] max-h-[136px] mt-2 bg-transparent text-white outline-none focus:border-primary_blue_600  resize-none"
            ></textarea>
          </div>
          <Button label="Submit" />
        </form>
        <div className={clsx(active === 'meeting' ? 'block' : 'hidden')}>
          <iframe
            src="https://calendly.com/jwoodfin-k4o/demo?month=2023-08"
            frameborder="0"
            width="100%"
            height="500px"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
