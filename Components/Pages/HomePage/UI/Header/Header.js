import React from "react";
import Image from "next/image";
import styled from "styled-components";
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
            <nav className="top-nav">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                {/* <li><a href="/">Modules<span><Image src="http://test.webduel.co.nz/wp-content/uploads/2022/09/gonog-logo.png" alt="" layout='fill'/></span></a></li> */}
                <li>
                  <a href="/">Case Studies</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
                <li>
                  <a href="/">Testimonials</a>
                </li>
              </ul>
            </nav>
          </NavContainer>

          <a href="/" className="primary-btn">
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
