import styled from "styled-components";
import React from "react";
import { Outlet } from "react-router-dom";

import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";

const StyledCentreBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

function CentreBlock() {
  return (
    <>
      <StyledCentreBlock>
        <ButtonGroup />
        <Outlet />
      </StyledCentreBlock>
    </>
  );
}

export { CentreBlock };
