import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
function Navbar({allModulesData}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const modulesSubmenu = allModulesData.map(data=> { 
    console.log(data)
    return ( 
      <li 
      key={data.id}
      onClick={() => setToggleMenu(false)}>
      <Link href="/modules/issues-ideas-incidents" passHref>
        <a dangerouslySetInnerHTML={{ __html: data.title.rendered }}/>
      </Link>
    </li>
    )
  })
  const clickHandler = (e) => {
    console.log(toggleMenu);
    e.preventDefault();
    setToggleMenu(toggleMenu ? false : true);
  };
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
              <Arrow>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6.375L6.36132 6.72061L6 7.09836L5.63868 6.72061L6 6.375ZM11.8613 0.970611L6.36132 6.72061L5.63868 6.02939L11.1387 0.279389L11.8613 0.970611ZM5.63868 6.72061L0.138679 0.970612L0.86132 0.279389L6.36132 6.02939L5.63868 6.72061Z"
                    fill="#053152"
                  />
                </svg>
              </Arrow>
            </a>
          </Link>
          <SubMenu toggleMenu={toggleMenu}>
            {
              modulesSubmenu
            }
            {/* <li onClick={() => setToggleMenu(false)}>
              <Link href="/modules/issues-ideas-incidents" passHref>
                <a>Issues, Ideas & Incidents</a>
              </Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link href="/modules/hazards-risks" passHref>
                <a>Hazards & Risks</a>
              </Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link href="/modules/project-planner" passHref>
                <a>Project Planner</a>
              </Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link href="/modules/meetings" passHref>
                <a>Meetings</a>
              </Link>
            </li>
            <li onClick={() => setToggleMenu(false)}>
              <Link href="/modules/more-solutions" passHref>
                <a>More Solutions</a>
              </Link>
            </li> */}
          </SubMenu>
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
      font-size: 0.8rem;
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
const Arrow = styled.span`
  margin: 0 0 0 5px;
`;
const SubMenu = styled.ul`
  position: absolute;
  width: 250px;
  top: 50px;
  background: var(--lightBlue);
  z-index: 20;
  box-shadow: var(--boxShadow);
  display: ${(props) => (props.toggleMenu ? "block" : "none")};
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
