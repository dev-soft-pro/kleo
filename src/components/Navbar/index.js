import React, { useState } from 'react'
import LogoSVG from 'assets/images/logo.svg'

import './styles.scss'

export default function Navbar() {
  const menuList = [
    'Home',
    'How it works',
    'Our Lessons',
    'Testimonials',
    'Our Team',
    'Download App'
  ]
  const [currentMenu, setCurrentMenu] = useState('Home');

  return (
    <div className="navbar-wrapper">
      <img src={LogoSVG} alt="logo" />
      <ul className="menu-list">
        {menuList.map((menu, idx) => 
          <li
            key={`menu-${idx}`}
            className={`menu-item${currentMenu == menu ? ' active' : ''}`}
            onClick={e => setCurrentMenu(menu)} >
            {menu}
          </li>
        )}
      </ul>
    </div>
  )
}