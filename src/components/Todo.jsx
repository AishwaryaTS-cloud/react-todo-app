import React from "react";

function Todo({ todo, index, deleteTodo, toggleTodo }) {
  return (
    <div className="todo">
      <p className={todo.completed ? "completed" : ""}>{todo.text}</p>

      <div className="actions">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(index)}
        />

        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
