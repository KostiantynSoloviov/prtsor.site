import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import window from "../../../image/window";

import { SVGgeneral } from "../../../utils/generalSprite";

import logoWhite from "../../../image/logoWhite";
import logoBlack from "../../../image/logoBlack";
import { iconColorChange } from "../../../image/icons";

import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../../../redux/slice/pageSlice";

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 66px;
  background-color: ${(props) => (props.color ? "#1d2126" : "#FFF6F6")};

  .leftBlock {
    margin-left: 10px;
    width: 50%;
  }

  .rightBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin-right: 10px;
    width: 50%;
  }

  .iconChangeColor {
    cursor: pointer;
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.color ? "#00204f" : "#404BD9")};
  border: 2px solid #256dd9;
  border-radius: 32px;
  height: 32px;
  font-family: "Segoe UI";
  font-style: normal;
  font-size: 14px;
  padding: 4px 8px;
  margin-right: 10px;

  .link {
    text-decoration: none;
    color: white;
  }

  .text {
    color: white;
  }

  .svgBlock {
    margin: 4px 5px 0 2px;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.pageReducer.color);

  const changeColors = () => {
    dispatch(changeColor());
  };

  return (
    <>
      <StyledMainPage color={color}>
        <div className="leftBlock">
          <Link to="/">{color ? logoWhite : logoBlack}</Link>
        </div>
        <div className="rightBlock">
          <StyledButton color={color}>
            <div className="svgBlock">{window}</div>
            <a href="https://prtscr.site/download" className="link">
              Free download for window
            </a>
          </StyledButton>
          <StyledButton color={color}>
            <span className="text">Profile</span>
          </StyledButton>
          <div className="iconChangeColor" onClick={() => changeColors()}>
            {iconColorChange}
          </div>
        </div>
      </StyledMainPage>
    </>
  );
};

export { Header };
