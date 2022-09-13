import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import ArrowDownIcon from "../../Icons/ArrowDownIcon";
import Image from 'next/image'
import { useRouter } from "next/router";

function Navbar({allModulesData, allBlogData}) {
  const router = useRouter();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBlogMenu, setToggleBlogMenu] = useState(false)
  if(!allModulesData){ 
    return
  }
  // module menu
  const desktopSubMenu = allModulesData.map(data=> { 
    return ( 
      <li 
      key={data.id}>
         <Image src={data.acf.module_icon.url}
          layout="fixed"
          width="40px"
          height="40px"
        /> 
      <Link href={`/modules/${data.slug}`} passHref>
       
       
        <a dangerouslySetInnerHTML={{ __html: data.title.rendered }}
        onClick={() => setToggleMenu(false)}
        />
      
      </Link>
    </li>
    )
  })
  // module menu
  const modulesSubmenu = allModulesData.map(data=> { 
    return ( 
      <li 
      key={data.id}
      onClick={() => setToggleMenu(false)}>
      <Link href={`/modules/${data.slug}`} passHref>
        <a dangerouslySetInnerHTML={{ __html: data.title.rendered }}/>
      </Link>
    </li>
    )
  })


  
  const clickHandler = (e) => {
    e.preventDefault();
    setToggleMenu(toggleMenu ? false : true);
  };

  const blogClickHandler =( e)=>{ 
    e.preventDefault();
    setToggleBlogMenu(toggleMenu ? false : true);
  }
  return (
    <Nav className="top-nav">
      <ul>
        <li>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/contact-us" passHref className="has-submenu">
            <a onClick={clickHandler}>
              Modules
              <ArrowDownIconStyle/>
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

        <li>
          <Link href="/blogs" passHref className="has-submenu">
            <a >
              Blogs
            </a>
          </Link>
     
        </li>
        <li>
          <Link href="/#about-us" passHref>
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contact-us" passHref>
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </Nav>
  );
}

export default Navbar;
const Nav = styled.nav`
  width: 500px;
  margin-left: 80px;
  ul {
    list-style: none;
    a {
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
  }
  @media (max-width: 1000px) {
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 20;
    background: var(--lightBlue);
    width: 100%;
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
          border-bottom: 1px solid var(--blue);
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
    a {
      padding: 20px 20px;
      border-bottom: 1px solid var(--midGrey);
      width: 100%;
      display: block;
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
  position: absolute; 
  background: var(--lightBlue);
  width: 100%;
  top: 60px; 
  left: 0;
  z-index: 1;  
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: center;  
  height: 200px;
  li{ 
    width: 300px;
    padding: 20px;  
    display: flex; 
    align-items: center; 
    cursor: pointer; 
    a{ 
     margin-left: 10px;
    }
  }
`