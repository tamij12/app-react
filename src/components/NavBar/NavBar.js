import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Navbar</h1>
      </div>
      <div className="content">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/pokemones">Pokemones</Link>
          <Link to="/episodes">Episodes</Link>
          <Link to="/test">Test</Link>
        </div>
      </div>
    </nav>
  );
}
