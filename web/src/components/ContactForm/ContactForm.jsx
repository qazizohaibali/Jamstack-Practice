import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import Icon from '../Icon'
import Button from '../Button'
import Heading from '../Heading'

import './contactform.scss'


export const ContactForm = ({ otherClasses, toggleCancel, nodes }) => {
  const contactFormClasses = clsx(
    otherClasses,
    ''
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
      
      <div className="max-w-[1512px] flex">

        <form
          method="post"
          // onSubmit={handleSubmit}
          action=""
          name="Contact Us"
          // data-netlify="true"
         
        >
          

          
          <Button label="Submit" />
        </form>
        
      </div>
    </div>
  )
}

export default ContactForm
