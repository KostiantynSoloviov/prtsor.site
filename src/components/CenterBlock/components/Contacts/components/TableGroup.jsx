import styled from "styled-components";
import React from "react";

import { useState } from "react";

import { SVGgeneral } from "../../../../../utils/generalSprite";
import { Pagination } from "../../MainBlock/components/MainCardBlock/components/Pagination";

import { useSelector } from "react-redux";

const StyledTableGroupBlock = styled.div`
  .tableGroupMainText {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0 24px 0;
    color: ${(props) => (props.color ? "white" : "#21223E")};
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }

  .addGroup {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 13px;
    line-height: 17px;

    color: ${(props) => (props.color ? "white" : "#21223E")};

    height: 33px;
    width: 132px;
    border-radius: 32px;
    background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
    border: 1px solid #404bd9;
  }

  .tableGroupBlock {
    width: 864px;
    height: 52px;
    border-radius: 32px;

    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    .tableGroupBlock {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
    }

    .tableGroupNameBlock {
      display: grid;
      grid-template-columns: 55px 1fr;
      align-items: center;
    }

    .textName {
      color: #757ffa;
    }

    &:nth-child(2n + 1) {
      background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
    }
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

  .arrowButton {
    cursor: pointer;
    margin-left: 15px;
    border: none;
  }

  .arrowButtonGroup {
    width: 55px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .arrowButtonBlockText {
    font-weight: 350;
    font-size: 13px;
    line-height: 17px;

    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
  }

  .arrowButtonBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 960px) {
    .tableGroupMainText {
      font-weight: 600;
      font-size: 20px;
      line-height: 27px;
      margin-left: 12px;
    }

    .addGroup {
      margin-right: 12px;
    }

    .tableGroupBlock {
      height: 52px;
      width: 324px;
      border-radius: 4px;
    }

    .arrowButtonGroup {
      margin-left: 20px;

      .arrowButton {
        border: none;
      }
    }
  }
`;

const TableGroup = ({ dataBaseTableGroup, createGroups }) => {
  const color = useSelector((state) => state.pageReducer.color);
  const width = useSelector((state) => state.pageReducer.width);
  const [openCard, setOpenCard] = useState(false);
  const [data, setData] = useState(dataBaseTableGroup);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(4);

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
      <StyledTableGroupBlock color={color}>
        <div className="tableGroupMainText">
          <span>Groups</span>
          <button className="addGroup" onClick={() => createGroups()}>
            <SVGgeneral
              id="iconContactGroup"
              style={{
                paddingRight: 7,
                height: 12,
                width: 17,
                fill: color ? "#FFFFFF" : "#21223E",
              }}
            />
            <span>Add group</span>
          </button>
        </div>
        <div className="tableGroupMainBlock" color={color}>
          {currentData &&
            currentData.map((item) => {
              return (
                <div className="tableGroupBlock" color={color}>
                  <div className="tableGroupNameBlock">
                    <SVGgeneral
                      id="iconEventAvatar"
                      style={{
                        fill: color ? "#8C8EB0" : "#F5A8A8",
                        height: 32,
                        paddingLeft: 10,
                      }}
                    />
                    <span className="textName">{item.group}</span>
                  </div>
                  <div className="arrowButtonBlock">
                    {width === "small" ? null : (
                      <div className="arrowButtonBlockText">Show members</div>
                    )}
                    <div className="arrowButtonGroup">
                      <div
                        className="arrowButton"
                        onClick={() => setOpenCard(!openCard)}
                      >
                        {openCard ? (
                          <SVGgeneral
                            id="arrowUp"
                            style={{ height: 4, width: 7 }}
                          />
                        ) : (
                          <SVGgeneral
                            id="arrowDown"
                            style={{ height: 4, width: 7 }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
            <span>???????????????? ??????</span>
            <SVGgeneral id="iconRefresh" />
          </button>
        </div>
      </StyledTableGroupBlock>
    </>
  );
};

export { TableGroup };
