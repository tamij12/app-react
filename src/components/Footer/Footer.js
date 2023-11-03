import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      Footer
      <hr />
      <div className="content">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/pokemones">Pokemones</Link>
          <Link to="/episodes">Episodes</Link>
          <Link to="/test">Test</Link>
        </div>
      </div>
    </footer>
  );
}
