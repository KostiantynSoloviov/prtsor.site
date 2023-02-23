import styled from "styled-components";
import React from "react";

import maxresdefault from "../../../../../../../image/maxresdefault.jpg";
import {
  zoomButton,
  iconHome,
  iconPencil,
  iconCopyField,
  iconShare,
  iconDownload,
  iconShareGroup,
  iconShow,
  iconDelete,
} from "../../../../../../../image/icons";

const StyledCard = styled.div`
  margin-top: 48px;
  width: 944px;
  height: 402px;

  .image {
    position: relative;
    height: 402px;
    width: 656px;
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
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    border-radius: 35px;
    position: absolute;
    top: 150px;
    left: 290px;
    border: none;
  }

  .imageChangeBlock {
    display: flex;
    /* grid-template-columns: 20px 20px 0.6fr 0.6fr 0.6fr 0.6fr 0.6fr 0.6fr; */
    align-items: center;
    justify-content: space-evenly;
    height: 42px;
    width: 396px;
    background-color: white;
    position: absolute;
    border-radius: 32px;
    top: 340px;
    left: 130px;
  }

  .iconDiv {
    cursor: pointer;
    border: none;
    width: 30px;
    height: 20px;
    background-color: white;
  }
`;

const Card = (scr, alt) => {
  return (
    <>
      <StyledCard>
        <div class="image">
          <img className="img" src={maxresdefault} alt="" />
          <button className="zoomButton">{zoomButton}</button>
          <div className="imageChangeBlock">
            <button className="iconDiv">{iconHome}</button>
            <button className="iconDiv">{iconPencil}</button>
            <button className="iconDiv">{iconCopyField}</button>
            <button className="iconDiv">{iconShare}</button>
            <button className="iconDiv">{iconDownload}</button>
            <button className="iconDiv">{iconShareGroup}</button>
            <button className="iconDiv">{iconShow}</button>
            <button className="iconDiv">{iconDelete}</button>
          </div>
        </div>
      </StyledCard>
    </>
  );
};

export { Card };
