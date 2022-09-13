import React from 'react'
import VideoIcon from '../Icons/VideoIcon'
import styled from 'styled-components'
import Image from 'next/image'
function Cloud({title, content, link, image}) {
  return (
    <section className="third-section">
      <div className="container max-width">
         <div className="third-section-text">
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{__html: content}}/>
            <AnchorStyle href={link} >
                <VideoIconStyle/> 
                <span>watch a 9-min video</span>
            </AnchorStyle>
         </div>
         <div className="third-section-img">
           <Image src={image.url} alt={title ? title : content} layout="fixed" width="400px" height="250px"/>
         </div>
      </div>
   </section>
  )
}

export default Cloud
const VideoIconStyle = styled(VideoIcon)`
width: 20px; 
height: 20px ; 
fill: var(--blue) !important; 
circle{ 
    fill: var(--blue) !important; 
}
path{ 
    fill: var(--lightYellow);
}
`
const AnchorStyle = styled.a`
margin-top: 10px;
display: flex; 
align-items:center; 
color: var(--blue);
text-decoration: underline; 
gap: 5px;
`
// style="display: flex; gap: 7px; align-items: center;"
// style="font-weight: 600; font-size: 1.5rem; line-height: 36px; letter-spacing: 0.035em; color: #053152;"