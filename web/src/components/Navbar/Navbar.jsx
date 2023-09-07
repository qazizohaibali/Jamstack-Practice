import React, { useState } from 'react'
import clsx from 'clsx'
import './navbar.scss'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import { Link } from 'gatsby'
import logoNavbar from '../../images/logo-nav.svg'
import Heading from '../Heading/Heading'
import { hideBodyScroll, showBodyScroll } from '../../utils/helpers'

export const Navbar = ({ otherClasses, toggleFunc }) => {
  const [active, setActive] = useState(false)

  const activeFunc = (elm) => {
    setActive(!elm)
  }

  const [state, setState] = useState({
    activeTab: '',
    nestedActive: [],
  })
  const nestedFunc = (elm, elm1) => {
    if (elm1) {
      if (!state.nestedActive.includes(elm1)) {
        setState((prev) => {
          return {
            ...prev,
            activeTab: elm,
            nestedActive: [...prev.nestedActive, elm1],
          }
        })
      } else if (state.nestedActive.includes(elm1)) {
        setState((prev) => {
          return {
            ...prev,
            activeTab: elm,
            nestedActive: prev.nestedActive.filter((node) => node !== elm1),
          }
        })
      }
    } else {
      setState((prev) => {
        return {
          ...prev,
          activeTab: elm,
        }
      })
    }
  }

  const navbarClasses = clsx(
    otherClasses,
    'w-full fixed top-0 left-0 z-20 border-b-[1px] border-[#0154A4] lg:border-b-[0px] bg-primary_dark_blue_1'
  )

  if (active) {
    hideBodyScroll()
  } else {
    showBodyScroll()
  }

  return (
    <nav className={navbarClasses} id="navbar" data-testid="navbar">
      <div className="max-w-[1512px] mx-auto w-full py-2 lg:py-0 px-5 lg:px-20 xl:px-[120px] flex items-center justify-between lg:relative">
        <a href="" className="lg:hidden">
          <Icon icon="profile-white-icon" iconHeight={24} iconWidth={24} />
        </a>
        <div className="flex items-center gap-10">
          <Link to="/">
            <img
              src={logoNavbar}
              alt="nav-logo"
              className="w-[200px] h-[47.4px] lg:w-[243px] lg:h-[57.5px]"
            />
          </Link>
          <div
            className={clsx(
              'absolute lg:static top-[63.39px] left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-primary_dark_blue_1 mobile_main_container pt-[70px] pb-[165px] lg:pb-0 lg:pt-0 flex gap-20 lg:gap-0 flex-col items-center justify-between',
              active ? 'block' : 'hidden lg:block '
            )}
          >
            <ul
              className={clsx(
                'flex flex-col lg:flex-row items-center gap-8 ',
                state.activeTab === 'about'
                  ? 'hidden'
                  : state.activeTab === 'solution'
                  ? 'hidden'
                  : state.activeTab === 'resources'
                  ? 'hidden'
                  : 'block'
              )}
            >
              <li className="lg:h-[83px] flex items-center group">
                <Link className="text-base font-semibold font-inter text-[#d7d8e0] hidden lg:block">
                  About
                </Link>
                <button
                  onClick={() => nestedFunc('about')}
                  className="text-[20px] font-bold font-Rubik text-[#d7d8e0] lg:hidden"
                >
                  About
                </button>
                <div className="lg:group-hover:block hidden absolute top-[83px] p-12 rounded-[8px] max-w-fit bg-typography_heading_white navbar_menu_box_shadow">
                  <ul className="flex flex-col gap-4">
                    <li className="group/item">
                      <Link
                        to="/about/"
                        className="text-typography_heading text-base  font-inter leading-6 font-normal hover:text-primary_blue_600 flex items-center"
                      >
                        <Icon
                          icon="right-blue-arrow"
                          iconWidth={14}
                          iconHeight={14}
                          otherClasses="transition-all group-hover/item:mr-4 mr-0 duration-300 group-hover/item:w-4 w-0 "
                        />
                        About Us
                      </Link>
                    </li>
                    <li className="group/item">
                      <Link
                        to="/about/meet-the-team/"
                        className="text-typography_heading text-base  font-inter leading-6 font-normal hover:text-primary_blue_600 flex items-center"
                      >
                        <Icon
                          icon="right-blue-arrow"
                          iconWidth={14}
                          iconHeight={14}
                          otherClasses="transition-all group-hover/item:mr-4 mr-0 duration-300 group-hover/item:w-4 w-0 "
                        />
                        Meet The Team
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="lg:h-[83px] flex items-center group">
                <Link
                  to="/solutions"
                  className="lg:block hidden text-base font-semibold font-inter text-[#d7d8e0] "
                >
                  Solutions
                </Link>
                <button
                  onClick={() => nestedFunc('solution')}
                  className="text-[20px] font-bold font-Rubik text-[#d7d8e0] lg:hidden"
                >
                  Solutions
                </button>
                <div className="w-full max-w-[1109px] translate-x-[-50%] left-2/4  lg:group-hover:grid justify-between gap-5 hidden absolute top-[83px] py-12 px-8 rounded-[8px] bg-typography_heading_white navbar_menu_box_shadow mega_menu_grid ">
                  <ul className="flex flex-col gap-4">
                    <li className="group/item">
                      <Link
                        to="/solutions/transit-management/"
                        className="text-typography_heading text-base font-inter leading-6 font-bold hover:text-primary_blue_600"
                      >
                        Rail/Transit Management Systems
                      </Link>
                    </li>
                    <li className="group/item">
                      <Link
                        to="/solutions/transit-management/on-board-systems/"
                        className="text-typography_heading text-base  font-inter leading-6 font-normal hover:text-primary_blue_600 flex items-center"
                      >
                        <Icon
                          icon="right-blue-arrow"
                          iconWidth={14}
                          iconHeight={14}
                          otherClasses="transition-all group-hover/item:mr-4 mr-0 duration-300 group-hover/item:w-4 group-hover/item:min-w-[16px] min-w-[0px] w-0 6"
                        />
                        On Board Systems
                      </Link>
                    </li>
                    <li className="group/item">
                      <Link
                        to="/solutions/transit-management/passenger-information-systems"
                        className="text-typography_heading text-base  font-inter leading-6 font-normal hover:text-primary_blue_600 flex items-center"
                      >
                        <Icon
                          icon="right-blue-arrow"
                          iconWidth={14}
                          iconHeight={14}
                          otherClasses="transition-all group-hover/item:mr-4 mr-0 duration-300 group-hover/item:w-4 group-hover/item:min-w-[16px] min-w-[0px] w-0 "
                        />
                        Passenger Information Systems
                      </Link>
                    </li>
                    <li className="group/item">
                      <Link
                        to="/solutions/transit-management/mobile-applications/"
                        className="text-typography_heading text-base  font-inter leading-6 font-normal hover:text-primary_blue_600 flex items-center"
                      >
                        <Icon
                          icon="right-blue-arrow"
                          iconWidth={14}
                          iconHeight={14}
                          otherClasses="transition-all group-hover/item:mr-4 mr-0 duration-300 group-hover/item:w-4 group-hover/item:min-w-[16px] min-w-[0px] w-0 "
                        />
                        Mobile Applications
                      </Link>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-4">
                    <li className="group/item">
                      <Link
                        to="/solutions/fleet-management/"
                        className="text-typography_heading text-base font-inter leading-6 font-bold hover:text-primary_blue_600"
                      >
                        Fleet Management
                      </Link>
                    </li>
                    <li className="group/item">
                      <Link
                        to="/solutions/fleet-management/service-patrol/"
                        className="text-typography_heading text-base  font-inter leading-6 font-normal hover:text-primary_blue_600 flex items-center"
                      >
                        <Icon
                          icon="right-blue-arrow"
                          iconWidth={14}
                          iconHeight={14}
                          otherClasses="transition-all group-hover/item:mr-4 mr-0 duration-300 group-hover/item:w-4 group-hover/item:min-w-[16px] min-w-[0px] w-0 "
                        />
                        Service Patrol
                      </Link>
                    </li>
                    <li className="group/item">
                      <Link
                        to="/solutions/fleet-management/commercial-fleets/"
                        className="text-typography_heading text-base  font-inter leading-6 font-normal hover:text-primary_blue_600 flex items-center"
                      >
                        <Icon
                          icon="right-blue-arrow"
                          iconWidth={14}
                          iconHeight={14}
                          otherClasses="transition-all group-hover/item:mr-4 mr-0 duration-300 group-hover/item:w-4 group-hover/item:min-w-[16px] min-w-[0px] w-0 "
                        />
                        Commercial Fleets
                      </Link>
                    </li>
                    <li className="group/item">
                      <Link
                        to="/solutions/fleet-management/customized-solutions/"
                        className="text-typography_heading text-base  font-inter leading-6 font-normal hover:text-primary_blue_600 flex items-center"
                      >
                        <Icon
                          icon="right-blue-arrow"
                          iconWidth={14}
                          iconHeight={14}
                          otherClasses="transition-all group-hover/item:mr-4 mr-0 duration-300 group-hover/item:w-4 group-hover/item:min-w-[16px] min-w-[0px] w-0 "
                        />
                        Customized Solutions
                      </Link>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-4">
                    <li className="group/item">
                      <Link
                        to="/solutions/smart-city/"
                        className="text-typography_heading text-base font-inter leading-6 font-bold hover:text-primary_blue_600"
                      >
                        IOT / Smart City
                      </Link>
                    </li>
                    <li className="group/item">
                      <Link
                        to="/solutions/smart-city/custom-applications/"
                        className="text-typography_heading text-base  font-inter leading-6 font-normal hover:text-primary_blue_600 flex items-center"
                      >
                        <Icon
                          icon="right-blue-arrow"
                          iconWidth={14}
                          iconHeight={14}
                          otherClasses="transition-all group-hover/item:mr-4 mr-0 duration-300 group-hover/item:w-4 group-hover/item:max-w-[16px] max-w-[0px] w-0 "
                        />
                        Custom Applications
                      </Link>
                    </li>
                  </ul>
                  <a
                    href="https://calendly.com/jwoodfin-k4o/demo?month=2023-06"
                    target="_blank"
                    className="max-w-[200px] w-full solutions_inner_end_container flex items-end pl-6 pr-14 pb-6"
                  >
                    <Heading
                      type="h5"
                      otherClasses="font-bold text-typography_heading_white font-Rubik"
                    >
                      Book Your Demo Today
                    </Heading>
                  </a>
                </div>
              </li>
              <li className="lg:h-[83px] flex items-center group">
                <Link className="text-base font-semibold font-inter text-[#d7d8e0] hidden lg:block">
                  Resources
                </Link>
                <button
                  onClick={() => nestedFunc('resources')}
                  className="text-[20px] font-bold font-Rubik text-[#d7d8e0] lg:hidden"
                >
                  Resources
                </button>
                <div className="lg:group-hover:block hidden absolute top-[83px] p-12 rounded-[8px] max-w-fit bg-typography_heading_white navbar_menu_box_shadow">
                  <ul className="flex flex-col gap-4">
                    <li className="group/item">
                      <Link
                        to="/resources/testimonials/"
                        className="text-typography_heading text-base  font-inter leading-6 font-normal hover:text-primary_blue_600 flex items-center"
                      >
                        <Icon
                          icon="right-blue-arrow"
                          iconWidth={14}
                          iconHeight={14}
                          otherClasses="transition-all group-hover/item:mr-4 mr-0 duration-300 group-hover/item:w-4 w-0 "
                        />
                        Testimonials
                      </Link>
                    </li>
                    <li className="group/item">
                      <Link
                        to="/blog/"
                        className="text-typography_heading text-base  font-inter leading-6 font-normal hover:text-primary_blue_600 flex items-center"
                      >
                        <Icon
                          icon="right-blue-arrow"
                          iconWidth={14}
                          iconHeight={14}
                          otherClasses="transition-all group-hover/item:mr-4 mr-0 duration-300 group-hover/item:w-4 w-0 "
                        />
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div
              className={clsx(
                'w-full',
                state.activeTab === 'about'
                  ? 'block'
                  : state.activeTab === 'solution'
                  ? 'block'
                  : state.activeTab === 'resources'
                  ? 'block'
                  : 'hidden'
              )}
            >
              <button
                onClick={() => nestedFunc('')}
                className="flex items-center text-base font-normal text-gray-50 leading-6 font-inter gap-4 pl-5"
              >
                <Icon icon="left-arrow-white" iconHeight={16} iconWidth={16} />
                Back
              </button>
              <div
                className={clsx(
                  '',
                  state.activeTab === 'about' ? 'block' : 'hidden'
                )}
              >
                <Heading
                  type="h5"
                  otherClasses="text-[#6c7286] text-[20px] leading-[27px] font-bold font-Rubik text-center"
                >
                  About
                </Heading>
                <ul className="mt-[33px] px-10 flex flex-col gap-4">
                  <Link to="/about/">
                    <li className="text-base font-normal font-inter leading-6 text-[#d7d8e0]">
                      About Us
                    </li>
                  </Link>

                  <Link to="/about/meet-the-team/">
                    <li className="text-base font-normal font-inter leading-6 text-[#d7d8e0]">
                      Meet The Team
                    </li>
                  </Link>
                </ul>
              </div>
              <div
                className={clsx(
                  '',
                  state.activeTab === 'solution' ? 'block' : 'hidden'
                )}
              >
                <Heading
                  type="h5"
                  otherClasses="text-[#6c7286] text-[20px] leading-[27px] font-bold font-Rubik text-center"
                >
                  <Link to="/solutions/">Solutions</Link>
                </Heading>
                <ul className="mt-[33px] px-10 flex flex-col gap-8">
                  <li className="text-base flex flex-col font-normal font-inter leading-6 text-[#d7d8e0] group">
                    <button
                      onClick={() => nestedFunc('solution', 'rail')}
                      className="flex justify-between items-center font-semibold text-gray-50 leading-6 text-base text-left font-Rubik"
                    >
                      Rail/Transit Management Systems
                      <Icon
                        icon="arrow-down-white"
                        iconHeight={16}
                        iconWidth={16}
                      />
                    </button>
                    <ul
                      className={clsx(
                        ' flex-col gap-4 mt-4',
                        state.nestedActive.includes('rail') ? 'flex' : 'hidden'
                      )}
                    >
                      <Link to="/solutions/transit-management/on-board-systems/">
                        <li className="text-base font-normal font-inter leading-6 text-[#d7d8e0]">
                          On Board Systems
                        </li>
                      </Link>

                      <Link to="/solutions/transit-management/passenger-information-systems">
                        <li className="text-base font-normal font-inter leading-6 text-[#d7d8e0]">
                          Passenger Information Systems
                        </li>
                      </Link>

                      <Link to="/solutions/transit-management/mobile-applications/">
                        <li className="text-base font-normal font-inter leading-6 text-[#d7d8e0]">
                          Mobile Applications
                        </li>
                      </Link>
                    </ul>
                  </li>
                  <li className="text-base flex flex-col font-normal font-inter leading-6 text-[#d7d8e0] group">
                    <button
                      onClick={() => nestedFunc('solution', 'fleet')}
                      className="flex justify-between items-center font-semibold text-gray-50 leading-6 text-base text-left font-Rubik"
                    >
                      Fleet Management
                      <Icon
                        icon="arrow-down-white"
                        iconHeight={16}
                        iconWidth={16}
                      />
                    </button>
                    <ul
                      className={clsx(
                        ' flex-col gap-4 mt-4',
                        state.nestedActive.includes('fleet') ? 'flex' : 'hidden'
                      )}
                    >
                      <Link to="/solutions/fleet-management/service-patrol/">
                        <li className="text-base font-normal font-inter leading-6 text-[#d7d8e0]">
                          Service Patrol
                        </li>
                      </Link>

                      <Link to="/solutions/fleet-management/commercial-fleets/">
                        <li className="text-base font-normal font-inter leading-6 text-[#d7d8e0]">
                          Commercial Fleets
                        </li>
                      </Link>

                      <Link to="/solutions/fleet-management/customized-solutions/">
                        <li className="text-base font-normal font-inter leading-6 text-[#d7d8e0]">
                          Customized Solutions
                        </li>
                      </Link>
                    </ul>
                  </li>
                  <li className="text-base flex flex-col font-normal font-inter leading-6 text-[#d7d8e0] group">
                    <button
                      onClick={() => nestedFunc('solution', 'iot')}
                      className="flex justify-between items-center font-semibold text-gray-50 leading-6 text-base text-left font-Rubik"
                    >
                      IOT / Smart City
                      <Icon
                        icon="arrow-down-white"
                        iconHeight={16}
                        iconWidth={16}
                      />
                    </button>
                    <ul
                      className={clsx(
                        ' flex-col gap-4 mt-4',
                        state.nestedActive.includes('iot') ? 'flex' : 'hidden'
                      )}
                    >
                      <Link to="/solutions/smart-city/custom-applications/">
                        <li className="text-base font-normal font-inter leading-6 text-[#d7d8e0]">
                          Custom Applications
                        </li>
                      </Link>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className={clsx(
                  '',
                  state.activeTab === 'resources' ? 'block' : 'hidden'
                )}
              >
                <Heading
                  type="h5"
                  otherClasses="text-[#6c7286] text-[20px] leading-[27px] font-bold font-Rubik text-center"
                >
                  Resources
                </Heading>
                <ul className="mt-[33px] px-10 flex flex-col gap-4">
                  <li className="text-base font-normal font-inter leading-6 text-[#d7d8e0]">
                    Testimonials
                  </li>
                  <li className="text-base font-normal font-inter leading-6 text-[#d7d8e0]">
                    Blog
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center w-full gap-6 lg:hidden px-[38px]">
              <Link
                className={clsx(
                  'text-base leading-6 font-semibold font-inter text-typography_heading_white items-center gap-2',
                  state.activeTab === 'solution' ? 'hidden' : 'flex'
                )}
              >
                <Icon icon="login-icon" iconHeight={18} iconWidth={18} />
                Login
              </Link>
              <Button
                onClick={() => toggleFunc('Contact Us')}
                label="Contact Us"
                variant="cta-button"
                otherClasses="block w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link className="text-base leading-6 font-semibold font-inter text-typography_heading_white hidden lg:flex items-center gap-2 ">
            <Icon icon="login-icon" iconHeight={18} iconWidth={18} />
            Login
          </Link>
          <Button
            label="Contact Us"
            variant="cta-button"
            onClick={() => toggleFunc('Contact Us')}
            otherClasses="hidden lg:block"
          />
          <button onClick={() => activeFunc(active)} className="lg:hidden">
            <Icon
              icon={active ? 'cancel-white-icon' : 'hamgurger-white'}
              iconWidth={24}
              iconHeight={24}
            />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
