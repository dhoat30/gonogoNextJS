import React from "react";
import YoutubeVideo from "./YoutubeVideo";
import styled from "styled-components";
import PrimaryAnchor from "../Anchor/PrimaryAnchor";
import VideoTrigger from "./VideoTrigger";
function StillThinkingTwoColumn({ stillThinkingData }) {
  return (
    <Section className="still-thinking">
      <FlexBox className="max-width">
        <VideoContainer className="still-thinking-img">
          <VideoTrigger thumbnail={stillThinkingData.acf.video_thumbnail} />
        </VideoContainer>
        <ContentContainer className="still-thinking-text">
          <h3>{stillThinkingData.title.rendered}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: stillThinkingData.content.rendered,
            }}
          />

          <div className="still-thinking-btn">
            <PrimaryAnchor link="/book-a-demo" text="BOOK A DEMO" />
          </div>
        </ContentContainer>
      </FlexBox>
    </Section>
  );
}

export default StillThinkingTwoColumn;
const Section = styled.section`
  padding: 70px 0;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
const VideoContainer = styled.div`
  width: 45%;
  @media (max-width: 1150px) {
    width: 100%;
    max-width: 640px;
  }
`;
const ContentContainer = styled.div`
  width: 40%;

  @media (max-width: 1150px) {
    width: 100%;
    max-width: 640px;
  }
  .still-thinking-btn {
    margin-top: 20px;
  }
`;
