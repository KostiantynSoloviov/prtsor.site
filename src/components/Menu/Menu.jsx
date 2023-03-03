import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

import { togglePageMenu } from "../../redux/slice/pageSlice";
import { useDispatch, useSelector } from "react-redux";

import { SVGgeneral } from "../../utils/generalSprite";

const StyledMenuBlock = styled.div`
  margin-top: 196px;
  margin-right: 24px;

  .buttonCollage {
    cursor: pointer;
    margin-top: 16px;
    display: grid;
    grid-template-columns: 65px 1fr;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    background: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
    border-radius: 20px;
    border: none;

    height: 47px;
    width: 216px;

    font-family: "Segoe UI";
    font-size: 17px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;

    .text {
      color: ${(props) => (props.color ? "white" : "#21223E")};
    }

    .svgBlock {
      margin-left: 35px;
      width: 20px;
      height: 20px;
      margin-right: 10px;
      fill: white !important;
    }
  }
`;

const StyledMenu = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  grid-gap: 20px;
  height: 272px;
  width: 216px;
  border-radius: 20px;
  background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};

  .link {
    text-decoration: none;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
  height: 23px;
  width: 160px;

  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 23px;
  padding: 4px 8px;

  .text {
    color: ${(props) => (props.color ? "white" : "#21223E")};
  }

  .svgBlock {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    fill: black;
  }
`;

function Menu() {
  const dispatch = useDispatch();
  const menuType = useSelector((state) => state.pageReducer.menu);
  const color = useSelector((state) => state.pageReducer.color);

  const setMenuType = (type) => {
    dispatch(togglePageMenu(type));
  };

  return (
    <>
      <StyledMenuBlock color={color}>
        <StyledMenu color={color}>
          <Link className="link" to="/">
            <StyledButton
              onClick={() => setMenuType("Screenshots")}
              color={color}
            >
              <div className="svgBlock">
                {menuType === "Screenshots" ? (
                  <SVGgeneral id="iconScreenshotsActive" />
                ) : (
                  <SVGgeneral
                    style={{ fill: color ? "#FFFFFF" : "#21223E" }}
                    id="iconScreenshots"
                  />
                )}
              </div>
              <span className="text">Screenshots</span>
            </StyledButton>
          </Link>
          <Link className="link" to="/contacts">
            <StyledButton onClick={() => setMenuType("Contact")} color={color}>
              <div className="svgBlock">
                {menuType === "Contact" ? (
                  <SVGgeneral
                    id="iconContactActive"
                    style={{ fill: "#404BD9" }}
                  />
                ) : (
                  <SVGgeneral
                    id="iconContact"
                    style={{ fill: color ? "#FFFFFF" : "#21223E" }}
                  />
                )}
              </div>
              <span className="text">Contact</span>
            </StyledButton>
          </Link>
          <Link className="link" to="/events">
            <StyledButton onClick={() => setMenuType("Event")} color={color}>
              <div className="svgBlock">
                {menuType === "Event" ? (
                  <SVGgeneral id="iconEventActive" />
                ) : (
                  <SVGgeneral
                    id="iconEvent"
                    style={{
                      fill: color ? "#21223E" : "#FFF6F6",
                      stroke: color ? "#FFFFFF" : "#21223E",
                    }}
                  />
                )}
              </div>
              <span className="text">Event</span>
            </StyledButton>
          </Link>
          <Link className="link" to="/setting">
            <StyledButton onClick={() => setMenuType("Setting")} color={color}>
              <div className="svgBlock">
                {menuType === "Setting" ? (
                  <SVGgeneral id="iconSettingActive" />
                ) : (
                  <SVGgeneral
                    id="iconSetting"
                    style={{
                      fill: color ? "#21223E" : "#FFF6F6",
                      stroke: color ? "#FFFFFF" : "#21223E",
                    }}
                  />
                )}
              </div>
              <span className="text">Setting</span>
            </StyledButton>
          </Link>
        </StyledMenu>
        <button
          color={color}
          className="buttonCollage"
          onClick={() => setMenuType("Collage")}
        >
          <div className="svgBlock" color={color}>
            {menuType === "Collage" ? (
              <SVGgeneral id="iconCollageActive" />
            ) : (
              <SVGgeneral
                id="iconCollage"
                style={{
                  stroke: color ? "#FFFFFF" : "#21223E",
                }}
              />
            )}
          </div>
          <span className="text">Collage</span>
        </button>
      </StyledMenuBlock>
    </>
  );
}

export { Menu };
