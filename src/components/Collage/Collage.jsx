import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

import { imageData } from "../CenterBlock/components/MainBlock/imageData";

const StyledCollagePage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 130px);
  height: calc(100% - 130px);
  background-color: ${(props) => (props.color ? "#121417" : "#FFFFFF")};

  .collageMainBlock {
    width: 944px;
  }

  .image {
    margin-top: 40px;
    position: relative;
    height: 579px;
    width: 944px;
    border-radius: 20px;
  }

  .img {
    border-radius: 20px;
    max-width: 100%;
    height: 100%;
  }

  .collageTitle {
    margin: 11px 0 0 12px;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    color: #e0e8f3;
  }

  .collageDescription {
    margin: 8px 0 0 12px;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    color: #e0e8f3;
  }

  .socialBlock {
    height: 148px;
    width: 944px;
    border-radius: 0px;
  }
`;

const Collage = () => {
  const color = useSelector((state) => state.pageReducer.color);
  return (
    <StyledCollagePage color={color}>
      <div className="collageMainBlock">
        <div class="image">
          <img className="img" src={imageData[0].scr} alt={imageData[0].alt} />
        </div>
        <div className="collageTitle">
          <span>{imageData[0].alt}</span>
        </div>
        <div className="collageDescription">
          <span>Here is the description of the screenshot</span>
        </div>
        <div className="socialBlock"></div>
      </div>
    </StyledCollagePage>
  );
};

export { Collage };
