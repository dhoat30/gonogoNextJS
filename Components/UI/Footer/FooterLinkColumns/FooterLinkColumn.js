import React from 'react'

function FooterLinkColumn({slug, title}) {

  return (
    <li>
    <Link href={`/modules/${slug}`} passHref>
      <a dangerouslySetInnerHTML={{ __html: title }} />
    </Link>
  </li>
  )
}

export default FooterLinkColumn