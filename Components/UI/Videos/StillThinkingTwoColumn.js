import React from 'react'
import YoutubeVideo from './YoutubeVideo'
import styled from 'styled-components'
import PrimaryAnchor from '../Anchor/PrimaryAnchor'
function StillThinkingTwoColumn({stillThinkingData}) {
    console.log(stillThinkingData)
  return (
    <Section className="still-thinking">
      <FlexBox className="max-width">
        <VideoContainer className="still-thinking-img">
             <YoutubeVideo
                thumbnail={stillThinkingData.acf.video_thumbnail}
                videoID ={stillThinkingData.acf.video_id}
             />
            {/* <svg width="133" height="133" viewBox="0 0 133 133" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="66.0371" cy="66.6914" r="66" fill="#FF9734"/>
               <path d="M90.5371 63.5933C92.5371 64.748 92.5371 67.6348 90.5371 68.7895L55.2871 89.1411C53.2871 90.2958 50.7871 88.8524 50.7871 86.543V45.8398C50.7871 43.5304 53.2871 42.087 55.2871 43.2417L90.5371 63.5933Z" fill="white"/>
            </svg> */}
        </VideoContainer>
        <ContentContainer className="still-thinking-text">
            <h3>{stillThinkingData.title.rendered}</h3>
            <div dangerouslySetInnerHTML={{ __html: stillThinkingData.content.rendered }}/>

            <div className="still-thinking-btn">
                    <PrimaryAnchor 
                    link="/book-a-demo"
                    text="BOOK A DEMO"
                    /> 
            
            </div>
        </ContentContainer>
      </FlexBox>
   </Section>
  
  )
}

export default StillThinkingTwoColumn
const Section = styled.section`
padding: 70px 0;
 
`
const FlexBox = styled.div`
display: flex; 
justify-content: space-around;
align-items: center; 
gap: 20px; 

@media(max-width: 1150px){ 
    flex-direction: column; 

}
`
const VideoContainer = styled.div`
width: 45%; 
@media(max-width: 1150px){ 
    width: 100%; 
    max-width: 640px;
}
`
const ContentContainer = styled.div`
width: 40%; 
 
@media(max-width: 1150px){ 
    width: 100%; 
    max-width: 640px;
}
.still-thinking-btn{ 
    margin-top: 20px; 
}
`

