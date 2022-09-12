import React from 'react'
import YoutubeVideo from './YoutubeVideo'
import styled from 'styled-components'
import PrimaryAnchor from '../Anchor/PrimaryAnchor'
import VideoTrigger from './VideoTrigger'
function Still({stillThinkingData}) {
  return (
    <Section className="still-thinking">
      <FlexBox className="max-width">
        <VideoContainer className="still-thinking-img">
          <VideoTrigger thumbnail={stillThinkingData.acf.video_thumbnail}/> 
        </VideoContainer>
        <ContentContainer className="still-thinking-text">
            <h3>Still Thinking?</h3>
            <p>Experience the software for yourself with a personalised demo tailored to your organisation&apos;s specific health and safety needs.</p>
            <div className="still-thinking-btn">
                <PrimaryAnchor 
                link="/"
                text="BOOK A DEMO"
                /> 
            </div>
        </ContentContainer>
      </FlexBox>
   </Section>
  
  )
}

export default Still
const Section = styled.section`
padding: 70px 0;
display: flex; 
justify-content: center; 
text-align:center; 
background: var(--lightBlue); 
`
const FlexBox = styled.div`
max-width: 640px;

`
const VideoContainer = styled.div`

`
const ContentContainer = styled.div`
    margin: 20px auto 0 auto;
    max-width: 800px;
.still-thinking-btn{ 
    margin-top: 20px; 
}
`

