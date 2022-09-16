import React from "react";
import styled from "styled-components";
function PrimaryButton({ cta, showLoader }) {
  return (
    <>
      <Button className={`${showLoader ? "ring-btn" : "primary-btn"}`}>
        {showLoader ? (
          <div className="button-ring">
            <span></span>
          </div>
        ) : (
          cta
        )}
      </Button>
    </>
  );
}

export default PrimaryButton;
const Button = styled.button`
transition: none; 
`;
