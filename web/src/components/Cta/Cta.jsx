import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'

import './cta.scss'

export const Cta = ({ otherClasses, toggleFunc }) => {
  const ctaClasses = clsx(otherClasses, 'bg-[#2F3034]  border-t-2 border-[#54555A]')
  return (
    <section className={ctaClasses} data-testid="cta" id="cta_trigger_point">
      <div className="max-w-[1512px] mx-auto lg:px-[100px] px-6 lg:py-[60px] py-10">
        <div className='max-w-[600px] mx-auto'>
          <Heading type="h2" otherClasses="text-center capitalize mb-[50px] text-[40px] lg:text-[50px]">
            Don't Hesitate to contact us anytime
          </Heading>
          <div className='flex md:flex-row flex-col justify-center items-center gap-4'>
          <Button label='Ennquiry Now' variant='fill-white' otherClasses='md:w-fit w-full'/>
          <Button label='Call us' variant='fill-transparent' otherClasses='w-full md:w-fit'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
