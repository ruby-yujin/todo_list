import React from "react";
import styled from 'styled-components';

function Wrapper({children}) {
    return (
    <Main>
        {children}
    </Main>
    ) 
}
const Main = styled.main`
    width:100%;
    height:100vh;
    padding-top:96px;
    background: linear-gradient(-45deg, #ffe2d3, #a6dee2, #cfc2fc);
`;

export default Wrapper;