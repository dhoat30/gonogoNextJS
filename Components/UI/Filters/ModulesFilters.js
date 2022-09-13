import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link'
function ModulesFilters({ allModulesData }) {
    const reverseModuleArr = allModulesData.reverse()

  const [activeModuleID, setActiveModuleID] = useState(reverseModuleArr[0].id);
  useEffect(() => {}, []);
  const moduleCard = reverseModuleArr.map((data, index) => {
    console.log(activeModuleID)
    if (data.slug !== "more-solutions" && index < 3) {
      return (
        <Card 
        key={data.id} 
        className={`${activeModuleID === data.id && "active"}`}
        onClick={()=> setActiveModuleID(data.id)}
        >
          <div className="image-container">
            {data.acf.module_icon && (
              <Image
                src={data.acf.module_icon.url}
                layout="fixed"
                width="70px"
                height="70px"
              />
            )}
          </div>
          <div className="content">
            <h4>{data.acf.hero_section.title} </h4>
            <p>{data.acf.hero_section.subtitle}</p>
                <Link href={`/modules/${data.slug}`} passHref>
                    <a>Learn more</a>
                </Link>
          </div>
        </Card>
      );
    }
  });

  const activeModuleImageData = reverseModuleArr.filter(data => data.id === activeModuleID)
  return (
    <Section>
      <div className="container max-width">
        <h3>Workplace Health & Safety Solutions</h3>
        <FlexBox >
            <ModuleCardsContainer>
            {moduleCard}
                <Link href="/modules" passHref>
                    <a className="secondary-btn">View All</a>
                </Link>
            </ModuleCardsContainer> 
            <div className="module-image-container"> 
                <Image
                    src={activeModuleImageData[0].acf.module_image.url}
                    layout="responsive"
                    width="100%"
                    height={(activeModuleImageData[0].acf.module_image.height / activeModuleImageData[0].acf.module_image.width) * 100}
                /> 
            </div>
            </FlexBox>
      </div>
    </Section>
  );
}

export default ModulesFilters;

const Section = styled.section`
background: var(--lightBlue);
padding: 70px 0;
`;
const FlexBox = styled.div`
margin-top: 30px; 
display: flex; 
justify-content: space-between;
align-items: center;
flex-wrap: wrap-reverse; 
.active{ 
    background: var(--blue);
    h4{ 
        color: white; 
    }
    p{ 
        color: white; 
    }
}
.module-image-container{ 
    @media(max-width: 900px){ 
        width: 100%; 
        margin: 20px auto 40px auto; 
        max-width: 500px; 
     
    }
    width: 45%; 
}
`;
const ModuleCardsContainer =styled.div`
width: 45%; 
@media(max-width: 900px){ 
    width: 100%; 
}
`
const Card = styled.div`
cursor: pointer; 
  display: flex;
  margin: 0 0 20px 0 ;
  padding: 20px 10px;  
  width: 100%;
    background: white; 
    .image-container{ 
        margin-right: 20px; 
    }
    .content{ 
        a{ 
            font-size: 0.8rem; 
            text-decoration: underline; 
            color: var(--yellow);
        }
    }
   
  `;
