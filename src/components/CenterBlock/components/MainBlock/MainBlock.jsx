import styled from "styled-components";
import React from "react";

import { TagsBlock } from "./components/TagsBlock/TagsBlock";
import { MainCrdBlock } from "./components/MainCardBlock/MainCardBlock";

import maxresdefault from "../../../../image/maxresdefault.jpg";
import changeBackgroundExplainer from "../../../../image/change-background-explainer.png";
import imageProcessing from "../../../../image/image-processing.png";

const StyledMainBlock = styled.div``;

const sliderData = [
  {
    label: "My Work",
    id: 0,
  },
  {
    label: "Important",
    id: 1,
  },
  {
    label: "Design",
    id: 2,
  },
  {
    label: "Web",
    id: 3,
  },
  {
    label: "Freestyle",
    id: 4,
  },
];

const imageData = [
  {
    id: 0,
    scr: maxresdefault,
    alt: "maxresdefault",
    card: {
      titlePageTag: "Title of this tag",
      textPageTag:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet",
      tags: [
        {
          label: "My Work",
          id: 0,
        },
        {
          label: "Important",
          id: 1,
        },
        {
          label: "Design",
          id: 2,
        },
        {
          label: "Web",
          id: 3,
        },
        {
          label: "Freestyle",
          id: 4,
        },
      ],
      users: [
        {
          userName: "null",
          userContent:
            "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing",
        },
        {
          userName: "bigi",
          userContent:
            "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing",
        },
      ],
    },
    date: "20 December 2022",
    time: "12:00:12",
  },
  {
    id: 0,
    scr: changeBackgroundExplainer,
    alt: "changeBackgroundExplainer",
    card: {
      titlePageTag: "Title of this tag",
      textPageTag:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet",
      tags: [
        {
          label: "My Work",
          id: 0,
        },
        {
          label: "Important",
          id: 1,
        },
        {
          label: "Design",
          id: 2,
        },
        {
          label: "Web",
          id: 3,
        },
        {
          label: "Freestyle",
          id: 4,
        },
      ],
      users: [
        {
          userName: "null",
          userContent:
            "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing",
        },
        {
          userName: "bigi",
          userContent:
            "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing",
        },
        {
          userName: "doll",
          userContent:
            "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing",
        },
        {
          userName: "sorr",
          userContent:
            "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing",
        },
      ],
    },
    date: "01 December 2000",
    time: "7:45:12",
  },
  {
    id: 0,
    scr: imageProcessing,
    alt: "imageProcessing",
    card: {
      titlePageTag: "Title of this tag",
      textPageTag:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet",
      tags: [
        {
          label: "My Work",
          id: 0,
        },
        {
          label: "Important",
          id: 1,
        },
        {
          label: "Design",
          id: 2,
        },
        {
          label: "Web",
          id: 3,
        },
        {
          label: "Freestyle",
          id: 4,
        },
      ],
      users: [
        {
          userName: "null",
          userContent:
            "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing",
        },
      ],
    },
    date: "12 December 2022",
    time: "12:45:12",
  },
  {
    id: 0,
    scr: imageProcessing,
    alt: "imageProcessing",
    card: {
      titlePageTag: "Title of this tag",
      textPageTag:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet",
      tags: [
        {
          label: "My Work",
          id: 0,
        },
        {
          label: "Important",
          id: 1,
        },
        {
          label: "Design",
          id: 2,
        },
        {
          label: "Web",
          id: 3,
        },
        {
          label: "Freestyle",
          id: 4,
        },
      ],
      users: [
        {
          userName: "null",
          userContent:
            "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing",
        },
      ],
    },
    date: "12 December 2022",
    time: "12:45:12",
  },
  {
    id: 0,
    scr: imageProcessing,
    alt: "imageProcessing",
    card: {
      titlePageTag: "Title of this tag",
      textPageTag:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet",
      tags: [
        {
          label: "My Work",
          id: 0,
        },
        {
          label: "Important",
          id: 1,
        },
        {
          label: "Design",
          id: 2,
        },
        {
          label: "Web",
          id: 3,
        },
        {
          label: "Freestyle",
          id: 4,
        },
      ],
      users: [
        {
          userName: "null",
          userContent:
            "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing",
        },
      ],
    },
    date: "12 December 2022",
    time: "12:45:12",
  },
];

function MainBlock() {
  return (
    <>
      <StyledMainBlock>
        <TagsBlock sliderData={sliderData} />
        <MainCrdBlock tags={sliderData} imageData={imageData} />
      </StyledMainBlock>
    </>
  );
}

export { MainBlock };
