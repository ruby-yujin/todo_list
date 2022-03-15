import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

function TodoList() {
    return (
        <TodoListWrap>
            <TodoItem text="몽이 산책" done/>
            <TodoItem text="집에가면서 따릉이타기" done={false}/>
            <TodoItem text="노선생이랑 데이트하기" done={false}/>
            <TodoItem text="흰 수건 빨래 돌리기" done={false}/>
            <TodoItem text="상담심리학 강의 듣기" done={false}/>
            <TodoItem text="아라 곱창시켜주기" done/>
        </TodoListWrap>
    )
}

const TodoListWrap = styled.div`
    flex:1;
    padding:20px 32px 28px;
    overflow-y:auto ;
`;

export default TodoList;