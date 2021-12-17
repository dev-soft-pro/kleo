import React, { useEffect, useState } from 'react'
import './styles.scss'
export default function Hamburger(props) {
  const [status, updateStatus] = useState(false);
  useEffect(() => {
    updateStatus(props.status)
  }, [props.status])
  return (
    <div id="nav-icon3" className={status ? 'open' : ''} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}