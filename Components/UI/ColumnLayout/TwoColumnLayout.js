import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
function TwoColumnLayout({title, content, images, dangerouslySetInnerHTML}) {
  console.log(images)
  const imagesBox = images.map(imgData=> { 
      return (
        <ImageContainer key={imgData.image.id}>
          <ImageStyle src={imgData.image.url} layout="responsive" alt={title} width="100%" height={`${(imgData.image.height/imgData.image.width*100)}`}/> 
        </ImageContainer> 
      )
  })  
  return (
    <Section>
    <div className="max-width">
       <ImagesContainer>
          {imagesBox}
       </ImagesContainer>
       <ContentBox>
             <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: content }}/>
       </ContentBox>
    </div>
 </Section>
  )
}

export default TwoColumnLayout
const Section = styled.section`
margin: 70px 0; 
>div{ 
  display: flex; 
justify-content: space-between; 
align-items: center; 
@media(max-width: 800px){ 
  flex-wrap: wrap-reverse; 
}
}

`
const ImagesContainer = styled.div`
  width: 50%; 
  @media(max-width: 800px){ 
    width: 100%; 
    margin-top: 30px; 
  }
`
const ImageContainer = styled.div`
display: block; 
width: 100%;
`

const ImageStyle = styled(Image)``

const ContentBox = styled.div`
width: 40%;
@media(max-width: 800px){ 
  width: 100%; 
}
`
const Content = styled.p`

`