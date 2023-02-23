import styled from "styled-components";
import React from "react";

const StyledCard = styled.div`
  margin-top: 48px;
  width: 944px;
  height: 402px;
`;

const Card = () => {
  return (
    <>
      <StyledCard>
        <div class="image">
          <img src="image1.jpg" alt="" />
          <h2>
            A Movie in the Park:
            <br />
            Kung Fu Panda
          </h2>
        </div>
      </StyledCard>
    </>
  );
};

export { Card };
