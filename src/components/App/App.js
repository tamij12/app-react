import React, { createContext } from "react";

import Episodes from "../../pages/episodes/index";
import Pokemones from "../../pages/pokemones/index";

import "./App.css";
import Home from "../../pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Test from "../../pages/test/test";

export const GradesContext = createContext();
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/episodes" element={<MainLayout />}>
          <Route index element={<Episodes />} />
        </Route>

        <Route path="/pokemones" element={<MainLayout />}>
          <Route index element={<Pokemones />} />
        </Route>

        <Route path="/test" element={<MainLayout />}>
          <Route path=":param" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
