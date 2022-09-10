import React from 'react'
import styled from "styled-components";

function Form() {
  return (
    <FormStyle action="" className="box-shadow">
    <TwoColumn>
      <div>
        <label for="given-name">First name* </label>
        <input type="text" id="given-name" name="given-name" required />
      </div>

      <div>
        <label for="">Last name* </label>
        <input type="text" name="family-name" required />
      </div>
    </TwoColumn>
    <TwoColumn>
      <div>
        <label for="email">Email* </label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label for="tel">Phone Number* </label>
        <input type="tel" name="tel" id="tel" required />
      </div>
    </TwoColumn>
    <TwoColumn>
      <div>
        <label for="organization">Company Name </label>
        <input type="text" name="organization" id="organization" />
      </div>
      <div>
        <label for="">Best contact time? </label>
        <input
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
        />
      </div>
    </TwoColumn>

    <div>
      <label for="message">Message </label>
      <textarea name="message"></textarea>
    </div>

    <div className="book-demo-btn">
      <button className="primary-btn" type="submit">
        book a demo
      </button>
    </div>
  </FormStyle>
  )
}

export default Form
const FormStyle = styled.form`
  background: white;
  width: 100%;
  max-width: 600px;
  label {
    font-size: 0.8rem;
    color: var(--blue);
    text-align: left;
  }
  textarea{ 
    font-size: 0.8rem;
    color: var(--blue);
    margin-top: 5px;
    width: 100%;
    padding: 5px 5px;
    border-radius: 0 !important;
    border: 1px solid rgba(224, 224, 224, 1);
    height: 100px; 
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px var(--blue);
    }
  }
  .book-demo-btn{ 
    margin: 20px 0;
    display: flex; 
    justify-content: center;  
  }
`;
const TwoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
  @media(max-width: 500px){ 
    flex-direction: column; 
  }
  div {
    width: 100%;
  }

  input {
    font-size: 0.8rem;
    color: var(--blue);
    margin-top: 5px;
    width: 100%;
    padding: 7px 5px;
    border-radius: 0 !important;
    border: 1px solid rgba(224, 224, 224, 1);
    &:focus {
      outline: none;
      box-shadow: 0px 0px 2px var(--blue);
    }
 
  }
  #meeting-time{ 
    padding-bottom: 5px !important; 
}
`;
