import React from "react";
import { useState } from "react";
import axios from "axios";
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
  // const [count, setCount] = useState(0);

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

  const [qrcode, updateQrCode] = useState("");

  const [error, updateError] = useState("");

  const [mask, updateMask] = useState(0);

  const handleSubmit = (e) => {
    e?.preventDefault();
    const payload = { data: { ...inputs, timestamp: +new Date() }, mask };
    // const API =
    //   process.env.NODE_ENV === "development"
    //     ? "http://localhost:3000"
    //     : "https://qr-code-genetator-nextjs.vercel.app";
    // axios
    //   .post(API + "/api/scan", payload)
    //   .then((response) => {
    //     updateQrCode(response.data);
    //   })
    //   .catch((err) => {
    //     updateError(err.data);
    //   });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const newCode = (e) => {
    e?.preventDefault();
    updateMask((mask + 1) % 8);
    handleSubmit();
  };

  const resetCode = (e) => {
    e?.preventDefault();
    updateMask(0);
    updateQrCode("");
    updateError("");
    setInputs((inputs) => ({
      ...inputs,
      ...initialState,
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

          {qrcode && (
            <div>
              <button onClick={newCode} className="form-newpattern">
                New pattern
              </button>
              <button onClick={resetCode} className="form-newpattern">
                Reset
              </button>
            </div>
          )}

          {error && <p>{error}</p>}

          <img src={qrCode} alt="" aria-label="code" />
        </div>
      </div>
    </>
  );
}

export default App;
