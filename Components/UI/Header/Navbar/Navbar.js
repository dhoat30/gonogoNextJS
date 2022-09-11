import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
<nav className="top-nav">
  <ul>
   <li>
    <Link href="/contact-us" passHref>
    <a>
        Contact Us
    </a>
    </Link>
   </li>
  </ul>
</nav>
  )
}

export default Navbar