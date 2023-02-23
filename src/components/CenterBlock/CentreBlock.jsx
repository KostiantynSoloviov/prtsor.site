import styled from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
import { MainBlock } from './components/MainBlock/MainBlock';
import { Setting } from './components/Setting/Setting';

const StyledCentreBlock = styled.div`
    height: 100%;
`



function CentreBlock() {
    return (
        <>
            <StyledCentreBlock>
                <ButtonGroup />
                <Routes>
                    <Route path="/" element={<MainBlock />} />
                    <Route path="/setting" element={<Setting />} />
                    {/* <Route path="/contacts" element={<Contact />} />
                        <Route path="/category/:name" element={<Category />} />
                        <Route path="/meal/:id" element={<Recipe />} />
                        <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </StyledCentreBlock>
        </>
    )
}

export { CentreBlock };