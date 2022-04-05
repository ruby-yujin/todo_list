import React from "react";
import { GlobalStyle } from "./style/GlobalStyle";

import Wrapper from "./components/Wrapper";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Wrapper>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </Wrapper>
    </TodoProvider>
  );
}

export default App;
