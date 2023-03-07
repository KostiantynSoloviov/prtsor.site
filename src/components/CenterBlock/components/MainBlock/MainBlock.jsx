import styled from "styled-components";
import React from "react";

import { TagsBlock } from "./components/TagsBlock/TagsBlock";
import { MainCrdBlock } from "./components/MainCardBlock/MainCardBlock";

import { imageData, tagsData } from "./imageData";

const StyledMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

function MainBlock() {
  return (
    <>
      <StyledMainBlock>
        <TagsBlock sliderData={tagsData} />
        <MainCrdBlock tags={tagsData} imageData={imageData} />
      </StyledMainBlock>
    </>
  );
}

export { MainBlock };
