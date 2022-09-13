import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
function BlogArchive({allBlogData}) {
    const blogCards = allBlogData.map(item=>{ 
        return (
            <Card key={item.id}>
                <Link href={`/blogs/${item.slug}`}>
                    <div>
                <ImageContainer>
                    <Image
                    src={item.acf.hero_image.url}
                    layout="fill"
                    alt={item.title.rendered}
                    objectFit="cover"
                    /> 
                </ImageContainer>
                <Content>
                    <h2>{item.title.rendered} </h2>
                    <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}/>
                </Content>
                </div>
                </Link>
            </Card>
        )
    })
  return (
    <Section className="max-width box-shadow">
        <Heading>Our Blog</Heading>
        <FlexBox >
            {blogCards}
        </FlexBox> 
    </Section>
  )
}

export default BlogArchive
const Section = styled.section`
margin: 70px auto;

`
const Heading = styled.h1`
color: var(--blue); 
text-align: center; 
`
const FlexBox = styled.div`
display: flex; 
justify-content: center; 
gap: 20px; 
margin-top: 50px; 
`
const Card = styled.div`
width: 50%; 
`
const ImageContainer = styled.div`
position: relative; 
width: 100%; 
height: 400px; 
`
const Content = styled.div`
margin-top: 10px; 
h2{ 
    font-size: 1.3rem; 
    font-weight: 700; 
    line-height: 1.7rem; 
}
`