import React, { useState } from 'react';
import "./App.css";
import InputContainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';

function App() {

  const [inputVal, setInputVal] = useState('');
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal !== '') {
      const newTodo = {
        text: inputVal,
        completed: false
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputVal('');
    }
  }

  function deleteTodo(index) {
    setTodos((prevTodos) =>
      prevTodos.filter((_, i) => i !== index)
    );
  }

  function toggleTodo(index) {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  return (
    <main>
      <h1>To Do List</h1>

      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />

      <TodoContainer
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </main>
  );
}

export default App;