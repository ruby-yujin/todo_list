import React , {useState} from "react";
import styled, {css} from "styled-components";
import {MdAdd} from  "react-icons/md";


function TodoCreate (){
    const [open,setOpen] = useState(false);
    
    const onToggle = () => {
        setOpen(!open)
    }

    return(
        <TodoCreateWrap>
        {open && (
            <InsertFormPositioner>
            <InsertForm>
                <Input autoFocus placeholder="할일을 입력 후, Enter를 누르세요."/>
            </InsertForm>
            </InsertFormPositioner>
        )}
           
            <CirecleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CirecleButton>
   
        </TodoCreateWrap>
       
    );
}

const TodoCreateWrap = styled.div`
    position: relative;
`;

const InsertFormPositioner = styled.div``;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding:32px 32px 72px;
    border-bottom-left-radius:16px;
    border-bottom-right-radius:16px;
    border-top:1px solid #e9ecef;
`;

const Input = styled.input`
    padding:12px;
    border-radius: 4px;
    border : 1px solid #dee2e6;
    width: 100%;
    font-size:18px;
    box-sizing: border-box ;

`;

const CirecleButton = styled.button`
    background: #38d9a9;
    z-index: 5;
    font-size:60px;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    position: absolute;
    bottom: -40px;
    left: 50%;
    margin-left: -40px;
    border-radius: 50%;
    border:none;
    transition: 0.125s all ease-in;

    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    ${props => props.open && css`
        background:#ff6b6b;

        &:hover {
            background:#ff8787;
        }
        &:active {
            background: #fa5252;
        }
    
    `}
`;

export default TodoCreate;