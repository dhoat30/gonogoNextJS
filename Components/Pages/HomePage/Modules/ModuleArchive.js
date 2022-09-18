import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../../UI/Hero/Hero";
import Testimonials from "../../../UI/Testimonial/Testimonial";

function ModuleArchive({ allModulesData, pageData, testimonialsData }) {
  
  const blogCards = allModulesData.map((item) => {
    return (
      <Card key={item.id}>
        <ImageContainer>
          <Image
            src={item.acf.module_icon.url}
            layout="fixed"
            width="100px"
            height="100px"
            alt={item.title.rendered}
            objectFit="cover"
          />
        </ImageContainer>
        <Content>
          <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          <p>{item.acf.hero_section.subtitle}</p>
          <Link href={`/modules/${item.slug}`}>
            <a>Explore</a>
          </Link>
        </Content>
      </Card>
    );
  });
  return (
    <>
      <Hero
        desktopImage={pageData.acf.hero_section.desktop_image.url}
        title={pageData.acf.hero_section.title}
        subtitle={pageData.acf.hero_section.subtitle}
        primaryButtonData={pageData.acf.hero_section.primary_call_to_action}
        secondaryButtonData={pageData.acf.hero_section.secondary_call_to_action}
      />
      <Section className="max-width">
        <Heading>All Modules</Heading>
        <FlexBox>{blogCards}</FlexBox>
      </Section>
      <Testimonials testimonialsData={testimonialsData} />
    </>
  );
}

export default ModuleArchive;
const Section = styled.section`
  margin: 70px auto 100px auto;

  @media (max-width: 1000px) {
    margin: 70px 10px;
    padding: 50px 20px;
  }
`;
const Heading = styled.h1`
  color: var(--blue);
`;
const FlexBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px 40px;
  margin-top: 50px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  width: 100%;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;
const Content = styled.div`
  margin-top: 10px;
  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.7rem;
  }
  a {
    cursor: pointer; 
    color: var(--yellow);
    text-decoration: underline;
    font-size: 0.8rem;
    margin-top: 10px;
    display: block;
    &:hover {
      color: var(--darkYellow);
    }
  }
`;
