import React, {useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'
function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const clickHandler = (e)=> { 
        console.log(toggleMenu)
        e.preventDefault() 
        setToggleMenu(toggleMenu ? false : true)
    }
  return (
<Nav className="top-nav">
  <ul>
  <li>
    <Link href="/" passHref>
        <a>
            Home
        </a>
    </Link>
    
   </li>
  
   <li>
        <Link href="/contact-us" passHref className="has-submenu" >
            <a onClick={clickHandler}>
                Modules
                <Arrow><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6.375L6.36132 6.72061L6 7.09836L5.63868 6.72061L6 6.375ZM11.8613 0.970611L6.36132 6.72061L5.63868 6.02939L11.1387 0.279389L11.8613 0.970611ZM5.63868 6.72061L0.138679 0.970612L0.86132 0.279389L6.36132 6.02939L5.63868 6.72061Z" fill="#053152"/>
                </svg>
                </Arrow>
            </a>
        </Link>
        <SubMenu toggleMenu={toggleMenu}>
            <li>
                <Link href="/issues-ideas-incidents" passHref>
                    <a>
                        Issues, Ideas & Incidents
                    </a>
                </Link>
                <Link href="/hazards-risks" passHref>
                    <a>
                        Hazards & Risks
                    </a>
                </Link>
                <Link href="/meetings" passHref>
                    <a>
                       Meetings
                    </a>
                </Link>
            </li>
        </SubMenu>
       </li>
       
       <li>
        <Link href="/contact-us" passHref>
            <a>
                Contact Us
            </a>
        </Link>
    
       </li>
  </ul>
</Nav>
  )
}

export default Navbar
const Nav = styled.nav`
width: 500px; 
margin-left: 80px; 
ul{ 
    list-style: none ;
}
>ul{ 
    display: flex; 
    width: 100%;
    justify-content: space-between; 
    border: solid red; 
}
li{ 
}
    .has-submenu{ 

    }
`
const Arrow = styled.span`
margin: 0 0 0 5px; 
`
const SubMenu = styled.ul`
position: absolute; 
border: solid red; 
width: 250px; 
bottom: -110px;
background: var(--lightBlue); 
z-index: 20; 

display: ${props => props.toggleMenu ? 'block' : "none"}; 
li{ 
    a{ 
        padding: 10px 20px; 
        border-bottom: 1px solid var(--midGrey);
        width: 100%; 
        display: block; 
    }
}
`