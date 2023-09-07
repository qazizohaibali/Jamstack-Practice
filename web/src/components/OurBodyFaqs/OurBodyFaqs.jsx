import React from 'react'
import clsx from 'clsx'
import Accordion from '../Accordion/Accordion'

export const OurBodyFaqs = ({
  otherClasses,cards
}) => {

  const ourBodyFaqsClasses = clsx(
    otherClasses
  )


  return (
    <div className={ourBodyFaqsClasses} data-testid='our-body-faqs'>
      {
        cards.map((node)=>{
          return (

            <Accordion {...node}></Accordion>
          )
        })
      }
    </div>
  )
}

export default OurBodyFaqs
