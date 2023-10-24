import React, { createElement, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const divSaludo = document.getElementById("saludo");

  function sayHello() {
    const name = document.getElementById('nameChangeInput').value;
    setUser(name)
    const saludo = `Hola ${name}, es un placer conocerte!`;
    console.log(saludo);

    const h1Name = createElement('h1');
    h1Name.textContent = saludo;
    divSaludo.appendChild(h1Name);

  }

  return (
    <>
      <div>
        <div className="saludo"></div>
        <input type="text" id='nameChangeInput' placeholder="Ingresa tu nombre"/>
        <button onClick={sayHello}>ok!</button>
      </div>
    </>
  );
}

export default App;
