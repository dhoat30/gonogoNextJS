import React from 'react'

function PrimaryAnchor({text, link}) {
  return (
    <a href={link} className="primary-btn">
              {text}
            </a>
  )
}

export default PrimaryAnchor