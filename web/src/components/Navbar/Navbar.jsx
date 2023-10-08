import React, { useState } from 'react'
import clsx from 'clsx'
import './navbar.scss'
import Heading from '../Heading/Heading'

export const Navbar = ({ otherClasses, toggleFunc }) => {
  const navbarClasses = clsx(
    otherClasses,
    'w-full fixed top-0 left-0 z-20  px-5 lg:px-10 '
  )

  return (
    <nav className={navbarClasses} id="navbar" data-testid="navbar">
      <Heading type="h4" otherClasses="mt-[25px] text-black">
        Shakseyat
      </Heading>
      <input type="checkbox" id="active" />
      <label for="active" class="menu-btn">
        {/* <i class="fas fa-bars"></i> */}
        bars
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
