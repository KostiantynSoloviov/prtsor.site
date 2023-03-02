import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const StyledFooterPage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: ${(props) => (props.color ? "#1d2126" : "#FFF6F6")};

  .mainInformBlock {
    width: 600px;
    height: 100%;
  }

  .informBlock {
    height: 32px;
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    color: ${(props) => (props.color ? "white" : "#21223E")};
  }

  .informBlockButton {
    height: 32px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .informButton {
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;

    cursor: pointer;
    border: none;
    text-decoration: underline;
    color: ${(props) => (props.color ? "#93a6fa" : "#404BD9")};
    background-color: ${(props) => (props.color ? "#1d2126" : "#FFF6F6")};
  }

  .linkSeparator::after {
    color: ${(props) => (props.color ? "white" : "#21223E")};
    content: "▪";
    opacity: 0.8;
  }
`;

// ${(props) => (props.color ? "#00204f" : "#404BD9")};

const Footer = () => {
  const color = useSelector((state) => state.pageReducer.color);

  return (
    <>
      <StyledFooterPage color={color}>
        <div className="mainInformBlock">
          <div className="informBlockButton">
            <Link className="link" to="/about">
              <button className="informButton">About</button>
            </Link>
            <span className="linkSeparator"></span>
            <Link className="link" to="/">
              <button className="informButton">Terms of service</button>
            </Link>
            <span className="linkSeparator"></span>
            <Link className="link" to="/">
              <button className="informButton">Contact us</button>
            </Link>
            <span className="linkSeparator"></span>
            <Link className="link" to="/">
              <button className="informButton">Sitemap</button>
            </Link>
          </div>
          <span className="informBlock">
            All rights reserved. © KS Web Software 2022-2023
          </span>
        </div>
      </StyledFooterPage>
    </>
  );
};

export { Footer };
