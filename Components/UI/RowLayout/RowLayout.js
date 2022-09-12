import React from "react";
import styled from "styled-components";
import Image from "next/image";
function RowLayout({ title, content, images }) {
  return (
    <Section>
      <FlexBox className="max-width">
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
padding: 70px 0;
background-color: var(--lightBlue);
  text-align: center;
  position: relative;

  @media (max-width: 500px) {

    padding: 40px 0 40px 0;
  }
`;
const FlexBox = styled.div`
  margin: 0 auto; 
  max-width: 1000px;
`;


const ContentBox = styled.div`

`
const ImageContainer = styled.div`
  display: block;
  max-width: 700px;
  width: 100%;
  margin: 40px auto 0 auto;

`;