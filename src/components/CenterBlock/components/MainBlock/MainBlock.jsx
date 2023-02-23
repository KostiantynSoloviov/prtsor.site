import styled from "styled-components";
import React from "react";

import { TagsBlock } from "./components/TagsBlock/TagsBlock";
import { MainCrdBlock } from "./components/MainCardBlock/MainCardBlock";

const StyledMainBlock = styled.div`
  height: 100%;
`;

function MainBlock() {
  return (
    <>
      <StyledMainBlock>
        <TagsBlock />
        <MainCrdBlock />
      </StyledMainBlock>
    </>
  );
}

export { MainBlock };
