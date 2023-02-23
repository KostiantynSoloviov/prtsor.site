import styled from "styled-components";
import React from "react";

import { useState } from "react";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import {
  iconGeneral,
  iconPrivate,
  iconPC,
  iconAndroid,
  buttonDown,
} from "../../../../image/icons";

const StyledButtonGroup = styled.div`
  height: 196px;

  .privateGroup {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100px;

    .activeButton {
      background-color: #1a1b2e;
    }
  }

  .privateGroupLeft {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    margin: 15px 5px 0 0;
  }

  .privateGroupRight {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 15px 0 0 5px;

    .menuButton {
      cursor: pointer;
      padding: 0;
      background-color: #121417;
      border: none;
      border-radius: 17px;
    }

    .menuItem {
      cursor: pointer;
      background-color: #1a1b2e;
      height: 30px;
      border: none;
      color: white;
    }
  }

  .deviceGroup {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 96px;

    .deviceGroupButton {
      font-size: 17px;
      font-weight: 600;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: left;

      height: 39px;
      width: auto;
      padding: 8px 24px 8px 24px;
      margin: 0 5px 15px 0;
      grid-template-columns: 30px 1fr;
    }

    .svgBlock {
      margin: 0;
    }

    .activeDeviceGroupButton {
      font-size: 17px;
      font-weight: 600;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: left;

      height: 39px;
      width: auto;
      padding: 8px 24px 8px 24px;
      margin: 0 5px 15px 0;
      grid-template-columns: 30px 1fr;
      background-color: #1a1b2e;
    }
  }
`;
const StyledButton = styled.button`
  cursor: pointer;
  display: grid;
  grid-template-columns: 65px 1fr;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background: #21223e;
  height: 45px;
  width: 169px;
  border-radius: 32px;
  background-color: #121417;

  font-family: "Segoe UI";
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

  .text {
    color: white;
  }

  .svgBlock {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    margin-left: 30px;
  }

  .svgBlockPrivate {
    width: 28px;
    height: 28px;
    margin-right: 10px;
    margin-left: 30px;
  }
`;

function ButtonGroup() {
  const [privateButton, setPrivateButton] = useState("privateGroupLeft");
  const [deviceButton, setDeviceButton] = useState("pc");

  return (
    <>
      <StyledButtonGroup>
        <div className="privateGroup">
          <div className="privateGroupLeft">
            <StyledButton
              className={
                privateButton === "privateGroupLeft" ? "activeButton" : ""
              }
              onClick={() => setPrivateButton("privateGroupLeft")}
            >
              <div className="svgBlock">{iconGeneral}</div>
              <span className="text">General</span>
            </StyledButton>
          </div>
          <div className="privateGroupRight">
            <StyledButton
              className={
                privateButton === "privateGroupRight" ? "activeButton" : ""
              }
              onClick={() => setPrivateButton("privateGroupRight")}
            >
              <div className="svgBlockPrivate">{iconPrivate}</div>
              <span className="text">Private</span>
            </StyledButton>
            <Menu className="menu">
              <MenuButton className="menuButton">
                <div>{buttonDown}</div>
              </MenuButton>
              <MenuList className="menuList">
                <MenuItem className="menuItem">Download</MenuItem>
                <MenuItem className="menuItem">Create a Copy</MenuItem>
                <MenuItem className="menuItem">Mark as Draft</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="deviceGroup">
          <StyledButton
            className={
              deviceButton === "pc"
                ? "activeDeviceGroupButton"
                : "deviceGroupButton"
            }
            onClick={() => setDeviceButton("pc")}
          >
            <div className="svgBlock">{iconPC}</div>
            <span className="text">PC</span>
          </StyledButton>
          <StyledButton
            className={
              deviceButton === "android"
                ? "activeDeviceGroupButton"
                : "deviceGroupButton"
            }
            onClick={() => setDeviceButton("android")}
          >
            <div className="svgBlock">{iconAndroid}</div>
            <span className="text">Mobile Android</span>
          </StyledButton>
          <StyledButton
            className={
              deviceButton === "ios"
                ? "activeDeviceGroupButton"
                : "deviceGroupButton"
            }
            onClick={() => setDeviceButton("ios")}
          >
            <div className="svgBlock">{iconAndroid}</div>
            <span className="text">Mobile IOS</span>
          </StyledButton>
        </div>
      </StyledButtonGroup>
    </>
  );
}

export { ButtonGroup };
