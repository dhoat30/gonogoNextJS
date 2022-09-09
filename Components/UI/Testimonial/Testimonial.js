import React from "react";
import SingleTestimonial from "./SingleTestimonial/SingleTestimonial";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import ArrowIcon from "../Icons/ArrowIcon";
function Testimonial({ testimonialsData }) {
  const singleTestimonial = testimonialsData.map((data, index) => {
    return (
      <SingleTestimonial
        key={index}
        title={data.title.rendered}
        designation={data.acf.designation}
        content={data.content.rendered}
        imageData={data.acf.image}
      />
    );
  });

  //   styles
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };

  const indicatorStyles = {
    background: "#fff",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
  };

  return (
    <Section className="testimonial-section">
      <Carousel
      showStatus={false}
        renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <ButtonStyle
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, right: 15 }}
              >
                <ArrowIconNextStyle/> 
              </ButtonStyle>
            )
          }
          renderArrowPrev={(onClickHandler, hasNext, label) =>
            hasNext && (
              <ButtonStyle
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, left: 15 }}
              >
                <ArrowIconStyle/> 
              </ButtonStyle>
            )
          }
        showThumbs={false}
        showArrows={true}
        autoPlay={true}
      >
        {singleTestimonial}
      </Carousel>
    </Section>
  );
}

export default Testimonial;
//  style="transform: rotate(180deg);"

const Section = styled.section`
  padding: 70px 0;
  display: flex;
  justify-content: center;
   
  .carousel { 
    overflow: visible !important; 
  }
  p{ 
    @media(max-width: 600px){ 
        font-size: 0.8rem; 
    
      }  
  }
`;
const ButtonStyle = styled.button`
background: none; 
border: none ;
`
const ArrowIconStyle = styled(ArrowIcon)`
transform: rotate(180deg);
  position: relative; 
  left: -60px; 
  @media(max-width: 600px){ 
    left: -25px; 

  } 
`
const ArrowIconNextStyle = styled(ArrowIcon)`
  position: relative; 
  right: -60px; 
  @media(max-width: 600px){ 
    right: -15px; 

  } 
`