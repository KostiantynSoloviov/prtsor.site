import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Pagination } from "./components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { CardVarianTwo } from "./components/CardVariantTwo";
import { SVGgeneral } from "../../../../../../utils/generalSprite";

const StyledMainCrdBlock = styled.div`
  .cardVariantTwo {
    margin-top: 48px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
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
    width: 944px;
    background-color: ${(props) => (props.color ? "#21223e" : "#FBEBEB")};
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

  .cardBlockVariantThree {
    margin-top: 48px;

    .mainDateBlock {
      margin-bottom: 11px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      height: 33px;
    }

    .dateCard {
      margin-left: 30px;
      font-weight: 600;
      font-size: 17px;
      line-height: 23px;

      color: ${(props) => (props.color ? "white" : "#21223E")};
    }

    .buttonGroup {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: center;
      width: 400px;
    }

    .buttonDate {
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;

      color: ${(props) => (props.color ? "white" : "#21223E")};
      cursor: pointer;
      border: ${(props) =>
        props.color ? `1px solid #373854` : `1px solid #EFEFEF`};
      height: 33px;
      width: 107px;
      border-radius: 32px;

      border-radius: 32px;
      background-color: ${(props) => (props.color ? "#21223e" : "#FBEBEB")};
    }

    .underButton {
      margin: 0 10px 0 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      height: 17px;
      width: 13px;

      font-weight: 400;
      font-size: 13px;
      line-height: 17px;

      color: ${(props) => (props.color ? "white" : "#21223E")};
    }

    .allDate {
      margin: 0 20px 0 24px;
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
      text-decoration-line: underline;

      color: ${(props) => (props.color ? "white" : "#21223E")};
    }
  }
`;

const MainCrdBlock = ({ imageData }) => {
  const [data, setData] = useState(imageData);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(3);
  const searchTypes = useSelector((state) => state.pageReducer.view);

  const color = useSelector((state) => state.pageReducer.color);

  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = data.slice(firstDataIndex, lastDataIndex);

  useEffect(() => {
    if (searchTypes === "View") {
      setDataPerPage(3);
    } else {
      setDataPerPage(9);
    }
  }, [searchTypes]);

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
      <StyledMainCrdBlock color={color}>
        {currentData &&
          searchTypes === "View" &&
          currentData.map((item) => {
            return (
              <Card
                tags={item.card.tags}
                scr={item.scr}
                alt={item.alt}
                titlePageTag={item.card.titlePageTag}
                textPageTag={item.card.textPageTag}
                users={item.card.users}
                date={item.date}
                time={item.time}
              />
            );
          })}
        {currentData && searchTypes === "ViewVariant2" && (
          <div className="cardVariantTwo">
            {currentData.map((item) => {
              return (
                <CardVarianTwo
                  tags={item.card.tags}
                  scr={item.scr}
                  alt={item.alt}
                  titlePageTag={item.card.titlePageTag}
                  textPageTag={item.card.textPageTag}
                  users={item.card.users}
                  date={item.date}
                  time={item.time}
                />
              );
            })}
          </div>
        )}
        {currentData && searchTypes === "ViewVariant3" && (
          <div className="cardBlockVariantThree">
            <div className="mainDateBlock">
              <div className="dateCard">
                <span>04 April 2021</span>
              </div>
              <div className="buttonGroup">
                <button className="buttonDate">04-04-2021</button>
                <div className="underButton">
                  <span>—</span>
                </div>
                <button className="buttonDate">04-04-2021</button>
                <div className="allDate">
                  <span>All dates</span>
                </div>
              </div>
            </div>
            <div className="divider" style={{ margin: 0 }}></div>
            <div className="cardVariantTwo">
              {currentData.map((item) => {
                return (
                  <CardVarianTwo
                    tags={item.card.tags}
                    scr={item.scr}
                    alt={item.alt}
                    titlePageTag={item.card.titlePageTag}
                    textPageTag={item.card.textPageTag}
                    users={item.card.users}
                    date={item.date}
                    time={item.time}
                  />
                );
              })}
            </div>
          </div>
        )}
        <div className="paginationBlock" color={color}>
          <Pagination
            dataPerPage={dataPerPage}
            totalData={data.length}
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
      </StyledMainCrdBlock>
    </>
  );
};

export { MainCrdBlock };
