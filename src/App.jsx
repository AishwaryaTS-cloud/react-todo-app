import React from 'react'
import "./App.css";

function App() {
  return (
    <main>
      <h1>To Do List</h1>

      <div className='input-container'>
        <input type="text" />
        <button>+</button>
      </div>

      <div className='container'>
        <div className='todo'>
          <p>go to gym</p>
          <div className='actions'>
            <input type="checkbox" />
            <button>Delete</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
