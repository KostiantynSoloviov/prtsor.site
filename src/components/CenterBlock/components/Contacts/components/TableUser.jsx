import styled from "styled-components";
import React from "react";

import { useState } from "react";

import { SVGgeneral } from "../../../../../utils/generalSprite";
import { Pagination } from "../../MainBlock/components/MainCardBlock/components/Pagination";

import { useSelector } from "react-redux";

const StyledTableUserBlock = styled.div`
  .tableUserMainText {
    margin: 32px 0 24px 0;
    color: white;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }

  .tableUserHeader {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: #64657a;
    width: 864px;

    display: grid;
    grid-template-columns: 268px 231px 1fr;
    margin-bottom: 20px;

    .userName {
      margin-left: 10px;
    }
  }

  .tableUserBlock {
    width: 864px;
    height: 52px;
    border-radius: 32px;

    display: grid;
    grid-template-columns: 268px 231px 1fr;
    align-items: center;

    .tableGroupBlock {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
    }

    .tableUserGroup {
      color: #ffffff;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      margin-right: 8px;
      height: 24px;
      border-radius: 24px;
      padding: 4px 16px 4px 16px;
      background-color: #35c789;
    }

    .tableUserNameBlock {
      display: grid;
      grid-template-columns: 55px 1fr;
      align-items: center;
    }

    .textMail {
      color: #ffffff;
    }

    .textName {
      color: #757ffa;
    }

    &:nth-child(2n + 1) {
      background-color: #373854;
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
`;

const TableUser = ({ dataBaseTableUser }) => {
  const color = useSelector((state) => state.pageReducer.color);
  const [data, setData] = useState(dataBaseTableUser);
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
      <StyledTableUserBlock color={color}>
        <div className="tableUserMainText">
          <span>Users</span>
        </div>
        <div className="tableUserHeader">
          <span className="userName">Username</span>
          <span>Email</span>
          <span>Included in groups</span>
        </div>
        <div className="tableUserMainBlock">
          {currentData &&
            currentData.map((item) => {
              return (
                <div className="tableUserBlock">
                  <div className="tableUserNameBlock">
                    <SVGgeneral
                      id="iconEventAvatar"
                      style={{ fill: "#8C8EB0", height: 32, paddingLeft: 10 }}
                    />
                    <span className="textName">{item.user.name}</span>
                  </div>
                  <div>
                    <span className="textMail">{item.user.mail}</span>
                  </div>
                  <div className="tableGroupBlock">
                    {item.user.group.map((item) => {
                      return (
                        <div className="tableUserGroup">
                          <span>{item}</span>
                        </div>
                      );
                    })}
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
            <span>Показать еще</span>
            <SVGgeneral id="iconRefresh" />
          </button>
        </div>
      </StyledTableUserBlock>
    </>
  );
};

export { TableUser };
