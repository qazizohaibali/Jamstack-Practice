import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Cta from '../Cta/Cta'
import ContactForm from '../ContactForm/ContactForm'
// import { useMediaPredicate } from 'react-media-hook'

import clsx from 'clsx'

export const Layout = ({ children, isCtaEnabled }) => {
  const [toggle, setToggle] = useState()
  // const isDesktop = useMediaPredicate('(min-width: 768px)')

  const toggleFunc = (flag) => {
    setToggle(flag)
  }
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { toggleFunc })
    }
    return child
  })

  useEffect(() => {
    window.setTimeout(() => window.scrollTo(0, 1), 1)
  }, [])

  return (
    <>
      {/* <Navbar toggleFunc={toggleFunc} /> */}
      <div
        className={clsx(
          'w-full fixed top-0 right-0 flex justify-end h-full z-[100] overflow-hidden',
          toggle === 'Contact Us' ? 'w-full' : 'w-0'
        )}
      >
        <button
          aria-label="button"
          onClick={() => toggleFunc()}
          className="w-full h-full absolute left-0 top-0 bg-[#00000083]"
        ></button>
        <ContactForm
          formType="Contact Us"
          toggleCancel={toggleFunc}
          otherClasses={clsx(
            'z-10 transition-width ',
            toggle === 'Contact Us' ? 'w-full' : 'w-0'
          )}
        />
      </div>
      <main>{childrenWithProps}</main>
      <Cta toggleFunc={toggleFunc} />
      <Footer toggleFunc={toggleFunc} />
    </>
  )
}

export default Layout
