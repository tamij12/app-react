import React, { createContext, useState } from 'react';

import './App.css';
import Home from '../../pages/home';

export const GradesContext = createContext();

function App() {
  const [usersWithGrades, setUsersWithGrades] = useState([
  ]);

  return (
    <GradesContext.Provider value={{ usersWithGrades, setUsersWithGrades }}>
      <Home />
    </GradesContext.Provider>
  );
}

export default App;