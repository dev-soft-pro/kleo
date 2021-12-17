import React, { useState } from 'react'
import {Link} from 'react-scroll'
import LogoSVG from 'assets/images/logo.svg'

import './styles.scss'

export default function Navbar() {
  const menuList = [
    {id: 'home', label: 'Home'},
    {id: 'howto', label: 'How it works'},
    {id: 'lessons', label: 'Our Lessons'},
    {id: 'test', label: 'Testimonials'},
    {id: 'team', label: 'Our Team'},
    {id: 'download', label: 'Download App'}
  ]
  const [currentMenu, setCurrentMenu] = useState('home');

  return (
    <div className="navbar-wrapper">
      <img src={LogoSVG} alt="logo" />
      <ul className="menu-list">
        {menuList.map((menu, idx) => 
          <li
            key={`menu-${idx}`}
            className={`menu-item${currentMenu == menu.id ? ' active' : ''}`}
            // onClick={e => setCurrentMenu(menu.id)} 
            >
            <Link
              activeClass="active"
              to={menu.id}
              spy={true}
              smooth={true}
              onClick={e => setCurrentMenu(menu.id)} >
              {menu.label}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}