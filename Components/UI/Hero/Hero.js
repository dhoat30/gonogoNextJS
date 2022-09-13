import React, {useState, useEffect, useContext} from 'react'

import PrimaryAnchor from "../Anchor/PrimaryAnchor";
import SecondaryAnchor from "../Anchor/SecondaryAnchor";
import styled from "styled-components";
import BgImage from "../Images/BgImage";
import VideoContext from '../../../Store/video-context';
import Image from 'next/image';
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Hero({
  desktopImage,
  mobileImage,
  title,
  subtitle,
  primaryButtonData,
  secondaryButtonData,
}) {

  
  const [width, setWidth] = useState();
  const [height, setheight] = useState();
  
  const videoCtx = useContext(VideoContext)
  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }
    handleResize() 
    // window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    
  }, []);
  return (
    <HeroContainer className="hero-section" width={width} height={`${height}px`}>
      {/* <BgImage 
      mobileImage={mobileImage}
      desktopImage={desktopImage}/>  */}
      <ImageStyle
      src={desktopImage}
      layout="fill"
      objectFit="cover"
      /> 
      <div className="hero-text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <HeroBtnContainer >
            <PrimaryAnchor
              link="/contact-us"
              text={primaryButtonData.text}
            />
            <SecondaryAnchor
            onClick={()=>  videoCtx.getVideoModal(true)}
              icon="videoIcon"
              link={secondaryButtonData.link}
              text={secondaryButtonData.text}
            />
        </HeroBtnContainer>
      </div>
    </HeroContainer>
  );
}

export default Hero;
const HeroContainer = styled.div`
overflow: hidden;

position: relative;
display: flex; 
justify-content: center; 
align-items:center; 
height:95vh; 
width: 100%; 
text-align: center; 

`;
const ImageStyle = styled(Image)``
const HeroBtnContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
margin-top: 20px;
flex-wrap: wrap; 
`

