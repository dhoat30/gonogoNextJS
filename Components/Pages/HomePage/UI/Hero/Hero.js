import React, {useState, useEffect} from 'react'

import PrimaryAnchor from "../Anchor/PrimaryAnchor";
import SecondaryAnchor from "../Anchor/SecondaryAnchor";
import styled from "styled-components";
import BgImage from "../Images/BgImage";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  console.log(window)
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
    
  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    
  }, []);
  console.log(width)
  console.log(height)
  return (
    <HeroContainer className="hero-section" widht={width} height={height}>
      <BgImage 
      mobileImage={mobileImage}
      desktopImage={desktopImage}/> 
      <div className="hero-text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <HeroBtnContainer >
            <PrimaryAnchor
              link={primaryButtonData.link}
              text={primaryButtonData.text}
            />
            <SecondaryAnchor
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
position: relative;
display: flex; 
justify-content: center; 
align-items:center; 
height: calc(${props=> props.height && props.height}px - 90px) ; 
width: ${props=> props.width && props.width}px; 
text-align: center; 

`;
const HeroBtnContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
margin-top: 20px;
flex-wrap: wrap; 
`

