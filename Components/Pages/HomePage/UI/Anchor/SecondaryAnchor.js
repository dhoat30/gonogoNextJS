import React from "react";
import VideoIcon from '../Icons/VideoIcon'
import styled from "styled-components";
function SecondaryAnchor({ text, link, icon }) {
  return (
    <a href={link} className="secondary-btn">
       {icon === "videoIcon" &&  <VideoIconStyle/> }
      {text}
    </a>
  );
}

export default SecondaryAnchor;

const VideoIconStyle = styled(VideoIcon) `
width: 20px; 
height: 20px; 
margin-right: 5px;
`