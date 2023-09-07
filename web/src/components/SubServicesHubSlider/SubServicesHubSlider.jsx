import React from 'react'
import clsx from 'clsx'
import Slider from '../Slider/Slider'
import ServicesHubCard from '../ServicesHubCard/ServicesHubCard'
import Image from '../Image/Image'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const SubServicesHubSlider = ({ otherClasses, arr }) => {
  const subServicesHubSliderClasses = clsx(
    otherClasses,
    'w-full md:hidden mt-8'
  )

  const sliderRef = useRef(null)
  const [slideToScroll, setSlideToScroll] = useState(0)

  const [nav1, setNav1] = useState()

  useEffect(() => {
    nav1?.slickGoTo(slideToScroll)
  }, [slideToScroll])

  function SampleNextArrow(props) {
    const { onClick, currentSlide } = props
    useEffect(() => {
      setSlideToScroll(currentSlide)
    }, [currentSlide])
    return <button className="hidden" onClick={onClick} />
  }

  function SamplePrevArrow(props) {
    const { onClick } = props
    return <button className="hidden" onClick={onClick} />
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    // draggable: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '10px',
        },
      },
    ],
  }

  return (
    <div
      className={subServicesHubSliderClasses}
      data-testid="sub-services-hub-slider"
    >
      <Slider
        refs={(slider1) => setNav1(slider1)}
        customSettings={settings}
        customClass="services_slider "
      >
        {arr.map((node) => (
          <div className="w-full pr-6">
            <ServicesHubCard {...node} />
          </div>
        ))}
      </Slider>
      <div className="flex items-center gap-4 justify-center mt-8">
        {arr.map(({ mobileIcon }, index) => {
          return (
            <button
              onClick={() => {
                setSlideToScroll(index)
              }}
              className={clsx(
                '',
                slideToScroll === index ? 'opacity-100' : 'opacity-50'
              )}
            >
              <Image imageData={mobileIcon} />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SubServicesHubSlider
