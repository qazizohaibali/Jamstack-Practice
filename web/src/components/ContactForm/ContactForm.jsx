import React from 'react'
import clsx from 'clsx'
import Button from '../Button'
import Heading from '../Heading'

import './contactform.scss'

export const ContactForm = ({ otherClasses, toggleCancel, nodes }) => {
  const contactFormClasses = clsx(
    otherClasses,
    'lg:py-20 py-10 bg-[#2F3034] !text-white flex justify-center'
  )

  // const messageRef = useRef('')
  // const [state, setState] = useState({})
  // const handleChange = (e) => {
  //   setState((state) => ({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   }))
  // }

  // const [active, setActive] = useState('message')

  // const activeToggle = (elm) => {
  //   setActive(elm)
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const form = e.target
  //   try {
  //     await fetch('/', {
  //       method: 'POST',
  //       body: encode({
  //         'form-name': form.getAttribute('name'),
  //         ...state,
  //       }),
  //     })
  //     messageRef.current.innerHTML =
  //       'Thank you for for submission! We will get in touch with you shortly.'
  //     setState({})
  //     form.reset()
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div className={contactFormClasses} data-testid="contact-form">
      <div className="max-w-[1512px] rounded-[5px] p-[30px] lg:p-[60px] lg:mx-[70px] xl:mx-[150px] mx-4  flex lg:flex-row flex-col-reverse gap-[30px] bg-[#424242]">
        <form
          method="post"
          // onSubmit={handleSubmit}
          action=""
          name="Contact Us"
          // data-netlify="true"
          className="lg:w-[65%] flex flex-col  gap-4 xl:w-[75%]"
        >
          <Heading type="h3" otherClasses="text-[24px] lg:text-[40px] mb-3">
            Supplier Details
          </Heading>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-[50%] w-full">
              <label htmlFor="name" className="block w-full pb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full input-field-style"
                placeholder="Enter Name"
              />
            </div>
            <div className="lg:w-[50%] w-full">
              <label htmlFor="companyname" className="block w-full pb-3">
                Company Name
              </label>
              <input
                type="text"
                name="companyname"
                id="companyname"
                className="w-full input-field-style"
                placeholder="Enter Company Name"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="supplyname" className="block w-full pb-3">
              What do you supply?
            </label>
            <input
              type="text"
              name="supplyname"
              id="supplyname"
              className="w-full input-field-style"
              placeholder="Type Here"
            />
          </div>
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="lg:w-[50%] w-full">
              {/* <label htmlFor="email">Email</label>
              <input type="" name="email" id="email" /> */}
              <label htmlFor="email" className="block w-full pb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full input-field-style"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="lg:w-[50%] w-full">
              <label htmlFor="number" className="block w-full pb-3">
                Contact No.
              </label>
              <input
                type="number"
                name="number"
                id="number"
                className="w-full input-field-style"
                placeholder="Enter Phone"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block w-full pb-3">
              Company Introduction
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              placeholder="Type Here"
              rows="10"
              className="textarea-field-style w-full"
            ></textarea>
          </div>
          <Button label="Submit" otherClasses="w-fit  rounded-[5px]" />
        </form>
        <div className="lg:w-[35%] xl:w-[25%]">
          <Heading type="h3" otherClasses="text-[24px] mb-3 lg:mb-0 lg:text-[40px] ">
            Urgent Reqirements
          </Heading>
          <div className='flex flex-col gap-6'>
          <div className="bg-[#d8a171] text-white rounded-[5px] p-4 ">
            <Heading otherClasses="text-[20px] mb-3  leading-[30px]" type="h5">
              Sofa And Armchair Upholstery
            </Heading>
            <p className="text-[14px] text-white">Quantity: 25</p>
            <p className="text-[14px] text-white">For More Details</p>
            <p className="text-[14px] text-white">Contact: 03335951931</p>
          </div>
          <div className="bg-[#d8a171] text-white rounded-[5px] p-4 ">
            <Heading otherClasses="text-[20px] mb-3  leading-[30px]" type="h5">
              Sofa And Armchair Upholstery
            </Heading>
            <p className="text-[14px] text-white">Quantity: 25</p>
            <p className="text-[14px] text-white">For More Details</p>
            <p className="text-[14px] text-white">Contact: 03335951931</p>
          </div>
          <div className="bg-[#d8a171] text-white rounded-[5px] p-4 ">
            <Heading otherClasses="text-[20px] mb-3  leading-[30px]" type="h5">
              Sofa And Armchair Upholstery
            </Heading>
            <p className="text-[14px] text-white">Quantity: 25</p>
            <p className="text-[14px] text-white">For More Details</p>
            <p className="text-[14px] text-white">Contact: 03335951931</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
