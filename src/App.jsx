import React from "react";
import { useState } from "react";
import "./App.css";

const initialState = {
  name: "",
  surname: "",
  email: "",
  dob: "",
  phone: "",
  timestamp: "",
};

function App() {
  const [count, setCount] = useState(0);

  const [inputs, setInputs] = useState({
    ...initialState,
  });
  const formItems = [
    { type: "text", name: "name", text: "Name" },
    { type: "text", name: "surname", text: "Surname" },
    { type: "text", name: "email", text: "Email" },
    { type: "tel", name: "phone", text: "Phone Number" },
    { type: "date", name: "dob", text: "Date of Birth" },
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="app">
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

          <form onSubmit={handleSubmit} className="qr-code-form">
            {formItems.map((item, index) => (
              <div className="todo-app-inner">
                <label className="form-label" key={index}>
                  {item.text}:
                </label>
                <div>
                  <input
                    className="todo-input"
                    type={item.type}
                    name={item.name}
                    aria-label={item.name}
                    value={inputs[item.name]}
                    onChange={handleInputChange}
                    key={index}
                    required
                  />
                </div>
              </div>
            ))}
            <input
              className="todo-button"
              type="submit"
              aria-label="submit"
              value="Get QR"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
