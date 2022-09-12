import React from "react";
import styled from "styled-components";
import Image from "next/image";
function RowLayout({ title, content, images }) {
  return (
    <Section>
      <FlexBox>
        <ContentBox>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </ContentBox>
        <ImageContainer className="box-shadow">
          {images[0] && (
            <Image
              src={images[0].image.url}
              layout="responsive"
              alt={title}
              width="100%"
              height={(images[0].image.height / images[0].image.width) * 100}
            />
          )}
        </ImageContainer>
      </FlexBox>
    </Section>
  );
}
// width={images[0].image.width} height={images[0].image.height}
export default RowLayout;
const Section = styled.section`


  text-align: center;
  position: relative;

  @media (max-width: 500px) {

    padding: 40px 0 40px 0;
  }
`;
const FlexBox = styled.div`


 
  margin: 0 auto; 
  border: solid red; 
  display: grid; 
  grid-template-columns:repeat(12, 1fr); 
  grid-template-rows:repeat(12, 100px); 
`;


const ContentBox = styled.div`
grid-column: 1/13;
grid-row: 1/6;
background-color: var(--lightBlue);
padding: 70px 0 150px 0;

`
const ImageContainer = styled.div`
  display: block;
  max-width: 700px;
  width: 100%;
  margin: 20px auto;
  grid-column: 1/13;
  grid-row: 5/12;
  padding: 20px !important; 
`;