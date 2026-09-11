import React from "react";
import Todo from "./Todo";

function TodoContainer({ todos }) {
  return (
    <div className="container">
      {todos.map((todo) => {
        return (
          <Todo key={todo} todo={todo} />
        );
      })}
    </div>
  );
}

export default TodoContainer;