import React from 'react';
import styled , {css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

function TodoItem({id,done,text}) {
    return (
        <TodoItemWrap>
            <CheckCircle done={done}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete/>
            </Remove>
        </TodoItemWrap>
    )
}

const TodoItemWrap = styled.div`
    display:flex;
    align-items:center;

    padding: 12px 0;
    &:hover {
        button {
            display: block ;
        }
  }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
    props.done && css`border: 1px solid #38d9a9; color: #38d9a9;`}
`;

const Text = styled.div``;

const Remove = styled.button`
    margin-left:auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #eee;
    font-size: 24px;
    cursor: pointer;
    border:none;
    background-color: transparent;

    &:hover {
        color: #ddd;
    }

    //숨김처리 
    display: none;
    &:hover {
        color: #ddd;
    }
`;

export default TodoItem;