import React from 'react';
import styled from 'styled-components';

function TodoHead() {
    return (
        <TodoHeadWrap>
            <Date>2022년 3월 15일</Date>
            <Day>수요일</Day>
            <TaskLeft>할 일 아직 많음.</TaskLeft>
        </TodoHeadWrap>
    )
}

const TodoHeadWrap = styled.div`
    padding:48px 32px 24px;
    border-bottom:1px solid #ddd;
    font-weight: bold;
`;

const Date = styled.div`
    font-size: 36px;
    color: #333;
`;

const Day = styled.div`
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
`;

const TaskLeft = styled.div`
    color: darkturquoise;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
`;



export default TodoHead;