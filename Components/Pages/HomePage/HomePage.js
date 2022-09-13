import React from "react";
import Hero from "../../UI/Hero/Hero";
import styled from "styled-components";
import Image from "next/image";
import Cloud from "../../UI/Cloud/Cloud";
import Features from "../../UI/Features/Features";
import Testimonial from "../../UI/Testimonial/Testimonial";
import StillThinkingTwoColumn from "../../UI/Videos/StillThinkingTwoColumn";
import ModulesFilters from "../../UI/Filters/ModulesFilters";

function HomePage({ homePageData, featuresData, testimonialsData, stillThinkingData, allModulesData }) {
  
  const cloudData = homePageData[0].acf.cloud_section
  // second and third section
  const twoColumnLayout = homePageData[0].acf.layout.map((data, index) => {
    let content = data.content.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "");
    return (
      <SecondSection key={index} imageAlignment={data.image_alignment}>
        <div className="max-width">
          <ImgContainer className="first-section-img">
            <ImageStyle
              src={data.images[0].image.url}
              alt="Safety Managment"
              layout="responsive"
              width="100%"
              height={(data.images[0].image.height / data.images[0].image.width) * 100}
            />
          </ImgContainer>
          <div className="first-section-text">
            <Heading3 dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </SecondSection>
      
    );
  });

  // main 
  return (
    <main>
      <Hero
        desktopImage={homePageData[0].acf.hero_image.desktop_hero_image}
        mobileImage={homePageData[0].acf.hero_image.mobile_hero_image}
        title={homePageData[0].acf.hero_content.title}
        subtitle={homePageData[0].acf.hero_content.subtitle}
        primaryButtonData={
          homePageData[0].acf.hero_content.primary_call_to_action
        }
        secondaryButtonData={
          homePageData[0].acf.hero_content.secondary_call_to_action
        }
      />
      {/* second column  */}
      {twoColumnLayout}
      <Cloud 
      title={cloudData.title}
      content={cloudData.content}
      link={cloudData.video_link}
      image={cloudData.image}
      /> 
      <ModulesFilters
      allModulesData={allModulesData}
      /> 
      {/* features  */}
      <Features featuresData={featuresData} /> 

        {/* about us */}
        <AboutSection id="about-us">
        <div className="max-width">
          <ImgContainer className="first-section-img">
            <ImageStyle className="img"
              src={homePageData[0].acf.about_us.image.url}
              alt="Craig Anderson"
              layout="fixed"
              width="300px"
              height="300px"
              objectFit="cover" 
            />
          </ImgContainer>
          <div className="first-section-text">
            <Heading3><strong>{homePageData[0].acf.about_us.title}</strong></Heading3>
            <div dangerouslySetInnerHTML={{ __html: homePageData[0].acf.about_us.content }}/> 
          </div>
        </div>
      </AboutSection>

      {/*  testimonial section */}
      <Testimonial testimonialsData={testimonialsData}/> 

      {/* still thinking  */}
      <StillThinkingTwoColumn stillThinkingData={stillThinkingData} /> 
    </main>
  );
}

export default HomePage;
const SecondSection = styled.section`

  background-color: ${(props) =>
    props.imageAlignment === "Right" && "var(--lightBlue);"};
  > div {
    display: flex;
    align-items: center;
    @media (max-width: 1000px) {
      justify-content: center; 
    }
    flex-wrap: wrap; 
    flex-direction: ${(props) =>
      props.imageAlignment === "Right" && "row-reverse"};
    > div {
      width: 50%;
      @media (max-width: 1000px) {
        width: 100%; 
      }
    }
  }
  padding-bottom: 70px;
`;
const ImgContainer = styled.div`
 
  display: block;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

`;
const Heading3 = styled.h3`
  color: var(--midGrey) !important;
  strong {
    color: var(--blue);
  }
  @media (max-width: 1000px) {
    text-align: center; 
  }
`;
const ImageStyle = styled(Image)`
 
`;
const AboutSection = styled.section`
  background-color: var(--lightBlue);
  > div {
    min-height: 70vh; 

    display: flex;
    align-items: center; 
  
    flex-wrap: wrap; 
 
    > div {
      
      width: 50%;
      @media (max-width: 1000px) {
        width: 100%; 
      }
    }
  }
  .first-section-text{ 
    padding-bottom: 40px; 
    @media(max-width: 1000px){ 
      h3{ 
        margin-top: 20px; 
      }
      p{ 
        text-align: center;   
      }
    }
   
  }
  .first-section-img{ 
    display: flex; 
    justify-content: center; 
    .img{ 
      border-radius: 50%; 
     
    }

  }
  padding: 70px 0;
`;