import styled from "styled-components";
import React, { useState } from "react";
import { Card } from "./components/Card";
import { Pagination } from "./components/Pagination";
import { iconRefresh } from "../../../../../../image/icons";

const StyledMainCrdBlock = styled.div`
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
    background-color: #21223e;
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
    background-color: #21223e;
    border: none;
    color: white;

    margin-bottom: 30px;
  }
`;

const MainCrdBlock = ({ imageData }) => {
  const [data, setData] = useState(imageData);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(3);

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
      <StyledMainCrdBlock>
        {currentData &&
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
        <div className="paginationBlock">
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
            {iconRefresh}
          </button>
        </div>
      </StyledMainCrdBlock>
    </>
  );
};

export { MainCrdBlock };
