import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  function add() {
    setCounter(counter + 1);
  }
  function subtraction() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter: </h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button>{counter}</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </>
  );
}

export default App;
