import styled from "styled-components";
import React from "react";

import { Menu } from "../../components/Menu/Menu";
import { CentreBlock } from "../../components/CenterBlock/CentreBlock";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeWidth } from "../../redux/slice/pageSlice";

const StyledMainPage = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.width === "normal" || props.width === "small"
      ? `1fr`
      : `1fr 944px 1fr`};
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 130px);
  height: calc(100% - 130px);
  background-color: ${(props) => (props.color ? "#121417" : "#FFFFFF")};
`;

const StyledLeftBlock = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const StyleRightBlock = styled.div`
  background-color: ${(props) => (props.color ? "#121417" : "#FFFFFF")};
  height: calc(100% - 130px);
  width: 100%;
`;

const MainPage = () => {
  const dispatch = useDispatch();
  window.addEventListener("resize", AutoScale);

  AutoScale();

  function AutoScale() {
    let width = window.screen.width;

    if (width > 1200) {
      dispatch(changeWidth("big"));
    } else if (width <= 1200 && width > 960) {
      dispatch(changeWidth("normal"));
    } else if (width < 960) {
      dispatch(changeWidth("small"));
    }
  }

  const width = useSelector((state) => state.pageReducer.width);
  const color = useSelector((state) => state.pageReducer.color);

  console.log(width);
  return (
    <>
      <StyledMainPage color={color} width={width}>
        {width === "normal" || width === "small" ? null : (
          <StyledLeftBlock>
            <Menu />
          </StyledLeftBlock>
        )}
        <CentreBlock />
        {width === "normal" || width === "small" ? null : (
          <StyleRightBlock color={color} />
        )}
      </StyledMainPage>
    </>
  );
};

export { MainPage };
