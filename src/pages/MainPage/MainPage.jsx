import styled from "styled-components";
import React from "react";

import { Menu } from "../../components/Menu/Menu";
import { CentreBlock } from "../../components/CenterBlock/CentreBlock";
import { useSelector } from "react-redux";

const StyledMainPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 944px 1fr;
  width: 100%;
  min-height: calc(100vh - 130px);
  height: calc(100% - 130px);
  background-color: ${(props) => (props.color ? "#121417" : "#FFFFFF")};
`;

const StyledLeftBlock = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const MainPage = () => {
  const color = useSelector((state) => state.pageReducer.color);
  return (
    <>
      <StyledMainPage color={color}>
        <StyledLeftBlock>
          <Menu />
        </StyledLeftBlock>
        <CentreBlock />
      </StyledMainPage>
    </>
  );
};

export { MainPage };
