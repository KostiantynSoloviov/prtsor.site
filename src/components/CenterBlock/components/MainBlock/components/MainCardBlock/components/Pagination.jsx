import styled from "styled-components";
import React from "react";

import { iconNextPage, iconPrewPage } from "../../../../../../../image/icons";
import { useSelector } from "react-redux";

import { SVGgeneral } from "../../../../../../../utils/generalSprite";

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
    background-color: ${(props) => (props.color ? "#21223e" : "white")};
    color: ${(props) => (props.color ? "white" : "#21223E")};
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
    border: ${(props) => (props.color ? "none" : `1px solid #404BD9`)};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    width: 42px;
    border-radius: 24px;
    background-color: ${(props) => (props.color ? "#21223e" : "white")};
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
  const color = useSelector((state) => state.pageReducer.color);

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <StyledPagination color={color}>
        <div className="ArrowPage" onClick={() => prewPage()} color={color}>
          <SVGgeneral
            id="iconPrewPage"
            style={{ fill: color ? "#FFFFFF" : "#21223E" }}
          />
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
        <div className="ArrowPage" onClick={() => nextPage()} color={color}>
          <SVGgeneral
            id="iconNextPage"
            style={{ fill: color ? "#FFFFFF" : "#21223E" }}
          />
        </div>
      </StyledPagination>
    </>
  );
};

export { Pagination };
