import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
import { SVGgeneral } from "../../../../../../../utils/generalSprite";

import { iconEditTag, iconLink } from "../../../../../../../image/icons";

import {
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
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
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

  .card {
    height: 402px;
    width: 272px;
    border-radius: 20px;
    background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
    margin-left: 16px;
  }

  .cardHeader {
    margin-top: 20px;
    position: relative;
    height: 104px;
    width: 272px;
    border-bottom: ${(props) =>
      props.color ? `1px solid #373854;` : `1px solid #E8E8E8;`};

    .cardHeaderGradient {
      height: 24px;
      width: 272px;
      left: 0px;
      top: 80px;
      border-radius: 0px;
      background: ${(props) =>
        props.color
          ? `linear-gradient(180deg, rgba(33, 34, 62, 0) 0%, #21223e 100%)`
          : `linear-gradient(180deg, rgba(249, 249, 249, 0) 0%, #FFF6F6 100%)`};
      position: absolute;
    }

    .cardHeaderTextMain {
      margin: 0 0 8px 0;
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 17px;
      color: ${(props) => (props.color ? "white" : "#707088")};
    }

    .cardHeaderText {
      margin: 8px 15px 0 0;
      color: ${(props) => (props.color ? "white" : "#707088")};
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
    }

    .cardHeaderTextTags {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 8px 15px 0 0;
      color: ${(props) => (props.color ? "white" : "#707088")};
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
    }

    .cardHeaderLabelTags {
      margin-top: 5px;
    }

    .cardHeaderBlock {
      height: 104px;
      width: 240px;
      margin: 0 0 0 20px;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: overlay;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        height: 20px;
        background-color: ${(props) => (props.color ? "#373854" : "#FFDBDB")};
      }
    }

    @media (max-width: 960px) {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;

      .image {
        position: relative;
        height: 185px;
        width: 340px;
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
    }
  }

  .cardCentre {
    position: relative;
    height: 199px;
    width: 272px;

    .cardCentreBlock {
      height: 179px;
      width: 240px;
      margin: 20px 0 0 20px;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: overlay;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        height: 20px;
        background-color: ${(props) => (props.color ? "#373854" : "#FFDBDB")};
      }

      .cardCentreUser {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
      }

      .cardCentreAvatar {
        margin: 0 8px 0 0;
      }

      .buttonCentreUser {
        margin-left: -6px;
      }

      .cardCentreName {
        margin-right: 15px;
      }

      .cardCentreText {
        color: ${(props) => (props.color ? "white" : "#707088")};
        font-weight: 350;
        font-size: 12px;
        line-height: 16px;
      }

      .cardCentreControlBlock {
        margin-left: 32px;
      }

      .cardCentreTextControl {
        color: #898aa4;
        font-weight: 350;
        font-size: 10px;
        line-height: 13px;
        margin-right: 8px;
      }

      .cardCentreButtonControl {
        font-weight: 700;
        font-size: 10px;
        line-height: 13px;
        cursor: pointer;
        border: none;
        color: #898aa4;
        background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
      }
    }

    .cardCentreGradient {
      height: 24px;
      width: 272px;
      left: 0px;
      top: 155px;
      border-radius: 0px;
      background: ${(props) =>
        props.color
          ? `linear-gradient(180deg, rgba(33, 34, 62, 0) 0%, #21223e 100%)`
          : `linear-gradient(180deg, rgba(249, 249, 249, 0) 0%, #FFF6F6 100%)`};
      position: absolute;
    }

    .buttonCentreUser {
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 17px;
      cursor: pointer;
      border: none;
      color: #757ffa;
      background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
    }
  }

  .cardFooter {
    height: 80px;
    width: 272px;
    margin-top: -20px;
    border-top: ${(props) =>
      props.color ? `1px solid #373854;` : `1px solid #E8E8E8;`};
  }

  .cardFooterBlockButton {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding-top: 0px;
    height: 40px;

    .cardButton {
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;

      cursor: pointer;
      margin-left: 20px;
      background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
      border: none;
      color: #404bd9;
    }

    .cardButtonLink {
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;

      cursor: pointer;
      margin-left: 12px;
      background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
      border: none;
      color: #404bd9;
    }

    .cardFooterText {
      margin-left: 5px;
    }
  }

  .cardFooterBlockTime {
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    color: ${(props) => (props.color ? "white" : "#B6C2D1")};
    height: 40px;
    margin-top: -14px;

    .cardFooterDate {
      margin-left: 24px;
    }

    .cardFooterTime {
      margin-left: 12px;
    }
  }
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 525px;
    margin-top: 20px;

    .image {
      position: relative;
      width: 340px;
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
      left: 145px;
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
      left: 35px;
    }

    .card {
      background-color: #121417;
      margin-left: 0;
      width: 340px;

      .cardHeaderBlock {
        width: 300px;
      }

      .cardHeaderGradient {
        width: 340px;
        background: linear-gradient(
          180deg,
          rgba(18, 20, 23, 0) 0%,
          #121417 100%
        );
      }
    }
    .cardCentre {
      width: 340px;

      .cardCentreBlock {
        width: 310px;
      }

      .cardCentreGradient {
        width: 340px;
        background: linear-gradient(
          180deg,
          rgba(18, 20, 23, 0) 0%,
          #121417 100%
        );
      }
    }

    .cardFooter {
      width: 340px;
    }

    .cardHeader {
      width: 340px;
    }
  }
`;

const Card = ({
  scr,
  alt,
  titlePageTag,
  textPageTag,
  tags,
  users,
  date,
  time,
}) => {
  const color = useSelector((state) => state.pageReducer.color);
  const width = useSelector((state) => state.pageReducer.width);
  return (
    <>
      <StyledCard color={color}>
        {width === "small" ? (
          <div className="image">
            <img className="img" src={scr} alt={alt} />
            <button className="zoomButton">
              <SVGgeneral
                id="zoomButton"
                style={{ fill: color ? "#282945" : "#F5A8A8", height: 56 }}
              />
            </button>
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
        ) : (
          <div className="image">
            <img className="img" src={scr} alt={alt} />
            <button className="zoomButton">
              <SVGgeneral
                id="zoomButton"
                style={{ fill: color ? "#282945" : "#F5A8A8" }}
              />
            </button>
            <div className="imageChangeBlock">
              <button className="iconDiv">
                <SVGgeneral id="iconHome" />
              </button>
              <button className="iconDiv">
                <SVGgeneral id="iconPencil" />
              </button>
              <button className="iconDiv">
                <SVGgeneral id="iconCopyField" />
              </button>
              <button className="iconDiv">
                <SVGgeneral id="iconShare" />
              </button>
              <button className="iconDiv">
                <SVGgeneral id="iconDownload" />
              </button>
              <button className="iconDiv">
                <SVGgeneral id="iconShareGroup" />
              </button>
              <button className="iconDiv">
                <SVGgeneral id="iconShow" />
              </button>
              <button className="iconDiv">
                <SVGgeneral id="iconDelete" />
              </button>
            </div>
          </div>
        )}
        <div className="card" color={color}>
          <div className="cardHeader">
            <div className="cardHeaderGradient"></div>
            <div className="cardHeaderBlock">
              <span className="cardHeaderTextMain">{titlePageTag}</span>
              <span className="cardHeaderText">{textPageTag}</span>
              <span className="cardHeaderText">Tags</span>
              <div className="cardHeaderTextTags">
                {tags.map((item) => {
                  return (
                    <span className="cardHeaderLabelTags">{item.label}</span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="cardCentre">
            <div className="cardCentreGradient"></div>
            <div className="cardCentreBlock">
              {users.length > 0 &&
                users.map((item) => {
                  return (
                    <div className="cardCentreMainBlock">
                      <div className="cardCentreUser">
                        <div className="cardCentreAvatar">
                          <SVGgeneral
                            id="iconEventAvatar"
                            style={{
                              fill: color ? "#8C8EB0" : "#F5A8A8",
                              height: 24,
                            }}
                          />
                        </div>
                        <div>
                          <div className="cardCentreName">
                            <button className="buttonCentreUser">
                              {item.userName}
                            </button>
                            <span className="cardCentreText">
                              {item.userContent}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="cardCentreControlBlock">
                        <span className="cardCentreTextControl">Today</span>
                        <button className="cardCentreButtonControl">
                          Reply
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="cardFooter">
            <div className="cardFooterBlockButton">
              <button className="cardButton">
                {iconEditTag}
                <span className="cardFooterText">Edit tag</span>
              </button>
              <button className="cardButtonLink">
                {iconLink}
                <span className="cardFooterText">Link</span>
              </button>
            </div>
            <div className="cardFooterBlockTime">
              <span className="cardFooterDate">{date}</span>
              <span className="cardFooterTime">{time}</span>
            </div>
          </div>
        </div>
      </StyledCard>
    </>
  );
};

export { Card };
