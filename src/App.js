import React from 'react';
import {GlobalStyle} from './style/GlobalStyle';

import Wrapper from './components/Wrapper';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';


function App() {
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
    </Wrapper>
    </>
    
  );
}

export default App;

