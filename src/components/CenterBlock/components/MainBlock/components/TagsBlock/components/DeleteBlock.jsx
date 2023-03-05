import React from "react";
import styled from "styled-components";

const StyledDeleteBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;

  position: absolute;
  height: 179px;
  width: 396px;
  left: 275px;
  top: 120px;
  border-radius: 16px;
  background-color: #373854;
  border: 1px solid #505169;
  z-index: 6;

  .textDeleteBlock {
    height: 23px;
    width: 188px;

    font-weight: 600;
    font-size: 17px;
    line-height: 23px;

    text-align: center;

    color: #ffffff;
    margin-top: 32px;
  }

  .deleteButtonBlock {
  }

  .buttonDelete {
    margin-top: 20px;
    height: 38px;
    width: 136px;
    border-radius: 32px;
    padding: 10px 32px 10px 32px;
    background-color: #dc3545;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  .buttonCancel {
    height: 38px;
    width: 136px;
    border-radius: 32px;
    padding: 10px 32px 10px 32px;
    background-color: #373854;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;

const DeleteBlock = ({ approveDeleteBlock, closeDeleteBlock }) => {
  return (
    <StyledDeleteBlock>
      <div className="textDeleteBlock">
        <span>You want to delete a tag</span>
      </div>
      <div className="deleteButtonBlock">
        <button className="buttonDelete" onClick={() => approveDeleteBlock()}>
          Yes, Delete
        </button>
      </div>
      <div className="cancelButtonBlock">
        <button className="buttonCancel" onClick={() => closeDeleteBlock()}>
          Cancel
        </button>
      </div>
    </StyledDeleteBlock>
  );
};

export { DeleteBlock };
