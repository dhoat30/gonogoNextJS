import React from "react";
import VideoIcon from '../Icons/VideoIcon'
import styled from "styled-components";
import Link from 'next/link'
function SecondaryAnchor({ text, link, icon }) {
  return (
    <>
    {icon === "videoIcon" ? 
    <button className="secondary-btn"><VideoIconStyle/>{text} </button>
    : 
    <Link href={link} passHref>
        <a  className="secondary-btn">
          
         {text}
       </a>
       </Link>
}
   
    </>
   
   
  );
}

export default SecondaryAnchor;

const VideoIconStyle = styled(VideoIcon) `
width: 20px; 
height: 20px; 
margin-right: 5px;
`