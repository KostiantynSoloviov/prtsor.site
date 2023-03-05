import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

import { imageData } from "../CenterBlock/components/MainBlock/imageData";
import { SVGgeneral } from "../../utils/generalSprite";

const StyledCollagePage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 130px);
  height: calc(100% - 130px);
  background-color: ${(props) => (props.color ? "#121417" : "#FFFFFF")};

  .collageMainBlock {
    width: 944px;
  }

  .collageBlock {
    display: grid;
    grid-template-columns: 448px 448px;
    align-content: center;
    justify-content: center;
    grid-gap: 15px;
    margin-top: 40px;
    position: relative;
    height: 579px;
    width: 944px;
    border-radius: 20px;
    background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
  }

  .collageBlocks {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 266px;
    width: 448px;
    border-radius: 8px;
    border: 1px solid #c9c9c966;
  }

  .collageLittleBlock {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 72px;
    width: 72px;
    border-radius: 4px;
    border: 1px dashed #c9c9c9cc;
  }

  .img {
    border-radius: 20px;
    max-width: 100%;
    height: 100%;
  }

  .collageTitle {
    margin: 11px 0 0 12px;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    color: ${(props) => (props.color ? "#e0e8f3" : "#21223E")};
  }

  .imageChangeBlock {
    opacity: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 42px;
    width: 396px;

    background-color: ${(props) => (props.color ? "#f9f9f9" : "#FFFFFF")};
    position: absolute;
    border-radius: 32px;
    top: 515px;
    left: 275px;
  }

  .iconDiv {
    cursor: pointer;
    border: none;
    width: 30px;
    height: 20px;
    background-color: #f9f9f9;
  }

  .collageDescription {
    margin: 8px 0 0 12px;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    color: ${(props) => (props.color ? "#e0e8f3" : "#21223E")};
  }

  .editingImageBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
    height: 80px;
    width: 944px;
    border-radius: 20px;
    background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};

    .wrongSvg {
      margin: 0 4px 0 4px;
      border-radius: 10px;
      background-color: ${(props) => (props.color ? "#373854" : "#FDDBDB")};
      border: none;
      cursor: pointer;
    }

    .editingButton {
      margin: 0 4px 0 4px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      height: 48px;
      width: 48px;
      border-radius: 10px;
      background-color: ${(props) => (props.color ? "#373854" : "#FDDBDB")};
      border: none;
      cursor: pointer;
    }
  }
  .linksBlock {
    width: 935px;
    margin-top: 44px;
    border-radius: 0px;
  }

  .inputGroup {
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    .textInputGroup {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;

      color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
    }
  }

  .iconPencilChangeText {
    cursor: pointer;
    border: none;
    background-color: ${(props) => (props.color ? "#121417" : "#FFFFFF")};
  }

  .inputWrapper {
    height: 38px;
    width: 750px;
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

      color: ${(props) => (props.color ? "#FFFFFF" : "#21223E")};
      border-radius: 32px;
      background-color: ${(props) => (props.color ? "#21223e" : "white")};
      height: 38px;
      width: 750px;
      padding: 0 0px 0 10px;
      font-size: 15px;
      border: ${(props) => (props.color ? "none" : `1px solid #FBEBEB`)};
      margin-bottom: 10px;
      outline: none;
      width: 100%;
    }

    .inputButton {
      position: absolute;

      right: -5px;
      top: 5px;

      .copyButton {
        border: none;
        cursor: pointer;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;

        color: #ffffff;
        height: 28px;
        width: 75px;
        border-radius: 20px;
        padding: 4px 20px 4px 20px;
        background-color: #404bd9;
      }
    }

    .input:focus {
      border-color: white;
    }
  }

  .commentTextBlock {
    margin: 64px 0 24px 0;
    font-weight: 600;
    font-size: 32px;
    line-height: 43px;

    color: ${(props) => (props.color ? "#e0e8de" : "#21223E")};
  }

  .commentsBlock {
    width: 944px;
    border-radius: 32px;
    background-color: ${(props) => (props.color ? "#21223e" : "#FFF6F6")};
    margin-bottom: 40px;

    .commentMainBlock {
      padding: 32px;
    }

    .inputComments {
      font-weight: 350;
      font-size: 15px;
      line-height: 22px;

      padding: 24px 28px 24px 28px;
      font-size: 15px;
      border: none;
      margin-bottom: 10px;
      outline: none;
      resize: none;
      height: 170px;
      width: 824px;
      border-radius: 24px;
      background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
      color: ${(props) => (props.color ? "#FFFFFF" : "#21223E")};
    }

    .buttonComment {
      height: 38px;
      width: 120px;
      cursor: pointer;
      border-radius: 32px;
      border: 1px solid #404bd9;
      background-color: ${(props) => (props.color ? "#21223e" : "white")};
      color: ${(props) => (props.color ? "#FFFFFF" : "#21223E")};
      margin-bottom: 25px;
    }

    .commentBlock {
      width: 880px;

      .blockUserComment {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        height: 152px;
        width: 880px;
        border-radius: 24px;
        background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
      }

      .iconEclipse {
        position: absolute;
        top: 28px;
        left: -5px;
      }

      .stick {
        position: absolute;
        height: 2px;
        width: 18px;
        left: -18px;
        top: 33px;
        border-radius: 0px;
        background-color: ${(props) => (props.color ? "#373854" : "#FFE3E3")};
      }

      .textUserComment {
        margin: 11px 20px 28px 20px;
        font-weight: 350;
        font-size: 15px;
        line-height: 20px;

        color: ${(props) => (props.color ? "#898aa4" : "#707088")};
      }

      .informationUser {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;

        .textName {
          font-weight: 400;
          font-size: 13px;
          line-height: 17px;

          color: #898e97;
        }

        .testFrom {
          color: #757ffa;
        }
      }

      .buttonReply {
        color: ${(props) => (props.color ? "#898aa4" : "#707088")};
        margin-right: 24px;
        height: 33px;
        width: 96px;
        border-radius: 32px;
        padding: 8px 32px 8px 32px;
        background-color: ${(props) => (props.color ? "#505172" : "white")};
        cursor: pointer;
        border: ${(props) => (props.color ? "none" : `1px solid #404BD9`)};
      }

      .blockInformationUser {
        width: 890px;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
      }

      .commentsWithUser {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
        margin-bottom: 16px;
      }

      .blockCommentsWithUser {
        width: 861px;
      }

      .leftBlock {
        height: 488px;
        width: 3px;
        border-radius: 12px;
        background-color: ${(props) => (props.color ? "#373854" : "#FFE3E3")};
      }
    }
  }
`;

const Collage = () => {
  const color = useSelector((state) => state.pageReducer.color);
  return (
    <StyledCollagePage color={color}>
      <div className="collageMainBlock">
        <div className="collageBlock">
          <div className="collageBlocks">
            <div className="collageLittleBlock">
              <SVGgeneral id="iconPlus" />
            </div>
          </div>
          <div className="collageBlocks">
            <div className="collageLittleBlock">
              <SVGgeneral id="iconPlus" />
            </div>
          </div>
          <div className="collageBlocks">
            <div className="collageLittleBlock">
              <SVGgeneral id="iconPlus" />
            </div>
          </div>
          <div className="collageBlocks">
            <div className="collageLittleBlock">
              <SVGgeneral id="iconPlus" />
            </div>
          </div>
          <div className="imageChangeBlock">
            <button className="iconDiv">
              <SVGgeneral id="iconHome" />
            </button>
            <button className="iconDiv">
              <SVGgeneral id="iconPencil" />
            </button>
            <button className="iconDiv">
              <SVGgeneral id="iconCopyField" />
            </button>
            <button className="iconDiv">
              <SVGgeneral id="iconShare" />
            </button>
            <button className="iconDiv">
              <SVGgeneral id="iconDownload" />
            </button>
            <button className="iconDiv">
              <SVGgeneral id="iconShareGroup" />
            </button>
            <button className="iconDiv">
              <SVGgeneral id="iconShow" />
            </button>
            <button className="iconDiv">
              <SVGgeneral id="iconDelete" />
            </button>
          </div>
        </div>
        <div className="editingImageBlock">
          <div className="wrongSvg">
            <SVGgeneral
              id="iconPencilEdit"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </div>
          <button className="editingButton">
            <SVGgeneral
              id="iconCrop"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </button>
          <button className="editingButton">
            <SVGgeneral
              id="iconSquare"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </button>
          <button className="editingButton">
            <SVGgeneral
              id="iconLine"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </button>
          <button className="editingButton">
            <SVGgeneral
              id="iconCircle"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </button>
          <div className="wrongSvg">
            <SVGgeneral
              id="iconArrow"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </div>
          <button className="editingButton">
            <SVGgeneral
              id="iconFont"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </button>
          <button className="editingButton">
            <SVGgeneral
              id="iconEmoji"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </button>
          <div className="wrongSvg">
            <SVGgeneral
              id="iconImageCollage"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </div>
          <button className="editingButton">
            <SVGgeneral
              id="iconTittleCollage"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </button>
          <button className="editingButton">
            <SVGgeneral
              id="iconClose"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </button>
          <button className="editingButton">
            <SVGgeneral
              id="iconRefreshCollage"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </button>
          <button className="editingButton">
            <SVGgeneral
              id="iconDocument"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </button>
          <div className="wrongSvg">
            <SVGgeneral
              id="iconSquareCollage"
              style={{ fill: color ? "#C9C9C9" : "#707088" }}
            />
          </div>
        </div>
        <div className="collageTitle">
          <span>{imageData[0].alt}</span>
          <button className="iconPencilChangeText">
            <SVGgeneral id="iconPencilChangeText" />
          </button>
        </div>
        <div className="collageDescription">
          <span>Here is the description of the screenshot</span>
          <button className="iconPencilChangeText">
            <SVGgeneral id="iconPencilChangeText" />
          </button>
        </div>
        <div className="linksBlock">
          <div className="inputGroup">
            <span className="textInputGroup">Link:</span>
            <div className="inputWrapper">
              <input
                type="text"
                className="input"
                placeholder="Search tag"
                value="https://prtscr.site/7bn4"
              />
              <div className="inputButton">
                <button className="copyButton">Copy</button>
              </div>
            </div>
          </div>
          <div className="inputGroup">
            <span className="textInputGroup">Direct link:</span>
            <div className="inputWrapper">
              <input
                type="text"
                className="input"
                placeholder="Search tag"
                value="https://prtscr.site/storage/L/6/4nz.jpg"
              />
              <div className="inputButton">
                <button className="copyButton">Copy</button>
              </div>
            </div>
          </div>
          <div className="inputGroup">
            <span className="textInputGroup">Markdown image:</span>
            <div className="inputWrapper">
              <input
                type="text"
                className="input"
                placeholder="Search tag"
                value="[![Image 7bn4](https://prtscr.site/storage/L/6/4nz.jpg)](https://prtscr.site/7bn4)"
              />
              <div className="inputButton">
                <button className="copyButton">Copy</button>
              </div>
            </div>
          </div>
          <div className="inputGroup">
            <span className="textInputGroup">Image for forum:</span>
            <div className="inputWrapper">
              <input
                type="text"
                className="input"
                placeholder="Search tag"
                value="[url=https://prtscr.site/7bn4][img]https://prtscr.site/storage/L/6/4nz.jpg[/img][/url]"
              />
              <div className="inputButton">
                <button className="copyButton">Copy</button>
              </div>
            </div>
          </div>
          <div className="inputGroup">
            <span className="textInputGroup">Image for website:</span>
            <div className="inputWrapper">
              <input
                type="text"
                className="input"
                placeholder="Search tag"
                value={`<a href="https://prtscr.site/7bn4" target="_blank"><img src="https://prtscr.site/storage/L/6/4nz.jpg"`}
              />
              <div className="inputButton">
                <button className="copyButton">Copy</button>
              </div>
            </div>
          </div>
        </div>
        <div className="commentTextBlock">
          <span>Comments</span>
        </div>
        <div className="commentsBlock">
          <div className="commentMainBlock">
            <div>
              <textarea
                className="inputComments"
                placeholder="Your comment here "
              ></textarea>
            </div>
            <button className="buttonComment">Publish</button>
            <div className="commentBlock">
              <div className="blockUserComment">
                <div className="blockInformationUser">
                  <div className="informationUser">
                    <SVGgeneral
                      id="iconEventAvatar"
                      style={{
                        fill: color ? "#8C8EB0" : "#F5A8A8",
                        height: 28,
                        paddingLeft: 22,
                        paddingRight: 12,
                      }}
                    />
                    <span className="textName">
                      from
                      <span className="testFrom">{` null `}</span>
                      at 2022-12-28 10:37:06
                    </span>
                  </div>
                  <button className="buttonReply">Reply</button>
                </div>
                <div className="textUserComment">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </span>
                </div>
              </div>
              <div className="commentsWithUser">
                <div className="leftBlock"></div>
                <div className="blockCommentsWithUser">
                  <div className="blockUserComment" style={{ width: 860 }}>
                    <div className="stick"></div>
                    <div className="iconEclipse">
                      <SVGgeneral id="iconEclipse" />
                    </div>
                    <div
                      className="blockInformationUser"
                      style={{ width: 860 }}
                    >
                      <div className="informationUser">
                        <SVGgeneral
                          id="iconEventAvatar"
                          style={{
                            fill: color ? "#8C8EB0" : "#F5A8A8",
                            height: 28,
                            paddingLeft: 22,
                            paddingRight: 12,
                          }}
                        />
                        <span className="textName">
                          from
                          <span className="testFrom">{` null `}</span>
                          at 2022-12-28 10:37:06
                        </span>
                      </div>
                      <button className="buttonReply">Reply</button>
                    </div>
                    <div className="textUserComment">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </span>
                    </div>
                  </div>
                  <div
                    className="blockUserComment"
                    style={{ width: 860, marginTop: 16 }}
                  >
                    <div className="stick"></div>
                    <div className="iconEclipse">
                      <SVGgeneral id="iconEclipse" />
                    </div>
                    <div
                      className="blockInformationUser"
                      style={{ width: 860 }}
                    >
                      <div className="informationUser">
                        <SVGgeneral
                          id="iconEventAvatar"
                          style={{
                            fill: color ? "#8C8EB0" : "#F5A8A8",
                            height: 28,
                            paddingLeft: 22,
                            paddingRight: 12,
                          }}
                        />
                        <span className="textName">
                          from
                          <span className="testFrom">{` null `}</span>
                          at 2022-12-28 10:37:06
                        </span>
                      </div>
                      <button className="buttonReply">Reply</button>
                    </div>
                    <div className="textUserComment">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </span>
                    </div>
                  </div>
                  <div
                    className="blockUserComment"
                    style={{ width: 860, marginTop: 16 }}
                  >
                    <div
                      className="blockInformationUser"
                      style={{ width: 860 }}
                    >
                      <div className="stick"></div>
                      <div className="iconEclipse">
                        <SVGgeneral id="iconEclipse" />
                      </div>
                      <div className="informationUser">
                        <SVGgeneral
                          id="iconEventAvatar"
                          style={{
                            fill: color ? "#8C8EB0" : "#F5A8A8",
                            height: 28,
                            paddingLeft: 22,
                            paddingRight: 12,
                          }}
                        />
                        <span className="textName">
                          from
                          <span className="testFrom">{` null `}</span>
                          at 2022-12-28 10:37:06
                        </span>
                      </div>
                      <button className="buttonReply">Reply</button>
                    </div>
                    <div className="textUserComment">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blockUserComment">
                <div className="blockInformationUser">
                  <div className="informationUser">
                    <SVGgeneral
                      id="iconEventAvatar"
                      style={{
                        fill: color ? "#8C8EB0" : "#F5A8A8",
                        height: 28,
                        paddingLeft: 22,
                        paddingRight: 12,
                      }}
                    />
                    <span className="textName">
                      from
                      <span className="testFrom">{` null `}</span>
                      at 2022-12-28 10:37:06
                    </span>
                  </div>
                  <button className="buttonReply">Reply</button>
                </div>
                <div className="textUserComment">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledCollagePage>
  );
};

export { Collage };
