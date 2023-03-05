import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { SVGgeneral } from "../../../../../../../../../utils/generalSprite";

import { useSelector } from "react-redux";

const StyledModalNewTags = styled.div`
  z-index: 6;
  position: absolute;
  height: 275px;
  width: 496px;
  left: 175px;
  top: 15px;
  border-radius: 16px;
  background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
  border: ${(props) =>
    props.color ? `1px solid #505169` : `1px solid #FBEBEB`};

  .contactModalMainBlock {
    padding: 20px;
  }

  .contactModalHeaderText {
    font-weight: 600;
    font-size: 17px;
    line-height: 23px;
    margin-bottom: 24px;

    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
  }

  .contactInputWrapper {
    height: 38px;
    width: 432px;

    position: relative;
    margin-top: 8px;

    .text {
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 23px;
      color: ${(props) => (props.color ? "white" : "#21223E")};

      margin-left: 35px;
    }

    .input {
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 350;
      font-size: 15px;
      line-height: 22px;

      color: ${(props) => (props.color ? "white" : "#21223E")};
      border-radius: 32px;
      background-color: ${(props) => (props.color ? "#FFFFFF" : "white")};
      height: 38px;
      width: 432px;

      padding: 0 0px 0 10px;
      font-size: 15px;
      border: ${(props) =>
        props.color ? `1px solid #505169` : `1px solid #FBEBEB`};
      margin-bottom: 10px;
      outline: none;
      width: 100%;
    }

    .inputAddGroup {
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 350;
      font-size: 15px;
      line-height: 22px;

      color: ${(props) => (props.color ? "white" : "#21223E")};
      border-radius: 32px;
      background-color: ${(props) => (props.color ? "#373854" : "white")};
      height: 38px;
      width: 432px;

      padding: 0 0px 0 10px;
      font-size: 15px;
      border: ${(props) =>
        props.color ? `1px solid #505169` : `1px solid #FBEBEB`};
      margin-bottom: 10px;
      outline: none;
      width: 100%;
    }

    .inputIcon {
      position: absolute;
      width: 17px;
      height: 17px;
      right: 0;
      top: 12px;
    }

    .input:focus {
      border-color: white;
    }
  }

  .buttonGroup {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-weight: 350;
    font-size: 15px;
    line-height: 22px;
    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};

    .buttonCancel {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: none;
      height: 38px;
      width: 84px;
      border-radius: 32px;
      padding: 10px 32px 10px 32px;
      background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
    }

    .buttonOk {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 1px solid #404bd9;
      height: 38px;
      width: 84px;
      border-radius: 32px;
      padding: 10px 32px 10px 32px;
      background-color: #404bd9;
    }
  }
`;

const ModalNewTags = ({ closeModalNewTag }) => {
  const color = useSelector((state) => state.pageReducer.color);

  return (
    <StyledModalNewTags color={color}>
      <div className="contactModalMainBlock">
        <div className="contactModalHeaderText">
          <span>New tags</span>
        </div>
        <div className="contactInputWrapper">
          <input type="text" className="inputAddGroup" placeholder="Title" />
          <div className="inputIcon">
            <SVGgeneral id="iconSearchInput" />
          </div>
        </div>
        <div className="contactInputWrapper">
          <input
            type="text"
            className="inputAddGroup"
            placeholder="Description"
          />
          <div className="inputIcon">
            <SVGgeneral id="iconSearchInput" />
          </div>
        </div>
        <div className="contactInputWrapper">
          <input
            type="text"
            className="inputAddGroup"
            placeholder="Tags name"
          />
          <div className="inputIcon">
            <SVGgeneral id="iconSearchInput" />
          </div>
        </div>

        <div className="buttonGroup">
          <button className="buttonCancel" onClick={() => closeModalNewTag()}>
            Cancel
          </button>
          <button className="buttonOk" onClick={() => closeModalNewTag()}>
            OK
          </button>
        </div>
      </div>
    </StyledModalNewTags>
  );
};

export { ModalNewTags };
