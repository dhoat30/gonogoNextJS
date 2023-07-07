import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
function FooterLinkColumn({ slug, title }) {

  return (
    <li>
      <Link legacyBehavior href={slug} passHref>
        <AnchorStyle dangerouslySetInnerHTML={{ __html: title }} />
      </Link>
    </li>
  )
}

export default FooterLinkColumn
const AnchorStyle = styled.a`
padding: 5px 0;
font-size: 0.8rem !important;
`