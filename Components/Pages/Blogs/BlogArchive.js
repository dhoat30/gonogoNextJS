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
        <Heading>Our Blogs</Heading>
        <FlexBox >
            {blogCards}
        </FlexBox> 
    </Section>
  )
}

export default BlogArchive
const Section = styled.section`
margin: 70px auto;
@media (max-width: 1100px) {
    padding: 50px 20px; 
  }
`
const Heading = styled.h1`
color: var(--blue); 
text-align: center; 
`
const FlexBox = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 50px 40px;
margin-top: 50px;
@media (max-width: 900px) {
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 600px) {
  grid-template-columns: 1fr;
}
`
const Card = styled.div`
width: 100%; 
cursor: pointer; 

`
const ImageContainer = styled.div`
position: relative; 
width: 100%; 
height: 300px; 
`
const Content = styled.div`
margin-top: 10px; 
h2{ 
    font-size: 1.3rem; 
    font-weight: 700; 
    line-height: 1.7rem; 
}
`