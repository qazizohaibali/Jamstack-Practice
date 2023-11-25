import React from 'react'
import clsx from 'clsx'
import AnimatedCursor from 'react-animated-cursor'

export const CustomAnimatedCursor = ({
  otherClasses
}) => {

  const customAnimatedCursorClasses = clsx(
    otherClasses
  )
  
  return (
    <div className={customAnimatedCursorClasses} data-testid='custom-animated-cursor'>
       <AnimatedCursor
        innerSize={10}
        outerSize={40}
        color="255, 255, 255"
        outerAlpha={0}
        innerScale={1}
        outerScale={2}
        showSystemCursor={true}
        outerStyle={{
          border: '3px solid white'
        }}
        // innerStyle={{
        //   border: '3px solid brown'
        // }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
    </div>
  )
}

export default CustomAnimatedCursor
