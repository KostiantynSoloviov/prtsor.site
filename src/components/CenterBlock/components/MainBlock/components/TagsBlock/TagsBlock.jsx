import styled from "styled-components";
import React from "react";

import { Menu, MenuButton } from "@chakra-ui/react";
import { useState } from "react";

import { tagsData } from "../../imageData";

import { useSelector } from "react-redux";

import { SVGgeneral } from "../../../../../../utils/generalSprite";

const StyledTagsBlock = styled.div`
  height: 120px;
  width: 944px;
  border-radius: 20px;
  background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};

  .tagsSearch {
    position: relative;
    height: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .tags {
    margin-left: 35px;
    height: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .inputWrapper {
    height: 33px;
    width: 221px;
    position: relative;
    margin-right: 20px;
  }

  .inputBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
  }

  .input {
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;

    color: ${(props) => (props.color ? "white" : "#21223E")};
    border-radius: 20px;
    background-color: ${(props) => (props.color ? "#21223e" : "white")};
    height: 33px;
    width: 221px;
    padding: 0 0px 0 10px;
    font-size: 15px;
    border: ${(props) =>
      props.color ? `1px solid #373854` : `1px solid #FBEBEB`};
    margin-bottom: 10px;
    outline: none;
    width: 100%;
  }

  .inputIcon {
    position: absolute;
    width: 17px;
    height: 17px;
    right: 0;
    top: 8px;
  }

  .input:focus {
    border-color: white;
  }

  .menuButton {
    margin-right: 16px;
    cursor: pointer;
    height: 33px;
    width: 98px;
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

  .menuListBlock {
    position: absolute;
    height: 649px;
    width: 912px;
    left: 17px;
    top: 55px;
    border-radius: 16px;
    opacity: 1;
    background-color: #373854;
    border: 1px solid #505169;
    z-index: 1;

    .menuListMainBlock {
      padding: 20px 32px 2px 32px;
    }

    .menuTitleBlock {
      font-weight: 600;
      font-size: 17px;
      line-height: 23px;

      color: #ffffff;
    }

    .headerBlock {
      height: 33px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    }

    .checkboxContainer {
      display: grid;
      grid-template-columns: 220px 220px 220px;
      grid-template-rows: 24px;
      grid-gap: 10px;
      justify-content: space-between;
      align-items: baseline;
      height: 820px;
      margin-top: 32px;
      height: 478px;
    }

    .checkboxBlock {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      width: 220px;
      height: 24px;
    }

    .checkboxCheckBlock {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
    }

    .checkboxText {
      margin-left: 25px;
      font-weight: 600;
      font-size: 13px;
      line-height: 17px;

      color: #ffffff;
    }

    .settingsBlock {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }

    .buttonInput {
      border: none;
      background-color: #373854;
    }

    .inputSettingsText {
      margin-right: 4px;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;

      text-align: right;

      color: #ffffff;
    }

    .container {
      display: block;
      position: relative;
      cursor: pointer;

      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: -7px;
      left: 0;
      height: 16px;
      width: 16px;
      border-radius: 6px;
      background-color: #373854;
      border: 1px solid #5e5f78;
    }

    .container:hover input ~ .checkmark {
      background-color: #373854;
    }

    .container input:checked ~ .checkmark {
      background-color: #404bd9;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .container input:checked ~ .checkmark:after {
      display: block;
    }

    .container .checkmark:after {
      height: 8px;
      width: 5px;
      left: 4px;
      top: 2px;

      border: 1px solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    .buttonAces {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;

      margin-right: 12px;
      height: 33px;
      width: 127px;
      background: #c78d35;
      border-radius: 32px;
      border: none;
      cursor: pointer;
    }

    .menuButtonGroup {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }

    .buttonNewTag {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;

      width: 140px;
      height: 33px;
      background: #35c789;
      border-radius: 32px;
      border: none;
      cursor: pointer;
    }
  }

  .text {
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 23px;
    color: ${(props) => (props.color ? "white" : "#21223E")};

    margin-left: 35px;
  }
`;

const StyledTagsItem = styled.div`
  margin-bottom: 5px;
  color: white;
  margin-right: 10px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  /* width: 100%; */
  border-radius: 12px;
  padding: 8px 20px 8px 20px;
  background-color: ${(props) => (props.color ? "#373854" : "#F5A8A8")};

  .closeButton {
    cursor: pointer;
    margin-left: 12px;
  }
`;

const TagItem = ({ onClose, label, id, color }) => {
  return (
    <StyledTagsItem color={color} key={id}>
      <div>{label}</div>
      <div
        className="closeButton"
        onClick={(e) => {
          onClose();
          e.stopPropagation();
        }}
      >
        <SVGgeneral id="tagClose" />
      </div>
    </StyledTagsItem>
  );
};

function TagsBlock({ sliderData }) {
  const [tabs, setTabs] = useState(sliderData);
  const color = useSelector((state) => state.pageReducer.color);
  const [openMenu, setOpenMenu] = useState(false);

  const deleteTag = (item) => {
    setTabs((tabs) => {
      const newTabs = tabs.filter((_, i) => item !== i);
      return newTabs;
    });
  };

  return (
    <>
      <StyledTagsBlock color={color}>
        <div className="tagsSearch">
          <div className="text">
            <span>Tags including image</span>
          </div>
          <div className="inputBlock">
            <div className="inputWrapper">
              <input type="text" className="input" placeholder="Search tag" />
              <div className="inputIcon">
                <SVGgeneral id="iconSearchInput" />
              </div>
            </div>
            <Menu className="menu" color={color}>
              <MenuButton
                className="menuButton"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <div className="buttonMenu">
                  <span>All tags</span>
                  <div>
                    <SVGgeneral
                      id="iconButtonDown"
                      style={{ fill: color ? "white" : "#21223E" }}
                    />
                  </div>
                </div>
              </MenuButton>
            </Menu>
          </div>
          {openMenu ? (
            <div className="menuListBlock">
              <div className="menuListMainBlock">
                <div className="headerBlock">
                  <div className="menuTitleBlock">
                    <span>All my tags</span>
                  </div>
                  <div className="menuButtonGroup">
                    <button className="buttonAces">
                      <SVGgeneral id="access" style={{ paddingRight: 8 }} />
                      <span>Give access</span>
                    </button>
                    <button className="buttonNewTag">
                      <SVGgeneral id="newTag" style={{ paddingRight: 8 }} />
                      <span> Add new tags</span>
                    </button>
                  </div>
                </div>
                <div className="checkboxContainer">
                  {tagsData &&
                    tagsData.map(() => {
                      return (
                        <div className="checkboxBlock">
                          <div className="checkboxCheckBlock">
                            <div>
                              <label className="container">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                            <span className="checkboxText">Four</span>
                          </div>
                          <div className="settingsBlock">
                            <div>
                              <span className="inputSettingsText">1231</span>
                            </div>
                            <button className="buttonInput">
                              <SVGgeneral id="threePoints" style={{}} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="tags">
          <>
            {tabs.map((item) => {
              return (
                <TagItem
                  color={color}
                  key={item.id}
                  label={item.label}
                  onClose={() => deleteTag(tabs.indexOf(item))}
                />
              );
            })}
          </>
        </div>
      </StyledTagsBlock>
    </>
  );
}

export { TagsBlock };
