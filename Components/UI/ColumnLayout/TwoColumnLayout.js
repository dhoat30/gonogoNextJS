import React from 'react'
import styled from 'styled-components'
function TwoColumnLayout({title, content, images, dangerouslySetInnerHTML}) {
  return (
    <section className="first-section">
      {/* <div className="row-container">
        <div className="first-section-img">
            <img src="hello" alt=""/>
        </div>
        <div className="first-section-text">
            <Content dangerouslySetInnerHTML={{__html: content}}/> 
        </div>
      </div> */}
   </section>
  )
}

export default TwoColumnLayout

const Content = styled.p`

`