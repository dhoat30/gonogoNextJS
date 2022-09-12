import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import ArrowDownIcon from "../../Icons/ArrowDownIcon";
function Navbar({allModulesData, allBlogData}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBlogMenu, setToggleBlogMenu] = useState(false)
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
        </li>

        <li>
          <Link href="/blogs" passHref className="has-submenu">
            <a >
              Blogs
            </a>
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
          padding: 20px 10px;
          display: block;
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
  position: absolute;
  width: 250px;
  top: 50px;
  background: var(--lightBlue);
  z-index: 20;
  box-shadow: var(--boxShadow);
  li {
    a {
      padding: 10px 20px;
      border-bottom: 1px solid var(--midGrey);
      width: 100%;
      display: block;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    position: static;
  }
`;