import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";
import HamburgerMenu from "../Icons/HamburgerMenu";
function Header({logo, allModulesData}) {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  return (
    <section className="light-blue-bk">
      <div className="max-width">
        <DesktopHeader className="site-header">
          <NavContainer>
            <LogoContainer>
              <Link href="/" passHref>
                <a>
                {logo &&
                  <ImageStyle
                    src={logo.url}
                    alt="GonoGo logo"
                    layout="fixed"
                    width="100px"
                    height="41px"
                  />
                }
                </a>
              </Link>
            </LogoContainer>
            <Navbar allModulesData={allModulesData}/>
          </NavContainer>
          <Link href="/book-a-demo" passHref>
            <a className="primary-btn">book a demo</a>
          </Link>
        </DesktopHeader>
        <MobileHeader className="site-header">
          <HamburgerMenu
            clickHandler={() =>
              setToggleMobileMenu(toggleMobileMenu ? false : true)
            }
          />

          <MobileLogoContainer>
            <Link href="/" passHref>
              <a>
                {logo &&
                  <ImageStyle
                  src={logo.url}
                  alt="GonoGo logo"
                  layout="fixed"
                  width="80px"
                  height="33px"
                />
                 }
              </a>
            </Link>
          </MobileLogoContainer>

          {toggleMobileMenu && <Navbar allModulesData={allModulesData}/>}

          <Link href="/book-a-demo" passHref>
            <a className="primary-btn">book a demo</a>
          </Link>
        </MobileHeader>
      </div>
    </section>
  );
}

export default Header;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;
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

  @media (max-width: 1000px) {
    display: none;
  }
`;
const MobileHeader = styled.div`
  display: none;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    display: flex;
  }
`;
const MobileLogoContainer = styled.div`
  position: relative;
  width: 80px;
  height: 40.98px;
  top: 5px;
`;