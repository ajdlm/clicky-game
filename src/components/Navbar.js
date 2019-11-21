import React from "react";
import "../fonts/BOOKmanOpti-Bold.ttf";
import "./Navbar.css";
//import { Link } from "react-router-dom";
// <Link to="/" className="navbar-brand">
//        Cowboy Bebop Memory Game
//      </Link>

function Navbar() {
  return (
    <div>
      <nav
        id="gameNav"
        className="navbar fixed-top navbar-expand-md navbar-dark"
      >
        <a id="gameBrand" className="navbar-brand" href="/">
          <img id="bebopLogo" src="cowboy-bebop-logo.png" alt="cowboy-bebop-logo" />
          <br />
          <h5 id="brandSubtitle" className="text-white text-center">THE MEMORY GAME</h5>
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <h5 className="text-white">Score: 0 | Top Score: 10</h5>
          </li>
        </ul>
      </nav>

      <img id="bebopImage" src="cowboy-bebop-banner.jpg" alt="cowboy-bebop-banner" />

      <div id="gameInstructions"></div>
    </div>
  );
}

export default Navbar;
