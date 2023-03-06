import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import window from "../../../image/window";

import { SVGgeneral } from "../../../utils/generalSprite";
import { SmallMenu } from "../../../components/Menu/MenuSmallSize";

import logoWhite from "../../../image/logoWhite";
import logoBlack from "../../../image/logoBlack";

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
    align-items: center;
    margin-right: 10px;
    width: 50%;
  }

  .iconChangeColor {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;

    height: 24px;
    width: 24px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
  }

  .iconChangeColor:hover {
    background-color: #2b343e;
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
  const width = useSelector((state) => state.pageReducer.width);

  const [openSmallMenu, setOpenSmallMenu] = useState(false);

  const changeColors = () => {
    dispatch(changeColor());
  };

  return (
    <>
      <StyledMainPage color={color} width={width}>
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
            {color ? (
              <SVGgeneral
                id="iconWhiteTheme"
                style={{ width: 16, height: 16 }}
              />
            ) : (
              <SVGgeneral
                id="iconWhiteTheme"
                style={{ width: 16, height: 16 }}
              />
            )}
          </div>
          {width === "normal" ? (
            <div
              className="iconChangeColor"
              onClick={() => setOpenSmallMenu(!openSmallMenu)}
            >
              <SVGgeneral id="iconMenuOpen" />
              {openSmallMenu ? <SmallMenu /> : null}
            </div>
          ) : null}
        </div>
      </StyledMainPage>
    </>
  );
};

export { Header };
