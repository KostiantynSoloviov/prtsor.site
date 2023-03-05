import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SVGgeneral } from "../../../../../../../../utils/generalSprite";
import { tagsData } from "../../../../imageData";
import { CheckedBlock } from "./components/CheckboxBlock";
import { ModalNewTags } from "./components/ModalCreateTag";

const StyledTagsMenu = styled.div`
  position: absolute;
  height: 649px;
  width: 912px;
  left: 17px;
  top: 55px;
  border-radius: 16px;
  opacity: 1;
  background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
  border: ${(props) =>
    props.color ? `1px solid #505169` : `1px solid #EFEFEF`};
  z-index: 1;

  .menuListMainBlock {
    padding: 20px 32px 2px 32px;
  }

  .menuTitleBlock {
    font-weight: 600;
    font-size: 17px;
    line-height: 23px;

    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
  }

  .headerBlock {
    position: relative;
    height: 33px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .checkboxContainer {
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-template-rows: 24px;
    grid-gap: 10px;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 32px;
    height: 478px;
  }

  .buttonAces {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    margin-right: 12px;
    height: 33px;
    width: 127px;
    background: #c78d35;
    border-radius: 32px;
    border: none;
    cursor: pointer;
  }

  .menuButtonGroup {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .buttonNewTag {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    width: 140px;
    height: 33px;
    background: #35c789;
    border-radius: 32px;
    border: none;
    cursor: pointer;
  }

  .footerMainBlock {
    margin-top: 32px;
    height: 38px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .deleteTagButton {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};

    height: 33px;
    width: 126px;
    border-radius: 32px;
    border: 1px solid #dc3545;
    background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};
  }

  .buttonGroup {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-weight: 350;
    font-size: 15px;
    line-height: 22px;
    color: ${(props) => (props.color ? "#ffffff" : "#21223E")};

    .buttonCancel {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: none;
      height: 38px;
      width: 131px;
      border-radius: 32px;
      background-color: ${(props) => (props.color ? "#373854" : "#FFFFFF")};

      font-weight: 350;
      font-size: 15px;
      line-height: 22px;
      color: ${(props) => (props.color ? "#ffffff" : "#21223E")};
    }

    .buttonShow {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 1px solid #404bd9;
      height: 38px;
      width: 131px;
      border-radius: 32px;
      background-color: #404bd9;

      font-weight: 350;
      font-size: 15px;
      line-height: 22px;
      color: #ffffff;
    }
  }
`;

const TagsMenu = ({ closeModal, showTags, deleteTags }) => {
  const color = useSelector((state) => state.pageReducer.color);
  const [openModalNewTag, setOpenModalNewTag] = useState(false);

  const closeModalNewTag = () => {
    setOpenModalNewTag(false);
  };

  return (
    <StyledTagsMenu color={color}>
      <div className="menuListMainBlock">
        <div className="headerBlock">
          {openModalNewTag ? (
            <ModalNewTags closeModalNewTag={closeModalNewTag} />
          ) : null}
          <div className="menuTitleBlock">
            <span>All my tags</span>
          </div>
          <div className="menuButtonGroup">
            <button className="buttonAces">
              <SVGgeneral id="access" style={{ paddingRight: 8 }} />
              <span>Give access</span>
            </button>
            <button
              className="buttonNewTag"
              onClick={() => setOpenModalNewTag(!openModalNewTag)}
            >
              <SVGgeneral id="newTag" style={{ paddingRight: 8 }} />
              <span> Add new tags</span>
            </button>
          </div>
        </div>
        <div className="checkboxContainer">
          {tagsData &&
            tagsData.map((item) => {
              return <CheckedBlock item={item} />;
            })}
        </div>
        <div className="footerMainBlock">
          <div>
            <button className="deleteTagButton" onClick={() => deleteTags()}>
              <SVGgeneral id="deleteTag" style={{ paddingRight: 8 }} />
              <span>Delete tags</span>
            </button>
          </div>
          <div className="buttonGroup">
            <button className="buttonCancel" onClick={() => closeModal(false)}>
              Cancel
            </button>
            <button className="buttonShow" onClick={() => showTags(false)}>
              Show tags
            </button>
          </div>
        </div>
      </div>
    </StyledTagsMenu>
  );
};

export { TagsMenu };
