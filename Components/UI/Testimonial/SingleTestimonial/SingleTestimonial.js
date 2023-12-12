import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
function SingleTestimonial({ title, designation, content, imageData }) {
  return (
    <Container>
      <div className="testimonial-img" style={{ width: imageData.sizes['medium-width'], height: imageData.sizes['medium-height'] }}>
        <Image
          src={imageData.url}
          alt={title}
          layout="fill"

        />
      </div>
      <div className="testimonial-text">
        <h5>{title}</h5>
        <h6>{designation} </h6>
        <div dangerouslySetInnerHTML={{ __html: content }} />

      </div>
    </Container>
  )
}

export default SingleTestimonial
const Container = styled.div`
.testimonial-img{ 
  position: relative ;
  
  margin: 0 auto 16px auto; 
 img{ 

 }
}
`