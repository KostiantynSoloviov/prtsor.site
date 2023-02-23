import styled from 'styled-components';
import React from 'react';
import { InputGroup, InputLeftAddon, Input, InputRightAddon } from '@chakra-ui/react';

const StyledSetting = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;
    grid-gap: 12px;
    height: 404px;
    width: 944px;
    border-radius: 20px;
    background-color: #21223E;

    .text {
        font-family: Segoe UI;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;

        color: white;
        
        margin:-10px 0 30px 0;
    }

    .inputGroup {
        height: 38px;
        width: 870px;
    }

    .input {
        font-family: Segoe UI;
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
        font-family: Segoe UI;
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
        background-color: #C2C4E5;
        color: #505169;
        border-right: 2px solid #505169;
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
        width: 98px;
        background-color: #404BD9;
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
        color: white;
        height: 44px;
        width: 738px;
    }
`

function Setting() {
    return (
        <>
            <StyledSetting>
                <div className='text'>
                    <span>Settings</span>
                </div>
                <div>
                    <InputGroup className="inputGroup" size='sm'>
                        <InputLeftAddon style={{ width: 121 }} className='inputLeftAddon' children='Username:' />
                        <Input style={{ width: 650 }} className='input' placeholder='User 5' />
                        <InputRightAddon className='inputRightAddon' onClick={() => console.log("TEST")} children='Change' />
                    </InputGroup>
                </div>
                <div>
                    <InputGroup className="inputGroup" size='sm'>
                        <InputLeftAddon style={{ width: 326 }} className='inputLeftAddon' children='Generate pincode to link another profile:' />
                        <Input style={{ width: 458 }} className='input' placeholder='' />
                        <InputRightAddon className='inputRightAddon' onClick={() => console.log("TEST")} children='Generate' />
                    </InputGroup>
                </div>
                <div>
                    <InputGroup className="inputGroup" size='sm'>
                        <InputLeftAddon style={{ width: 282 }} className='inputLeftAddon' children='Link your account to another user:' />
                        <Input style={{ width: 498 }} className='input' placeholder='Enter pincode' />
                        <InputRightAddon className='inputRightAddon' onClick={() => console.log("TEST")} children='Link' />
                    </InputGroup>
                </div>
                <div className='textArea'>
                    <span>
                        If you have another account with this email, all your data will be restored by sending on your email adress pincode.
                        Please, enter this pincode from your email in settings below.
                    </span>
                </div>
                <div>
                    <InputGroup className="inputGroup" size='sm'>
                        <InputLeftAddon style={{ width: 227 }} className='inputLeftAddon' children='Change your email address:' />
                        <Input style={{ width: 549 }} className='input' placeholder='jj1981ua@gmail.com' />
                        <InputRightAddon className='inputRightAddon' onClick={() => console.log("TEST")} children='Set' />
                    </InputGroup>
                </div>

            </StyledSetting>
        </>
    )
}

export { Setting };