import styled from "styled-components";
import React from "react";

import {
  iconZoomButtonSmall,
  iconPencilMini,
  iconCopyFieldMini,
  iconShareMini,
  iconDownloadMini,
  iconShareGroupMini,
  iconShowMini,
  iconDeleteMini,
} from "../../../../../../../image/icons";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 301px;
  height: 245px;

  .image {
    position: relative;
    height: 185px;
    width: 301px;
  }

  .img {
    border-radius: 20px;
    max-width: 100%;
    height: 100%;
  }

  .zoomButton {
    cursor: pointer;
    opacity: 0.8;
    padding: 0;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    border-radius: 35px;
    position: absolute;
    top: 60px;
    left: 120px;
    border: none;
  }

  .imageChangeBlock {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 32px;
    width: 269px;
    background-color: white;
    position: absolute;
    border-radius: 24.17977523803711px;
    top: 140px;
    left: 15px;
  }

  .iconDiv {
    cursor: pointer;
    border: none;
    width: 30px;
    height: 15px;
    background-color: white;
  }

  .cardHeader {
    height: 60px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    .cardHeaderTextMain {
      height: 30px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      margin-left: 15px;
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 17px;
      color: #e0e8f3;
    }

    .cardHeaderText {
      height: 30px;
      margin-left: 15px;
      color: #e0e8f3;
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
    }
  }
`;

const CardVarianTwo = ({
  scr,
  alt,
  titlePageTag,
  textPageTag,
  tags,
  users,
  date,
  time,
}) => {
  return (
    <>
      <StyledCard>
        <div class="image">
          <img className="img" src={scr} alt={alt} />
          <button className="zoomButton">{iconZoomButtonSmall}</button>
          <div className="imageChangeBlock">
            <button className="iconDiv">{iconPencilMini}</button>
            <button className="iconDiv">{iconCopyFieldMini}</button>
            <button className="iconDiv">{iconShareMini}</button>
            <button className="iconDiv">{iconDownloadMini}</button>
            <button className="iconDiv">{iconShareGroupMini}</button>
            <button className="iconDiv">{iconShowMini}</button>
            <button className="iconDiv">{iconDeleteMini}</button>
          </div>
        </div>
        <div className="cardHeader">
          <span className="cardHeaderTextMain">{titlePageTag}</span>
          <span className="cardHeaderText">{textPageTag}</span>
        </div>
      </StyledCard>
    </>
  );
};

export { CardVarianTwo };
