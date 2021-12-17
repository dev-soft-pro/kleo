import React, { useState, useLayoutEffect } from 'react'
import {Link} from 'react-scroll'
import LogoSVG from 'assets/images/logo.svg'

import './styles.scss'
import Hamburger from 'components/Hamburger'

export default function Navbar() {
  const menuList = [
    {id: 'home', label: 'Home'},
    {id: 'howto', label: 'How it works'},
    {id: 'lessons', label: 'Our Lessons'},
    {id: 'test', label: 'Testimonials'},
    {id: 'team', label: 'Our Team'},
    {id: 'download', label: 'Download App'}
  ]

  const [size, setSize] = useState([0, 0]);
  const [currentMenu, setCurrentMenu] = useState('home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth > 640) {
        setShowMobileMenu(true);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleMobileMenu = () => {
    setShowMobileMenu(prev => !prev)
  }

  const handleClickMenu = (id) => {
    setCurrentMenu(id)
    if (size[0] <= 640)
      handleMobileMenu()
  }

  return (
    <div className="navbar-wrapper">
      <img src={LogoSVG} alt="logo" />
      <Hamburger status={showMobileMenu} onClick={handleMobileMenu} />
      <div className="menu-wrapper" style={{ display: showMobileMenu ? 'flex' : 'none' }}>
        <ul className="menu-list">
          {menuList.map((menu, idx) => 
            <li
              key={`menu-${idx}`}
              className={`menu-item${currentMenu == menu.id ? ' active' : ''}`}
              >
              <Link
                activeClass="active"
                to={menu.id}
                spy={true}
                smooth={true}
                onClick={e => handleClickMenu(menu.id)} >
                {menu.label}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}