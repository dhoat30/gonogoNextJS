import React from 'react'
import styled from 'styled-components'
function HamburgerMenu({className, clickHandler}) {
  return (
    <SvgContainer>
    <Svg onClick={clickHandler} className={className} width="35" height="21" viewBox="0 0 35 21" fill="none">
    <line y1="1" x2="34.8923" y2="1" stroke="#053152" strokeWidth="2"/>
    <path d="M0 10.3086H34.8923" stroke="#053152" strokeWidth="2"/>
    <path d="M0 20H34.8923" stroke="#053152" strokeWidth="2"/>
    </Svg>
    </SvgContainer>
  )
}

export default HamburgerMenu

const Svg = styled.svg`

`
const SvgContainer = styled.div`
width: 80px; 
`