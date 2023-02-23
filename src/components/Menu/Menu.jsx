import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import { iconContactActive, iconContact, iconEvent, iconScreenshots, iconScreenshotsActive, iconSetting, iconSettingActive, iconEventActive, iconCollage, iconCollageActive } from '../../image/icons';

const StyledMenuBlock = styled.div`
    margin-top: 196px;
    margin-right: 24px;

    .buttonCollage {
        cursor: pointer;
        margin-top: 16px;
        display: grid;
        grid-template-columns: 65px 1fr;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        background: #21223E;
        border-radius: 20px;
        border: none;

        height: 47px;
        width: 216px;

        font-family: 'Segoe UI';
        font-size: 17px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;


        .text {
            color: white;
        }

        .svgBlock {
            margin-left: 35px;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            fill: white !important;
        }
    }
`

const StyledMenu = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;
    grid-gap: 20px;
    height: 272px;
    width: 216px;
    border-radius: 20px;
    background-color: #21223E;
    
    .link{
        text-decoration: none;
    }
`

const StyledButton = styled.button`
    cursor: pointer;
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
    border: none;
    background: #21223E;
    height: 23px;
    width: 160px;


    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 23px;
    padding: 4px 8px;

    .text {
        color: white;

    }

    .svgBlock {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        fill: white !important;
    }
`

function Menu() {
    const [button, setButton] = useState("Screenshots")


    return (
        <>
            <StyledMenuBlock>
                <StyledMenu>
                    <Link className='link' to="/">
                        <StyledButton onClick={() => setButton("Screenshots")}>
                            <div className='svgBlock'>{button === "Screenshots" ? iconScreenshotsActive : iconScreenshots}</div>
                            <span className='text'>Screenshots</span>
                        </StyledButton>
                    </Link>
                    <StyledButton onClick={() => setButton("Contact")}>
                        <div className='svgBlock'>{button === "Contact" ? iconContactActive : iconContact}</div>
                        <span className='text'>Contact</span>
                    </StyledButton>
                    <StyledButton onClick={() => setButton("Event")}>
                        <div className='svgBlock'>{button === "Event" ? iconEventActive : iconEvent}</div>
                        <span className='text'>Event</span>
                    </StyledButton>
                    <Link className='link' to="/setting">
                        <StyledButton onClick={() => setButton("Setting")}>
                            <div className='svgBlock'>{button === "Setting" ? iconSettingActive : iconSetting}</div>
                            <span className='text'>Setting</span>
                        </StyledButton>
                    </Link>
                </StyledMenu >
                <button className='buttonCollage' onClick={() => setButton("Collage")}>
                    <div className='svgBlock'>{button === "Collage" ? iconCollageActive : iconCollage}</div>
                    <span className='text'>Collage</span>
                </button>
            </StyledMenuBlock>
        </>
    )
}

export { Menu };