import styled from 'styled-components';
import React from 'react';

import { LeftBlock } from '../../components/LeftBlock/LeftBlock';
import { Menu } from '../../components/Menu/Menu';
import { CentreBlock } from '../../components/CenterBlock/CentreBlock';

const StyledMainPage = styled.div`
    display: grid;
	grid-template-columns: 1fr 944px 1fr;
    width: 100%;
    height: calc(100vh - 55px);
    background-color: #121417;
`

const StyledLeftBlock = styled.div`
    display: flex;
	flex-direction: row-reverse;
`


function MainPage() {
    return (
        <>
            <StyledMainPage>
                <StyledLeftBlock>
                    <Menu />
                </StyledLeftBlock>
                <CentreBlock />

            </StyledMainPage>
        </>
    )
}

export { MainPage };