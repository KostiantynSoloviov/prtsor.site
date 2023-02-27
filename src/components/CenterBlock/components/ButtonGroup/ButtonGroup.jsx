import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePageView } from "../../../../redux/slice/pageSlice";

import { useState } from "react";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { SVGgeneral } from "../../../../utils/generalSprite";

const StyledButtonGroup = styled.div`
  height: 196px;

  .privateGroup {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100px;

    .activeButton {
      background-color: ${(props) => (props.color ? "#1a1b2e" : "#FBEBEB")};
    }
  }

  .privateGroupLeft {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    margin: 15px 5px 0 0;

    .privateGroupRightButton {
      background-color: ${(props) => (props.color ? "#121417" : "#FFFFFF")};
      color: ${(props) => (props.color ? "white" : "#21223E")};
    }
  }

  .privateGroupRight {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 15px 0 0 5px;

    .privateGroupRightButton {
      background-color: ${(props) => (props.color ? "#121417" : "#FFFFFF")};
      color: ${(props) => (props.color ? "white" : "#21223E")};
    }

    .menuButton {
      margin-right: 16px;
      cursor: pointer;
      height: 33px;
      width: 85px;
      border-radius: 32px;
      background-color: ${(props) => (props.color ? "#21223e" : "#FFFFFF")};
      border: ${(props) =>
        props.color ? `1px solid #373854` : `1px solid #FBEBEB`};
      color: ${(props) => (props.color ? "white" : "#21223E")};
    }

    .buttonMenu {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      align-items: center;
    }

    .menuItem {
      cursor: pointer;
      background-color: ${(props) => (props.color ? "#1a1b2e" : "#FFFFFF")};
      height: 30px;
      border: ${(props) => (props.color ? "none" : `1px solid #FBEBEB`)};
      color: ${(props) => (props.color ? "white" : "#21223E")};
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
      background-color: ${(props) => (props.color ? "#1a1b2e" : "#FBEBEB")};
      color: ${(props) => (props.color ? "white" : "#21223E")};
    }
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  display: grid;
  grid-template-columns: 65px 1fr;
  justify-content: flex-start;
  align-items: center;
  border: ${(props) => (props.color ? "none" : `1px solid #FBEBEB`)};
  height: 45px;
  width: 169px;
  border-radius: 32px;
  background-color: ${(props) => (props.color ? "#121417" : "#FFFFFF")};

  font-family: "Segoe UI";
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

  .text {
    color: ${(props) => (props.color ? "white" : "#21223E")};
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
  const dispatch = useDispatch();
  const [privateButton, setPrivateButton] = useState("privateGroupLeft");
  const [deviceButton, setDeviceButton] = useState("pc");

  const color = useSelector((state) => state.pageReducer.color);

  const changeView = (view) => {
    dispatch(togglePageView(view));
  };

  return (
    <>
      <StyledButtonGroup color={color}>
        <div className="privateGroup">
          <div className="privateGroupLeft">
            <StyledButton
              color={color}
              className={
                privateButton === "privateGroupLeft"
                  ? "activeButton"
                  : "privateGroupRightButton"
              }
              onClick={() => setPrivateButton("privateGroupLeft")}
            >
              <div className="svgBlock">
                <SVGgeneral id="iconGeneral" />
              </div>
              <span className="text">General</span>
            </StyledButton>
          </div>
          <div className="privateGroupRight">
            <StyledButton
              color={color}
              className={
                privateButton === "privateGroupRight"
                  ? "activeButton"
                  : "privateGroupRightButton"
              }
              onClick={() => setPrivateButton("privateGroupRight")}
            >
              <div className="svgBlockPrivate">
                <SVGgeneral
                  id="iconPrivate"
                  style={{
                    fill: color ? "#FFFFFF" : "#21223E",
                    stroke: color ? "#FFFFFF" : "#21223E",
                  }}
                />
              </div>
              <span className="text">Private</span>
            </StyledButton>
            <Menu className="menu" color={color}>
              <MenuButton className="menuButton">
                <div className="buttonMenu">
                  <span>View</span>
                  <div>
                    <SVGgeneral
                      id="iconButtonDown"
                      style={{ fill: color ? "white" : "#21223E" }}
                    />
                  </div>
                </div>
              </MenuButton>
              <MenuList className="menuList">
                <MenuItem
                  className="menuItem"
                  onClick={() => changeView("View")}
                >
                  View
                </MenuItem>
                <MenuItem
                  className="menuItem"
                  onClick={() => changeView("ViewVariant2")}
                >
                  ViewVariant2
                </MenuItem>
                <MenuItem
                  className="menuItem"
                  onClick={() => changeView("ViewVariant3")}
                >
                  ViewVariant3
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="deviceGroup">
          <StyledButton
            color={color}
            className={
              deviceButton === "pc"
                ? "activeDeviceGroupButton"
                : "deviceGroupButton"
            }
            onClick={() => setDeviceButton("pc")}
          >
            <div className="svgBlock">
              <SVGgeneral
                id="iconPC"
                style={{
                  fill: color ? "#FFFFFF" : "#21223E",
                }}
              />
            </div>
            <span className="text">PC</span>
          </StyledButton>
          <StyledButton
            color={color}
            className={
              deviceButton === "android"
                ? "activeDeviceGroupButton"
                : "deviceGroupButton"
            }
            onClick={() => setDeviceButton("android")}
          >
            <div className="svgBlock">
              <SVGgeneral
                id="iconAndroid"
                style={{
                  fill: color ? "#FFFFFF" : "#21223E",
                }}
              />
            </div>
            <span className="text">Mobile Android</span>
          </StyledButton>
          <StyledButton
            color={color}
            className={
              deviceButton === "ios"
                ? "activeDeviceGroupButton"
                : "deviceGroupButton"
            }
            onClick={() => setDeviceButton("ios")}
          >
            <div className="svgBlock">
              <SVGgeneral
                id="iconAndroid"
                style={{
                  fill: color ? "#FFFFFF" : "#21223E",
                }}
              />
            </div>
            <span className="text">Mobile IOS</span>
          </StyledButton>
        </div>
      </StyledButtonGroup>
    </>
  );
}

export { ButtonGroup };
