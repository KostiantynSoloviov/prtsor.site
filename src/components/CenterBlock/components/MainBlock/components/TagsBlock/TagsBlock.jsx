import styled from "styled-components";
import React from "react";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";

import { useSelector } from "react-redux";

import { SVGgeneral } from "../../../../../../utils/generalSprite";

const StyledTagsBlock = styled.div`
  height: 120px;
  width: 944px;
  border-radius: 20px;
  background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};

  .tagsSearch {
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
              <MenuButton className="menuButton">
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
              <MenuList className="menuList">
                <MenuItem className="menuItem">Download</MenuItem>
                <MenuItem className="menuItem">Create a Copy</MenuItem>
                <MenuItem className="menuItem">Mark as Draft</MenuItem>
              </MenuList>
            </Menu>
          </div>
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
