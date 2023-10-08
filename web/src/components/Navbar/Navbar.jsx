import React, { useState } from 'react'
import clsx from 'clsx'
import './navbar.scss'
import Heading from '../Heading/Heading'
import Icon from '../Icon/Icon'

export const Navbar = ({ otherClasses, toggleFunc }) => {
  const navbarClasses = clsx(
    otherClasses,
    'w-full fixed top-0 left-0 z-20  px-5 lg:px-10 '
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
      <Heading type="h4" otherClasses="mt-[25px] text-black">
        Shakseyat
      </Heading>
      <input type="checkbox" id="active" onClick={handleToggle} />
      <label for="active" class="menu-btn">
        <div className='w-[50px] h-[50px] flex justify-center items-center'>
        <Icon icon="menubar" iconHeight={33} iconWidth={30} otherClasses={clsx("",(active)?"hidden":"block")}/>
        <Icon icon="crossbar" iconHeight={20} iconWidth={20} otherClasses={clsx("text-black",(!active)?"hidden":"block")} />
        </div>
        
      </label>
      <div class="wrapper">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Feedback</a>
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
