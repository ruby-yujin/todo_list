import React from 'react';
import styled from 'styled-components';

function TodoTemplate({ children }) {
    return (
        <TodoTemplateWrap>{children}</TodoTemplateWrap>
    )
}


const TodoTemplateWrap  = styled.div`
    width: 600px;
    height:768px;
    margin: 0 auto 32px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    display: flex ;
    flex-direction: column;
    position: relative;

`;


export default TodoTemplate;