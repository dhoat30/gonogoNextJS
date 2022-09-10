import React from 'react'
import styled from "styled-components";

function JustText({content}) {
  return (
    <Section>
    <FlexBox className="max-width">
    
      
        <div dangerouslySetInnerHTML={{ __html: content }} />
    
    
    </FlexBox>
  </Section>
  )
}

export default JustText
const Section = styled.section`
  background-color: var(--lightBlue);
  padding: 70px 0 70px 0;
  text-align: center;

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
  h3{ 
    margin-bottom: 20px; 
    color: var(--midGrey);
    strong{ 
        color: var(--blue);
    }
  }
`;


