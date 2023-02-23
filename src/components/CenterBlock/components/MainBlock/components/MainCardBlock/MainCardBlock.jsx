import styled from "styled-components";
import React from "react";
import { Card } from "./components/Card";

const StyledMainCrdBlock = styled.div``;

function MainCrdBlock() {
  return (
    <>
      <StyledMainCrdBlock>
        <Card />
      </StyledMainCrdBlock>
    </>
  );
}

export { MainCrdBlock };
