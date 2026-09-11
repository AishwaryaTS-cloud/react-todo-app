import React from "react";
import Todo from "./Todo";

function TodoContainer({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoContainer;
