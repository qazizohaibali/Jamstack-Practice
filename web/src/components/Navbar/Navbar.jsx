import React, { useState } from 'react'
import clsx from 'clsx'
import './navbar.scss'
import Heading from '../Heading/Heading'
import Icon from '../Icon/Icon'
import TopBar from '../TopBar/TopBar'
import { Link } from 'gatsby'

export const Navbar = ({ otherClasses, toggleFunc }) => {
  const navbarClasses = clsx(
    otherClasses,
    'w-full fixed top-0 left-0 z-20  lg:px-[70px] px-4 '
  )

const [active,setActive] = useState(false)

 const handleToggle = ()=>{
  if(active){
    setActive(false)
  }else{
    setActive(true)
  }
 }

  return (
    <nav className={navbarClasses} id="navbar" data-testid="navbar">
      <Heading type="h2" otherClasses="mt-[25px] text-white">
        <Link to='/'>Shakseyat</Link>
      </Heading>
      <input type="checkbox" id="active" onClick={handleToggle} className=''/>
      <label for="active" class="menu-btn">
        <div className='w-[50px] h-[50px] flex justify-center items-center '>
        <Icon icon="menubar" iconHeight={33} iconWidth={30} otherClasses={clsx("",(active)?"hidden":"block")}/>
        <Icon icon="crossbar" iconHeight={20} iconWidth={20} otherClasses={clsx("text-black",(!active)?"hidden":"block")} />
        </div>
        
      </label>
      <div class="wrapper">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/profile-hub">Our Team</Link>
          </li>
        </ul>
      </div>
      {/* <div class="content mt-[120px]">
        <div class="title">Fullscreen Overlay Navigation Bar</div>
        <p>using only HTML & CSS</p>
      </div> */}
    </nav>
  )
}

export default Navbar
