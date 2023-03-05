import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { SVGgeneral } from "../../../../../../../../../utils/generalSprite";
import { useSelector } from "react-redux";

const StyledCheckBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 24px;

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

    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
  }

  .settingsBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .buttonInput {
    cursor: pointer;
    border: none;
    background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
  }

  .inputSettingsText {
    margin-right: 4px;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    text-align: right;

    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
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
    background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
    border: ${(props) =>
      props.color ? `1px solid #5e5f78` : `1px solid #EFEFEF`};
  }

  .container:hover input ~ .checkmark {
    background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
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

  .miniModal {
    position: absolute;
    height: 56px;
    width: 81px;
    top: 0;
    right: -90px;
    border-radius: 12px;
    background-color: white;
    border: 1px solid #5e5f78;

    font-weight: 400;
    font-size: 13px;
    line-height: 17px;

    color: #373854;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;

    .buttonMiniModal {
      cursor: pointer;
    }
  }
`;

const CheckedBlock = ({ item }) => {
  const color = useSelector((state) => state.pageReducer.color);
  const [openMiniModal, setOpenMiniModal] = useState(false);
  return (
    <StyledCheckBlock color={color}>
      <div className="checkboxCheckBlock">
        <div>
          <label className="container">
            <input
              type="checkbox"
              checked={item.check === true ? "checked" : ""}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <span className="checkboxText">Four</span>
      </div>
      <div className="settingsBlock">
        <div>
          <span className="inputSettingsText">1231</span>
        </div>
        <button
          className="buttonInput"
          onClick={() => setOpenMiniModal(!openMiniModal)}
        >
          <SVGgeneral
            id="threePoints"
            style={{ fill: color ? "#FFFFFF" : "#707088" }}
          />
        </button>
      </div>
      {openMiniModal ? (
        <div className="miniModal">
          <div
            className="buttonMiniModal"
            onClick={() => setOpenMiniModal(false)}
          >
            Edit tag
          </div>
          <div
            className="buttonMiniModal"
            onClick={() => setOpenMiniModal(false)}
          >
            Delete
          </div>
        </div>
      ) : null}
    </StyledCheckBlock>
  );
};

export { CheckedBlock };
