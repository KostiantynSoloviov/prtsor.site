import styled from "styled-components";
import React, { useState } from "react";

import { SVGgeneral } from "../../../../../utils/generalSprite";

import { useSelector } from "react-redux";

const StyledCardEvent = styled.div`
  font-family: "Segoe UI";
  font-style: normal;

  display: grid;
  grid-template-columns: 59px 1fr;
  margin-top: 12px;
  width: 100%;
  border-radius: 12px;

  background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};

  .messageIcon {
    width: 59px;
    height: 100%;
  }

  .mainCardEventBlock {
    display: grid;
    grid-template-columns: 400px 1fr 55px;
  }

  .cardTextBlock {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
  }

  .headerTextBlock {
    height: 22px;
    margin-top: 16px;

    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
  }

  .timeTextBlock {
    margin-top: 2px;
    font-weight: 350;
    font-size: 11px;
    line-height: 15px;
  }

  .actionTextBlock {
    height: 22px;
    margin-top: 8px;
    font-weight: 350;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: ${(props) => (props.opencard ? "20px" : "16px")};
  }

  .actionTextCommend {
    color: ${(props) => (props.color ? "#757FFA" : "#757FFA")};
  }

  .eventButtonGroup {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
  }

  .eventAcceptGroup {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    height: 33px;
    width: 188px;
    border-radius: 32px;
    background-color: ${(props) => (props.color ? "#444563" : "#ffffff")};
    border: 1px solid #404bd9;

    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    text-align: center;

    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
  }

  .eventRejectGroup {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    height: 33px;
    width: 188px;
    border-radius: 32px;
    background-color: ${(props) => (props.color ? "#444563" : "#ffffff")};
    border: ${(props) =>
      props.color ? `1px solid #47486a` : `1px solid #FBEBEB`};

    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    text-align: center;

    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
  }

  .eventButtonYes {
    cursor: pointer;
    margin-right: 8px;
    height: 33px;
    width: 59px;
    border-radius: 32px;
    background-color: #404bd9;
    border: 1px solid #404bd9;
    color: #ffffff;
  }

  .eventButtonNo {
    cursor: pointer;
    height: 33px;
    width: 59px;
    border-radius: 32px;
    margin-right: 0;
    background-color: ${(props) => (props.color ? "#373854" : "#ffffff")};
    border: 1px solid #404bd9;
    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
  }

  .arrowButton {
    cursor: pointer;
    margin-left: 15px;
    border: none;
    background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
  }

  .arrowButtonGroup {
    width: 55px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .openCardBlock {
    .divider {
      margin: 0 0 12px 59px;
      height: 1px;
      width: 805px;
      background-color: ${(props) => (props.color ? "#47486A" : "#FBEBEB")};
    }

    .openContentBlock {
      width: 805px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      height: 28px;
      margin: 0 0 16px 59px;
      color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
    }

    .openContentComments {
      width: 700px;
      border-radius: 12px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 8px 24px 8px 24px;
      margin: 0 0 16px 59px;
      color: ${(props) => (props.color ? "#a3a4c0" : "#707088")};
      background-color: ${(props) => (props.color ? "#505172" : "#FFF6F6")};
    }

    .commentOpenCard {
      font-weight: 350;
      font-size: 13px;
      line-height: 17px;
    }

    .commentOpenCardButton {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 32px;
      gap: 8px;

      background: ${(props) => (props.color ? "#505172" : "#ffffff")};
      border-radius: 32px;
      height: 33px;
      width: 96px;
      padding: 8px 32px 8px 32px;
      border: ${(props) => (props.color ? "none" : `1px solid #404bd9`)};
      margin: 0 0 16px 710px;

      color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
    }

    .nameOpenEventCard {
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
      margin-left: 12px;
    }

    .mailOpenEventCard {
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
      margin-left: 24px;
    }
  }
`;

const CardEvent = ({
  newEvent,
  date,
  user,
  group,
  userMail,
  acceptCommend,
  comment,
  acceptGroup,
  image,
}) => {
  const [openCard, setOpenCard] = useState(false);

  const color = useSelector((state) => state.pageReducer.color);

  return (
    <>
      <StyledCardEvent opencard={openCard ? 1 : 0} color={color}>
        <div className="messageIcon">
          {newEvent ? (
            <SVGgeneral
              id="newMessage"
              style={{
                paddingTop: 23,
                paddingLeft: 24,
                fill: color ? "#8C8EB0" : "#F5A8A8",
              }}
            />
          ) : (
            <SVGgeneral
              id="message"
              style={{
                paddingTop: 23,
                paddingLeft: 24,
                fill: color ? "#8C8EB0" : "#F5A8A8",
              }}
            />
          )}
        </div>
        <div className="mainCardEventBlock">
          <div className="cardTextBlock">
            {acceptCommend ? (
              <span className="headerTextBlock">You have a new comment</span>
            ) : (
              <span className="headerTextBlock">
                You have a new group invitation
              </span>
            )}

            <span className="timeTextBlock">{date}</span>
            <span className="actionTextBlock" opencard={openCard ? 1 : 0}>
              {acceptCommend ? (
                <>
                  {`${user} commented your screenshot «`}
                  <span className="actionTextCommend">{`${image}`}</span>
                  <span>»</span>
                </>
              ) : (
                <>{`${user} invite you to join group «${group}»`}</>
              )}
            </span>
          </div>
          {acceptCommend ? (
            <>
              <div className="eventButtonGroup"></div>
              <div className="arrowButtonGroup">
                <button
                  className="arrowButton"
                  onClick={() => setOpenCard(!openCard)}
                >
                  {openCard ? (
                    <SVGgeneral id="arrowUp" />
                  ) : (
                    <SVGgeneral id="arrowDown" />
                  )}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="eventButtonGroup">
                {!newEvent ? (
                  <>
                    {acceptGroup ? (
                      <div className="eventAcceptGroup">
                        <span>You accepted the invitation</span>
                      </div>
                    ) : (
                      <div className="eventRejectGroup">
                        <span>Rejected</span>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <button className="eventButtonYes">
                      <span>Yes</span>
                    </button>
                    <button className="eventButtonNo">
                      <span>No</span>
                    </button>
                  </>
                )}
              </div>
              <div className="arrowButtonGroup">
                <button
                  className="arrowButton"
                  onClick={() => setOpenCard(!openCard)}
                >
                  {openCard ? (
                    <SVGgeneral id="arrowUp" />
                  ) : (
                    <SVGgeneral id="arrowDown" />
                  )}
                </button>
              </div>
            </>
          )}
        </div>
        {openCard ? (
          <div className="openCardBlock">
            <div className="divider" color={color}></div>
            {acceptCommend ? (
              <>
                <div className="openContentComments">
                  <span className="commentOpenCard">{comment}</span>
                </div>
                <button className="commentOpenCardButton">Reply</button>
              </>
            ) : (
              <div className="openContentBlock">
                <SVGgeneral
                  id="iconEventAvatar"
                  style={{ fill: color ? "#8C8EB0" : "#F5A8A8" }}
                />
                <span className="nameOpenEventCard">{user}</span>
                <span className="mailOpenEventCard">{userMail}</span>
              </div>
            )}
          </div>
        ) : null}
      </StyledCardEvent>
    </>
  );
};

export { CardEvent };
