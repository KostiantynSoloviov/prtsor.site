import styled from "styled-components";
import React from "react";

import { iconNotification } from "../../../../image/icons";

const StyledEvents = styled.div`
  font-family: "Segoe UI";
  font-style: normal;
  height: 1225px;
  width: 944px;
  border-radius: 20px;
  background-color: #21223e;
  margin-bottom: 100px;

  .mainBlockEvents {
    padding: 40px;
  }

  .headerEvents {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  .headerEvensText {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: white;
  }

  .headerEventsNotification {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    height: 50px;
    width: 229px;
    border-radius: 12px;
    /* padding: 8px 20px 8px 20px; */
    background-color: #373854;
  }

  .iconNotification {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .textBlockNotification {
    margin-left: -8px;
  }

  .textNotification {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: white;
  }

  .markTextNotification {
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;

    text-decoration-line: underline;
    color: white;
  }
`;

function Events() {
  return (
    <>
      <StyledEvents>
        <div className="mainBlockEvents">
          <div className="headerEvents">
            <span className="headerEvensText">Event</span>
            <div className="headerEventsNotification">
              <div className="iconNotification">{iconNotification}</div>
              <div className="textBlockNotification">
                <span className="textNotification">
                  You have 4 new notifications
                </span>
                <div className="markTextNotification">Mark All Read</div>
              </div>
            </div>
          </div>
        </div>
      </StyledEvents>
    </>
  );
}

export { Events };
