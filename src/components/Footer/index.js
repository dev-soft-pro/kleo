import Select from 'react-select'
import React, { useState } from 'react'
import LogoSVG from 'assets/images/logo.svg'
import './styles.scss'

export default function Footer() {
  const options = [
    { value: 'EN', label: 'English' },
    { value: 'ES', label: 'Spanish' },
    { value: 'GR', label: 'German' },
    { value: 'IT', label: 'Italian' },
  ]
  const [currentOption, setCurrentOption] = useState({ value: 'EN', label: 'English' });
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={LogoSVG} alt="logo" />
        <div className="small-text copyright">
          Copyright @ 2021 Kleo. All rights reserved. <br/>
          Patent pending
        </div>
      </div>
      <div className="footer-right">
        <div className="select-wrapper">
          <div className="small-text select-label">Pick a language</div>
          <Select
            options={options}
            menuPlacement='top'
            value={currentOption}
            classNamePrefix="select-lang"
            onChange={v => setCurrentOption(v)} />
        </div>
        <div className="small-text underline">Legal stuff</div>
      </div>
    </footer>
  )
}