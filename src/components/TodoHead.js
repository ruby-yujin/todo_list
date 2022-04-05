import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  console.log(today);

  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeadWrap>
      {/* <Date>{dateString}</Date>
      <Day>{dayName}</Day> */}
      <TaskLeft>할 일 {undoneTasks.length}개남음.</TaskLeft>
    </TodoHeadWrap>
  );
}

const TodoHeadWrap = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #ddd;
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
