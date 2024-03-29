import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import ArrowDownIcon from "../../Icons/ArrowDownIcon";
import Image from 'next/image'

function Navbar({ allModulesData, allBlogData, onClick }) {

  const [toggleMenu, setToggleMenu] = useState(false);
  // const [toggleBlogMenu, setToggleBlogMenu] = useState(false)

  if (!allModulesData) {
    return
  }
  // module menu
  const desktopSubMenu = allModulesData.map(data => {
    // console.log(data.title.rendered)
    return (
      <li
        key={data.id}>

        <Link legacyBehavior href={`/modules/${data.slug}`} passHref>
          <a onClick={() => setToggleMenu(false)}>
            <Image src={data.acf.module_icon.url}
              layout="fixed"
              width="40"
              height="40"
              alt={data.title.rendered}
            />
            <span dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
          </a>

        </Link>
      </li>
    )
  })
  // module menu
  const modulesSubmenu = allModulesData.map(data => {
    return (
      <li
        key={data.id}
        onClick={onClick}>
        <Link legacyBehavior href={`/modules/${data.slug}`} passHref>
          <a dangerouslySetInnerHTML={{ __html: data.title.rendered }}
            onClick={() => setToggleMenu(false)}
          />
        </Link>
      </li>
    )
  })



  const clickHandler = (e) => {
    e.preventDefault();
    setToggleMenu(toggleMenu ? false : true);
  };

  const onMouseLeaveHandler = () => {
    // const timer = setTimeout(()=> { 
    //   console.log('Initial timeout!')
    // } , 2000);
    // clearTimeout(timer);
    setToggleMenu(false)
    //   setTimeout(() => {
    //     console.log("changing state ")
    //     setToggleMenu(false)
    // }, 1000)
  }
  return (
    <>
      <Nav className="top-nav" >
        <ul>
          <li onClick={onClick}>
            <Link legacyBehavior href="/" passHref>
              <a>Home</a>
            </Link>
          </li>

          <li onMouseEnter={() => setToggleMenu(true)} onMouseLeave={onMouseLeaveHandler}>
            <Link legacyBehavior href="/modules" passHref className="has-submenu">
              <a onClick={clickHandler}>
                Modules
                <ArrowDownIconStyle />
              </a>
            </Link>
            <SubMenu>
              {toggleMenu &&
                modulesSubmenu
              }

            </SubMenu>

            {toggleMenu &&
              <DesktopSubMenu>
                {desktopSubMenu}
              </DesktopSubMenu>
            }

          </li>

          <li onClick={onClick}>
            <Link legacyBehavior href="/blogs" passHref className="has-submenu">
              <a >
                Blogs
              </a>
            </Link>

          </li>
          <li onClick={onClick}>
            <Link legacyBehavior href="/#about-us" passHref>
              <a>About Us</a>
            </Link>
          </li>
          <li onClick={onClick}>
            <Link legacyBehavior href="/contact-us" passHref>
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/book-a-demo" passHref>
              <BookDemoStyle className="primary-btn">book a demo</BookDemoStyle>
            </Link>
          </li>
        </ul>

      </Nav>

    </>

  );
}

export default Navbar;
const Nav = styled.nav`
  width: 500px;
  margin-left: 80px;
  ul {
    list-style: none;
    a {
      padding: 0 10px;
      font-size: 0.9rem;
      color: var(--blue);
    }
  }
  > ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
 
  }
  li {
    padding: 20px 0; 
    @media(max-width: 1000px){ 
      padding: 0; 
    }
  }
  @media (max-width: 1000px) {
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 20;
    background: var(--lightBlue);
    width: calc(100% - 20px);

    margin-left: 10px;
    > ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-direction: column;
      > li {

        > a {
          display: block;
          padding: 20px 10px;
          border-bottom: 1px solid var(--lightGrey);
        }
      }
    }
  }
`;
const ArrowDownIconStyle = styled(ArrowDownIcon)`
  margin: 0 0 0 5px;
`;
const SubMenu = styled.ul`

display: none; 
  position: absolute;
  width: 250px;
  top: 50px;
  background: var(--lightBlue);
  z-index: 20;

  box-shadow: var(--boxShadow);
  li {
    background: var(--blue); 
    a {
      padding: 20px 20px;
      border-bottom: 1px solid var(--lightGrey);
      width: 100%;
      display: block;
      color: white; 
      &:hover{ 
        background: var(--blue); 
        color: white; 
      }
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    position: static;
    display: block;
  }
`;

const DesktopSubMenu = styled.ul`
@media(max-width: 1000px){ 
  display: none; 
}
  position: absolute; 
  background: var(--lightBlue);
  width: 100%;
  top: 40px; 
  left: 0;
  z-index: 1;  
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: center;  
  height: 250px;
  padding-bottom: 20px; 
  
  li{ 
    width: 300px;
    cursor: pointer; 
    padding: 0; 
    a{ 
      display: flex; 
      align-items: center; 
      padding: 20px 30px; 
     margin-left: 10px;
     span{ 
      margin-left: 10px; 
     }
    }
  }
`

const BookDemoStyle = styled.a`
display: block; 
width: 95%; 
max-width: 400px; 
margin: 10px auto; 
padding: 10px !important; 
border-bottom: none !important;
color: white !important; 
display: none; 
@media(max-width: 1000px){ 
  display: block; 
}
`