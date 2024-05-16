import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="todo-app">
        {/* <div>
          <h1>Add An Item...</h1>
        </div> */}
        {/* <div className="todo-app-inner">
          <input
            type="text"
            className="todo-input"
            placeholder="Add your item"
            value={this.newItem}
            onChange={this.updateInput}
            completed={this.state.completed}
            contentEditable={this.state.contentEditable}
          />
          <button onClick={this.handleSave} className="todo-button">
            ADD
          </button>
        
        </div> */}

<form onSubmit={handleSubmit} className="qr-form">
          {formItems.map((item, index) => (
            <label className="form-label" key={index}>
              {item.text}:
              <input
                className="form-input"
                type={item.type}
                name={item.name}
                aria-label={item.name}
                value={inputs[item.name]}
                onChange={handleInputChange}
                required
              />
            </label>
          ))}
          <input type="submit" aria-label="submit" value="Get QR" />
        </form>
      </div>
    </>
  )
}

export default App
