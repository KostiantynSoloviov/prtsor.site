import styled from "styled-components";
import React from "react";

import { iconNextPage, iconPrewPage } from "../../../../../../../image/icons";

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 48px;
  height: 42px;
  width: 316px;

  .paginationNumber {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 42px;
    width: 216px;
    border-radius: 24px;
    background-color: #21223e;
    color: white;
  }

  .pageItems {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0 15px 0 15px;
  }

  .pageItem {
    cursor: pointer;
    margin: 0 5px 0 5px;
  }

  .ArrowPage {
    margin: 0 8px 0 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    width: 42px;
    border-radius: 24px;
    background-color: #21223e;
  }
`;

const Pagination = ({
  dataPerPage,
  totalData,
  paginate,
  nextPage,
  prewPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <StyledPagination>
        <div className="ArrowPage" onClick={() => prewPage()}>
          {iconPrewPage}
        </div>
        <div className="paginationNumber">
          <div className="pageItems">
            {pageNumbers.map((number) => {
              return (
                <div
                  className="pageItem"
                  key={number}
                  onClick={() => paginate(number)}
                >
                  {number}
                </div>
              );
            })}
          </div>
        </div>
        <div className="ArrowPage" onClick={() => nextPage()}>
          {iconNextPage}
        </div>
      </StyledPagination>
    </>
  );
};

export { Pagination };
