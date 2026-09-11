import React from "react";

function Todo({ todo }) {
  return (
    <div className="todo">
      <p>{todo}</p>

      <div className="actions">
        <input type="checkbox" />
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Todo;