import styled from "styled-components";
import React from "react";
import {
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { SVGgeneral } from "../../../../utils/generalSprite";

const StyledSetting = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  grid-gap: 12px;
  height: 404px;
  width: 944px;
  border-radius: 20px;
  background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};

  .text {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;

    color: ${(props) => (props.color ? "white" : "#21223E")};

    margin: -10px 0 30px 0;
  }

  .inputGroup {
    height: 38px;
    width: 870px;
  }

  .input {
    font-size: 15px;
    font-weight: 350;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    width: 650px;
    height: 32px;
    border: 2px solid white;
    margin-right: 2px;
  }

  .inputLeftAddon {
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 16px 0 0 16px;
    background-color: ${(props) => (props.color ? "#c2c4e5" : "#FDDBDB")};
    color: #505169;
    border-right: ${(props) => (props.color ? `2px solid #505169` : "none")};
  }

  .inputRightAddon {
    font-family: Segoe UI;
    font-size: 15px;
    font-weight: 350;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    width: 98px;
    background-color: #404bd9;
    border-radius: 0 16px 16px 0;
    /* border-left: 2px solid #404BD9; */
    cursor: pointer;
  }

  .textArea {
    font-family: Segoe UI;
    font-size: 15px;
    font-weight: 350;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    margin-left: 30px;
    color: ${(props) => (props.color ? "white" : "#707088")};
    height: 44px;
    width: 738px;
  }

  @media (max-width: 960px) {
    height: 503px;
    width: 340px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 40px;

    .text {
      font-weight: 600;
      font-size: 20px;
      line-height: 27px;
      margin-top: 20px;

      margin-right: 210px;
      margin-bottom: 6px;
    }

    .inputWrapper {
      height: 35px;
      width: 300px;
      position: relative;

      .inputBlock {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
      }

      .input {
        font-family: "Segoe UI";
        font-style: normal;
        font-weight: 350;
        font-size: 15px;
        line-height: 22px;

        color: ${(props) => (props.color ? "#21223E" : "#21223E")};
        border-radius: 32px;
        background-color: ${(props) => (props.color ? "white" : "white")};
        height: 35px;
        width: 300px;
        padding: 0 0px 0 10px;
        font-size: 15px;
        border: ${(props) => (props.color ? "none" : `1px solid #FBEBEB`)};
        margin-bottom: 10px;
        outline: none;
        width: 100%;
      }

      .inputButton {
        position: absolute;

        right: -8px;
        top: 2px;

        .copyButton {
          border: none;
          cursor: pointer;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;

          color: #ffffff;
          height: 32px;
          width: 46px;
          border-radius: 24px;

          padding: 4px 0px 4px 16px;
          background-color: #404bd9;
        }
      }

      .input:focus {
        border-color: white;
      }
    }

    .textArea {
      height: 75px;
      width: 310px;
      font-weight: 350;
      font-size: 13px;
      line-height: 17px;
      margin-right: 20px;
      margin-top: 10px;
    }

    .textSmallBlock {
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;

      color: #ffffff;

      margin-bottom: 8px;
      margin-left: 10px;
    }
  }
`;

const Setting = () => {
  const color = useSelector((state) => state.pageReducer.color);
  const width = useSelector((state) => state.pageReducer.width);

  return (
    <>
      <StyledSetting color={color}>
        <div className="text">
          <span>Settings</span>
        </div>
        <div>
          {width === "small" ? (
            <>
              <div className="textSmallBlock">
                <span>Username</span>
              </div>
              <div className="inputWrapper">
                <input type="text" className="input" placeholder="User 5" />
                <div className="inputButton">
                  <button className="copyButton">
                    <SVGgeneral id="iconApproveSmall" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <InputGroup className="inputGroup" size="sm">
              <InputLeftAddon
                color={color}
                style={{ width: 121 }}
                className="inputLeftAddon"
                children="Username:"
              />
              <Input
                style={{ width: 650 }}
                className="input"
                placeholder="User 5"
              />
              <InputRightAddon
                color={color}
                className="inputRightAddon"
                onClick={() => console.log("TEST")}
                children="Change"
              />
            </InputGroup>
          )}
        </div>
        <div>
          {width === "small" ? (
            <>
              <div className="textSmallBlock">
                <span>Generate pincode to link another profile:</span>
              </div>
              <div className="inputWrapper">
                <input type="text" className="input" placeholder="" />
                <div className="inputButton">
                  <button className="copyButton">
                    <SVGgeneral id="iconApproveSmall" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <InputGroup className="inputGroup" size="sm">
              <InputLeftAddon
                color={color}
                style={{ width: 326 }}
                className="inputLeftAddon"
                children="Generate pincode to link another profile:"
              />
              <Input style={{ width: 458 }} className="input" placeholder="" />
              <InputRightAddon
                color={color}
                className="inputRightAddon"
                onClick={() => console.log("TEST")}
                children="Generate"
              />
            </InputGroup>
          )}
        </div>
        <div>
          {width === "small" ? (
            <>
              <div className="textSmallBlock">
                <span>Link your account to another user:</span>
              </div>
              <div className="inputWrapper">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter pincode"
                />
                <div className="inputButton">
                  <button className="copyButton">
                    <SVGgeneral id="iconApproveSmall" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <InputGroup className="inputGroup" size="sm">
              <InputLeftAddon
                color={color}
                style={{ width: 282 }}
                className="inputLeftAddon"
                children="Link your account to another user:"
              />
              <Input
                style={{ width: 498 }}
                className="input"
                placeholder="Enter pincode"
              />
              <InputRightAddon
                color={color}
                className="inputRightAddon"
                onClick={() => console.log("TEST")}
                children="Link"
              />
            </InputGroup>
          )}
        </div>
        <div className="textArea">
          <span>
            If you have another account with this email, all your data will be
            restored by sending on your email adress pincode. Please, enter this
            pincode from your email in settings below.
          </span>
        </div>
        <div>
          {width === "small" ? (
            <>
              <div className="textSmallBlock">
                <span>Change your email adress:</span>
              </div>
              <div className="inputWrapper">
                <input
                  type="text"
                  className="input"
                  placeholder="jj1981ua@gmail.com"
                />
                <div className="inputButton">
                  <button className="copyButton">
                    <SVGgeneral id="iconApproveSmall" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <InputGroup className="inputGroup" size="sm">
              <InputLeftAddon
                style={{ width: 227 }}
                className="inputLeftAddon"
                children="Change your email address:"
              />
              <Input
                style={{ width: 549 }}
                className="input"
                placeholder="jj1981ua@gmail.com"
              />
              <InputRightAddon
                className="inputRightAddon"
                onClick={() => console.log("TEST")}
                children="Set"
              />
            </InputGroup>
          )}
        </div>
      </StyledSetting>
    </>
  );
};

export { Setting };
