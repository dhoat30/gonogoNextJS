import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from 'next/link'
import Navbar from "./Navbar/Navbar";

function Header() {
  return (
    <section className="light-blue-bk">
      <div className="max-width">
        <DesktopHeader className="site-header">
          <NavContainer>
            <LogoContainer>
              <Link href="/" passHref>
                <a>
                <ImageStyle
                    src="http://test.webduel.co.nz/wp-content/uploads/2022/09/gonog-logo.png"
                    alt="logo"
                    layout="fill"
                  />
                </a>
              </Link>
            </LogoContainer>
            <Navbar/>
          </NavContainer>

          <a href="/book-a-demo" className="primary-btn">
            book a demo
          </a>
        </DesktopHeader>
        <MobileHeader className="site-header">
          <NavContainer>
            <LogoContainer>
              <Link href="/" passHref>
                <a>
                <ImageStyle
                    src="http://test.webduel.co.nz/wp-content/uploads/2022/09/gonog-logo.png"
                    alt="logo"
                    layout="fill"
                  />
                </a>
              </Link>
              
            </LogoContainer>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="18" y2="0.5" stroke="#053152"/>
              <path d="M0 6H18" stroke="#053152"/>
              <path d="M0 11H18" stroke="#053152"/>
            </svg>
            <Navbar/>
          </NavContainer>

          <a href="/book-a-demo" className="primary-btn">
            book a demo
          </a>
        </MobileHeader>
      </div>
     

    </section>
  );
}

export default Header;
const NavContainer = styled.div`
    display: flex; 
    align-items: center; 
`
const LogoContainer = styled.div`
  position: relative;
  width: 100px;
  height: 40.98px;
  top: 5px;
`;
const ImageStyle = styled(Image)``;

const DesktopHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  position: relative; 
  @media(max-width: 1000px){ 
    display: none; 
  }
`;
const MobileHeader = styled.div`
@media(min-width: 1000px){ 
  display: block; 
}
`
