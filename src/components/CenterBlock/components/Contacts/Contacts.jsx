import styled from "styled-components";
import React, { useState } from "react";
import { SVGgeneral } from "../../../../utils/generalSprite";
import { TableUser } from "./components/TableUser";
import { TableGroup } from "./components/TableGroup";
import { dataBaseTableUser } from "./components/dataBaseTable";

import { useSelector } from "react-redux";

const StyledContactsPage = styled.div`
  width: 944px;
  border-radius: 20px;
  background-color: #21223e;
  margin-bottom: 100px;

  .contactModal {
    position: absolute;
    height: 195px;
    width: 496px;
    left: 530px;
    top: 346px;
    border-radius: 16px;
    background-color: #373854;
    border: 1px solid #505169;

    .contactModalMainBlock {
      padding: 20px;
    }

    .contactModalHeaderText {
      font-weight: 600;
      font-size: 17px;
      line-height: 23px;

      color: #ffffff;
    }

    .contactInputWrapper {
      height: 38px;
      width: 432px;

      position: relative;
      margin-top: 24px;

      .text {
        font-family: "Segoe UI";
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 23px;
        color: ${(props) => (props.color ? "white" : "#21223E")};

        margin-left: 35px;
      }

      .input {
        font-family: "Segoe UI";
        font-style: normal;
        font-weight: 350;
        font-size: 15px;
        line-height: 22px;

        color: ${(props) => (props.color ? "white" : "#21223E")};
        border-radius: 32px;
        background-color: ${(props) => (props.color ? "#FFFFFF" : "white")};
        height: 38px;
        width: 432px;

        padding: 0 0px 0 10px;
        font-size: 15px;
        border: ${(props) =>
          props.color ? `1px solid #505169` : `1px solid #FBEBEB`};
        margin-bottom: 10px;
        outline: none;
        width: 100%;
      }

      .inputAddGroup {
        font-family: "Segoe UI";
        font-style: normal;
        font-weight: 350;
        font-size: 15px;
        line-height: 22px;

        color: ${(props) => (props.color ? "white" : "#21223E")};
        border-radius: 32px;
        background-color: ${(props) => (props.color ? "#373854" : "white")};
        height: 38px;
        width: 432px;

        padding: 0 0px 0 10px;
        font-size: 15px;
        border: ${(props) =>
          props.color ? `1px solid #505169` : `1px solid #FBEBEB`};
        margin-bottom: 10px;
        outline: none;
        width: 100%;
      }

      .inputIcon {
        position: absolute;
        width: 17px;
        height: 17px;
        right: 0;
        top: 12px;
      }

      .input:focus {
        border-color: white;
      }
    }

    .buttonGroup {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      font-weight: 350;
      font-size: 15px;
      line-height: 22px;
      color: white;

      .buttonCancel {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        height: 38px;
        width: 84px;
        border-radius: 32px;
        padding: 10px 32px 10px 32px;
        background-color: #373854;
      }

      .buttonOk {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid #404bd9;
        height: 38px;
        width: 84px;
        border-radius: 32px;
        padding: 10px 32px 10px 32px;
        background-color: #404bd9;
      }
    }
  }

  .mainContactBlock {
    padding: 32px 40px 32px 40px;
  }

  .headerContactBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 32px;
  }

  .headerContactText {
    color: white;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }

  .inputWrapper {
    height: 33px;
    width: 344px;
    position: relative;
    margin-right: 20px;

    .text {
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 23px;
      color: ${(props) => (props.color ? "white" : "#21223E")};

      margin-left: 35px;
    }

    .input {
      font-family: "Segoe UI";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;

      color: ${(props) => (props.color ? "white" : "#21223E")};
      border-radius: 20px;
      background-color: ${(props) => (props.color ? "#21223e" : "white")};
      height: 33px;
      width: 344px;

      padding: 0 0px 0 10px;
      font-size: 15px;
      border: ${(props) =>
        props.color ? `1px solid #373854` : `1px solid #FBEBEB`};
      margin-bottom: 10px;
      outline: none;
      width: 100%;
    }

    .inputIcon {
      position: absolute;
      width: 17px;
      height: 17px;
      right: 0;
      top: 8px;
    }

    .input:focus {
      border-color: white;
    }
  }

  .headerContactButton {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    border: none;
    height: 33px;
    width: 132px;
    border-radius: 32px;
    background-color: #404bd9;
    color: white;

    .contactButtonText {
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
      margin-left: 8px;
    }
  }

  .contactMenuBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 32px;
    height: 102px;
    width: 864px;
    border-radius: 12px;
    background-color: #373854;

    .activeContactButton {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      cursor: pointer;
      margin-left: 32px;
      height: 38px;
      width: 215px;

      border-radius: 32px;
      padding: 10px 24px 10px 24px;
      background-color: #404bd9;
      border: 1px solid #404bd9;
      color: white;
    }

    .contactButton {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      cursor: pointer;
      margin-left: 32px;
      height: 38px;
      width: 215px;

      border-radius: 32px;
      padding: 10px 24px 10px 24px;
      background-color: #373854;
      border: 1px solid #404bd9;
      color: white;
    }

    .textButton {
      font-weight: 350;
      font-size: 15px;
      line-height: 22px;

      margin-left: -17px;
    }
  }
`;

const Contacts = () => {
  const color = useSelector((state) => state.pageReducer.color);
  const [control, setControl] = useState("user");
  const [modalWindowOpen, setModalWindowOpen] = useState(false);
  const [modalWindowOpenGroups, setModalWindowOpenGroups] = useState(false);

  const addContact = (el) => {
    setModalWindowOpen(el);
  };

  const createGroups = () => {
    setModalWindowOpenGroups(!modalWindowOpenGroups);
  };

  return (
    <>
      <StyledContactsPage color={color}>
        <div className="mainContactBlock">
          {modalWindowOpen && (
            <div className="contactModal">
              <div className="contactModalMainBlock">
                <div className="contactModalHeaderText">
                  <span>Add contact</span>
                </div>
                <div className="contactInputWrapper">
                  <input
                    type="text"
                    className="input"
                    placeholder="Find contact"
                  />
                  <div className="inputIcon">
                    <SVGgeneral id="iconSearchInput" />
                  </div>
                </div>
                <div className="buttonGroup">
                  <button
                    className="buttonCancel"
                    onClick={() => addContact(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="buttonOk"
                    onClick={() => addContact(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
          {modalWindowOpenGroups && (
            <div className="contactModal" style={{ height: 241, width: 496 }}>
              <div className="contactModalMainBlock">
                <div className="contactModalHeaderText">
                  <span>Create group</span>
                </div>
                <div className="contactInputWrapper">
                  <input
                    type="text"
                    className="inputAddGroup"
                    placeholder="Name group"
                  />
                  <div className="inputIcon">
                    <SVGgeneral id="iconSearchInput" />
                  </div>
                </div>
                <div className="contactInputWrapper" style={{ marginTop: 8 }}>
                  <input
                    type="text"
                    className="input"
                    placeholder="Find contact"
                  />
                  <div className="inputIcon">
                    <SVGgeneral id="iconSearchInput" />
                  </div>
                </div>
                <div className="buttonGroup">
                  <button
                    className="buttonCancel"
                    onClick={() => setModalWindowOpenGroups(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="buttonOk"
                    onClick={() => setModalWindowOpenGroups(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="headerContactBlock">
            <span className="headerContactText">Contact database</span>
            <div className="inputWrapper">
              <input type="text" className="input" placeholder="Search tag" />
              <div className="inputIcon">
                <SVGgeneral id="iconSearchInput" />
              </div>
            </div>
            <button
              className="headerContactButton"
              onClick={() => addContact(!modalWindowOpen)}
            >
              <SVGgeneral id="iconAddContact" />
              <span className="contactButtonText">Add contact</span>
            </button>
          </div>
          <div className="contactMenuBlock">
            <button
              className={
                control === "user" ? "activeContactButton" : "contactButton"
              }
              onClick={() => setControl("user")}
            >
              <SVGgeneral id="iconContactUser" />
              <span className="textButton">All Contacts</span>
              <span>{dataBaseTableUser ? dataBaseTableUser.length : ""}</span>
            </button>
            <button
              className={
                control === "group" ? "activeContactButton" : "contactButton"
              }
              onClick={() => setControl("group")}
            >
              <SVGgeneral id="iconContactGroup" />
              <span className="textButton">All Groups</span>
              <span>12</span>
            </button>
          </div>
          {control === "user" && (
            <TableUser dataBaseTableUser={dataBaseTableUser} />
          )}
          {control === "group" && (
            <TableGroup
              dataBaseTableUser={dataBaseTableUser}
              createGroups={createGroups}
            />
          )}
        </div>
      </StyledContactsPage>
    </>
  );
};

export { Contacts };
