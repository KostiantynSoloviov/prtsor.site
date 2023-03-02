import styled from "styled-components";
import React from "react";

const StyledMainPage = styled.div`
  display: grid;
  width: 100%;
  min-height: calc(100vh - 130px);
  height: calc(100% - 130px);
  background-color: ${(props) => (props.color ? "#121417" : "#FFFFFF")};
`;

const StyledLeftBlock = styled.div`
  height: 100%;

  .aboutHeader {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    background-color: #21223e;
    height: 200px;
  }

  .aboutHeaderText {
    margin-left: 100px;
    font-size: 2.5rem;
    color: white;
  }

  .mainAboutText {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    height: calc(100% - 200px);
    background-color: #121417;
  }

  .aboutText {
    width: 87%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    color: white;
  }

  .text {
    margin-top: 30px;
  }
`;

function About() {
  return (
    <StyledMainPage>
      <StyledLeftBlock>
        <div className="aboutHeader">
          <span className="aboutHeaderText">About</span>
        </div>
        <div className="mainAboutText">
          <div className="aboutText">
            <span className="text">
              This screenshot service was created for one simple reason - we
              ourselves lacked functionality in existing services.
            </span>
            <span className="text">
              We didn't invent the wheel, we just made it more convenient and
              safer.
            </span>
            <span className="text">
              You can find the full list of features on the main page, but the
              most important ones for us and those that you are unlikely to find
              in other programs are:
            </span>
            <ul>
              <li>
                Private screenshots - those that are assigned a long and complex
                URL + a ban on indexing by search engines (that is, it is almost
                impossible to find such a screenshot on our site by brute
                force);
              </li>
              <li>Discussion of screenshots directly below them;</li>
              <li>
                Change/delete screenshots (available only to the author of the
                screenshot);
              </li>
              <li>
                Galleries (folders) of screenshots - you can combine several
                screenshots into galleries by themes, projects and any other
                attribute.
              </li>
            </ul>
            <span>We also have a premium version in which you can:</span>
            <ul>
              <li>
                Saving screenshots to your domain - it's the most private
                service. No one except you will see them without your desire;
              </li>
              <li>
                Creating groups - joining groups is convenient for creating a
                gallery for members of this group only;
              </li>
              <li>
                Saving screenshots to our site, but with access to them only for
                the users or groups you choose;
              </li>
              <li>Eternal storage of screenshots.</li>
            </ul>
            <span>
              We hope that the program will become your number 1 among
              screenshot services. And also we ask you if you have problems,
              ideas or suggestions - Contact us.
            </span>
          </div>
        </div>
      </StyledLeftBlock>
    </StyledMainPage>
  );
}

export { About };
