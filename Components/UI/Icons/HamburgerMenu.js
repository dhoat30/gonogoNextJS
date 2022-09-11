import React from 'react'

function HamburgerMenu({className, clickHandler}) {
  return (
    <svg onClick={clickHandler} className={className} width="35" height="21" viewBox="0 0 35 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="1" x2="34.8923" y2="1" stroke="#053152" stroke-width="2"/>
    <path d="M0 10.3086H34.8923" stroke="#053152" stroke-width="2"/>
    <path d="M0 20H34.8923" stroke="#053152" stroke-width="2"/>
    </svg>
  )
}

export default HamburgerMenu