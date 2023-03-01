import styled from "styled-components";
import React, { useState } from "react";

import { iconNotification } from "../../../../image/icons";
import { useSelector } from "react-redux";

import { Pagination } from "../MainBlock/components/MainCardBlock/components/Pagination";
import { SVGgeneral } from "../../../../utils/generalSprite";
import { CardEvent } from "./components/CardEvent";
import { dataBase } from "./dataBase";

const StyledEvents = styled.div`
  font-family: "Segoe UI";
  font-style: normal;
  width: 944px;
  border-radius: 20px;
  background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
  margin-bottom: 100px;

  .mainBlockEvents {
    padding: 40px;
  }

  .headerEvents {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  .headerEvensText {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
  }

  .headerEventsNotification {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    height: 50px;
    width: 229px;
    border-radius: 12px;
    /* padding: 8px 20px 8px 20px; */
    background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
  }

  .iconNotification {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .textBlockNotification {
    margin-left: -8px;
  }

  .textNotification {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
  }

  .markTextNotification {
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;

    text-decoration-line: underline;
    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
  }

  .mainEventCard {
    background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
  }

  .deleteEvent {
    height: 17px;
    width: 100%;
    margin-bottom: 10px;
  }

  .deleteEventButton {
    margin: 24px 0 0px 24px;
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;

    cursor: pointer;
    border: none;
    color: #dc3545;
    background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
  }

  .paginationBlock {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .divider {
    margin: 24px 0 24px 0;
    height: 2px;
    width: 100%;
    background-color: ${(props) => (props.color ? "#373854" : "#FBEBEB")};
  }

  .buttonRefresh {
    cursor: pointer;
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-content: center;
    align-items: center;
    height: 42px;
    width: 194px;
    border-radius: 24px;
    background-color: ${(props) => (props.color ? "#21223e" : "white")};
    border: none;
    color: ${(props) => (props.color ? "white" : "#21223E")};

    margin-bottom: 30px;
  }
`;

const Events = () => {
  const color = useSelector((state) => state.pageReducer.color);

  const [data, setData] = useState(dataBase);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(6);

  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = data.slice(firstDataIndex, lastDataIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prewPage = () => setCurrentPage((prev) => prev - 1);

  const addDataPerPage = () => setDataPerPage((prev) => prev + 3);

  return (
    <>
      <StyledEvents color={color}>
        <div className="mainBlockEvents">
          <div className="headerEvents">
            <span className="headerEvensText">Event</span>
            <div className="headerEventsNotification">
              <div className="iconNotification">{iconNotification}</div>
              <div className="textBlockNotification">
                <span className="textNotification">
                  You have 4 new notifications
                </span>
                <div className="markTextNotification">Mark All Read</div>
              </div>
            </div>
          </div>
          <div className="mainEventCard">
            {currentData &&
              currentData.map((item) => {
                return (
                  <CardEvent
                    newEvent={item.newEvent}
                    date={item.date}
                    user={item.invite.user}
                    group={item.invite.group}
                    userMail={item.invite.mail}
                    acceptCommend={item.acceptCommend}
                    comment={item.invite.comment}
                    acceptGroup={item.acceptGroup}
                    image={item.image}
                  />
                );
              })}
          </div>
          <div className="deleteEvent">
            <button className="deleteEventButton" onClick={() => setData("")}>
              Delete everything
            </button>
          </div>
          <div className="paginationBlock" color={color}>
            <Pagination
              dataPerPage={dataPerPage}
              totalData={data?.length}
              paginate={paginate}
              nextPage={nextPage}
              prewPage={prewPage}
            />
            <div className="divider"></div>
            <button className="buttonRefresh" onClick={() => addDataPerPage()}>
              <span>Показать еще</span>
              <SVGgeneral id="iconRefresh" />
            </button>
          </div>
        </div>
      </StyledEvents>
    </>
  );
};

export { Events };
