import React from 'react'
import clsx from 'clsx'
import desktopBackground from '../../images/cta-desktop-background.png'
import mobileBackground from '../../images/cta-mobile-background.png'
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'

import './cta.scss'

export const Cta = ({ otherClasses, toggleFunc }) => {
  const ctaClasses = clsx(
    otherClasses,
    'w-full relative px-[20px] py-20 lg:px-20 lg:py-[64px]'
  )
  return (
    <section className={ctaClasses} data-testid="cta" id="cta_trigger_point">
      {/* <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-primary_dark_blue_1  mix-blend-overlay"></div> */}
      {/* <img src={frameTop} alt="" className="w-full absolute top-0 left-0" />
      <img
        src={frameBotom}
        alt=""
        className="w-full absolute bottom-0 left-0"
      /> */}
      <img
        src={desktopBackground}
        alt=""
        className="absolute top-0 left-0 w-full h-full hidden lg:block -z-10"
      />
      <img
        src={mobileBackground}
        alt=""
        className="absolute top-0 left-0 w-full h-full lg:hidden -z-10"
      />
      <div className="w-full max-w-[1183px] mx-auto flex items-center justify-center px-[21px] lg:px-0 pb-[91px] pt-20 lg:py-[65px] z-30">
        <div className="w-full lg:max-w-[650px]">
          <Heading
            type="h2"
            otherClasses="text-[32px] lg:text-[38px] text-center mb-[34px] cta_gredient_text"
          >
            Contact Us
          </Heading>
          <p className="font-inter text-lg leading-7 lg:text-xl lg:leading-[30px] text-primary_blue_100 text-center mb-[34px]">
            Have an idea that a XenaTech Intelligent Solution can turn into a
            reality? We’d love to learn more and demonstrate our capabilities.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-center">
            <a
              href="https://calendly.com/jwoodfin-k4o/demo?month=2023-08"
              target="_blank"
            >
              <Button
                variant="primary"
                label="Book a Demo"
                otherClasses="!w-[220px] lg:!w-auto"
              />
            </a>

            <Button
              onClick={() => toggleFunc('Contact Us')}
              variant="secondary"
              label="Contact Us"
              otherClasses="!bg-white hover:!shadow-xl !w-[220px] lg:!w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
