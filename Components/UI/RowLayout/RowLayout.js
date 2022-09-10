import React from "react";
import styled from "styled-components";
import Image from "next/image";
function RowLayout({ title, content, images }) {
  return (
    <Section>
      <FlexBox className="max-width">
        <div>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
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
  background-color: var(--lightBlue);
  padding: 70px 0 300px 0;
  margin-bottom: 350px;
  text-align: center;
  position: relative;
  @media (max-width: 600px) {
    padding-bottom: calc(400px - 5%);
  }
  @media (max-width: 500px) {
    margin-bottom: 0;
    padding: 40px 0 40px 0;
  }
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
`;

const ImageContainer = styled.div`
  display: block;
  max-width: 700px;
  width: 100%;
  margin: 20px auto;
  position: absolute;
  bottom: -230px;
  @media (max-width: 500px) {
    position: static;
    bottom: 0;
  }
`;
