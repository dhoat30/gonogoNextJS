import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '../../../UI/Hero/Hero'
function ModuleArchive({allModulesData, pageData}) {
    console.log(pageData)
    const blogCards = allModulesData.reverse().map(item=>{ 
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
                    <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }}/>
                    <p>{item.acf.hero_section.subtitle}</p>
                    <Link href={`/modules/${item.slug}`}>
                        <a>
                            Learn more
                        </a>
                    </Link>
                </Content>
            </Card>
        )
    })
  return (
    <>
    <Hero
    desktopImage={pageData.acf.hero_section.desktop_image.url}
    title={pageData.acf.hero_section.title}
    subtitle={pageData.acf.hero_section.subtitle}
    primaryButtonData={
        pageData.acf.hero_section.primary_call_to_action
      }
      secondaryButtonData={
        pageData.acf.hero_section.secondary_call_to_action
      }
    /> 
        <Section className="max-width box-shadow">
        <Heading>All Modules</Heading>
        <FlexBox >
            {blogCards}
        </FlexBox> 
    </Section>
    </>

  )
}

export default ModuleArchive
const Section = styled.section`
margin: 70px auto;
    @media(max-width: 1000px){ 
        margin: 70px auto;

    }
`
const Heading = styled.h1`
color: var(--blue); 
text-align: center; 
`
const FlexBox = styled.div`
display: flex; 
justify-content: center; 
gap: 100px 40px; 
margin-top: 50px; 
flex-wrap: wrap;
`
const Card = styled.div`
width: 30%; 

`
const ImageContainer = styled.div`
position: relative; 
width: 100%; 
height: auto; 
`
const Content = styled.div`
margin-top: 10px; 
h2{ 
    font-size: 1.3rem; 
    font-weight: 700; 
    line-height: 1.7rem; 
}
a{ 
    color: var(--yellow);
    text-decoration: underline; 
    font-size: 0.8rem; 
    margin-top: 10px; 
    display: block; 
    &:hover { 
        color: var(--darkYellow);
    }
}
`