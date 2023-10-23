import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box.js';
import { useState } from 'react';

function App() {
  // const usersWithGrades = [
  //   {
  //     name: 'pepe',
  //     grade: 10
  //   },
  //   {
  //     name: 'pablo',
  //     grade: 9
  //   },
  //   {
  //     name: 'ernesto',
  //     grade: 9.5
  //   },
  //   {
  //     name: 'noe',
  //     grade: 10
  //   },
  //   {
  //     name: 'ana',
  //     grade: 8
  //   }
  // ]
  const [user, setUser] = useState('Tania');

  function changeName() {
    const newName = document.getElementById('nameChangeInput').value;
    setUser(newName);
    document.getElementById('nameChangeInput').value= '';
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          // usersWithGrades.map((user, index) => {
          //   return <Box key={index} user={user.name} grade={user.grade} />
          // })
        }
        Hola, {user}!
        <input id='nameChangeInput' type='text' placeholder='Change your name'/> 
        <button onClick={changeName}>Change</button>
      </header>
    </div>
  );
}

export default App;