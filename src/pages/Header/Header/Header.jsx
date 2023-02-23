import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import window from "../../../image/window";

import logoWhite from "../../../image/logoWhite";

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 66px;
  background-color: #1d2126;

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
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background: #00204f;
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

function Header() {
  return (
    <>
      <StyledMainPage>
        <div className="leftBlock">
          <Link to="/">{logoWhite}</Link>
        </div>
        <div className="rightBlock">
          <StyledButton>
            <div className="svgBlock">{window}</div>
            <a href="https://prtscr.site/download" className="link">
              Free download for window
            </a>
          </StyledButton>
          <StyledButton>
            <span className="text">Profile</span>
          </StyledButton>
        </div>
      </StyledMainPage>
    </>
  );
}

export { Header };
