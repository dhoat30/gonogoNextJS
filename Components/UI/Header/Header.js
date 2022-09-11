import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from 'next/link'
import Navbar from "./Navbar/Navbar";

function Header() {
  return (
    <section className="light-blue-bk">
      <div className="max-width">
        <HeaderStyle className="site-header">
          <NavContainer>
            <LogoContainer>
              <ImageStyle
                src="http://test.webduel.co.nz/wp-content/uploads/2022/09/gonog-logo.png"
                alt="logo"
                layout="fill"
              />
            </LogoContainer>
            <Navbar/>
          </NavContainer>

          <a href="/book-a-demo" className="primary-btn">
            book a demo
          </a>
        </HeaderStyle>
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

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
