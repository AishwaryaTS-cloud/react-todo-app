import React from 'react';

function InputContainer({ inputVal, writeTodo, addTodo }) {

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputVal}
        onChange={writeTodo}
        onKeyDown={handleKeyDown}
      />

      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default InputContainer;