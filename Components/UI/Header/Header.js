import React, { useState, useContext } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";
import HamburgerMenu from "../Icons/HamburgerMenu";
import ContactInfoContext from "../../../Store/contact-info-context";
function Header() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const contactInfoCtx = useContext(ContactInfoContext)
  console.log(contactInfoCtx)
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
            <Navbar />
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

          {toggleMobileMenu && <Navbar />}

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
