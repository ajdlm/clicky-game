import React from "react";
import "../fonts/BOOKmanOpti-Bold.ttf";
import "../fonts/LidoStfCondCe-Bold.ttf";
import "./Navbar.css";

const Navbar = props => {
  return (
    <div>
      <nav className="gameNav navbar fixed-top navbar-expand-md navbar-dark">
        <a className="gameBrand navbar-brand pr-auto" href="/">
          <img
            className="bebopLogo"
            src="cowboy-bebop-logo.png"
            alt="cowboy-bebop-logo"
          />

          <br />
        </a>

        <ul className="subtitleNav navbar-nav mx-auto">
          <li className="nav-item">
            <h5
              className={`${props.navbarTextColor} brandSubtitle text-center mb-0`}
            >
              {props.navbarCenter}
            </h5>
          </li>
        </ul>

        <ul className="scoreNav navbar-nav ml-auto">
          <li className="nav-item ml-auto">
            <h5 className="text-white mb-0 pr-2">
              Score: {props.score} | Top Score: {props.topScore}
            </h5>
          </li>
        </ul>
      </nav>

      <div className="lowWidthScoreNav rounded d-none text-center border py-3 mx-4">
        <h5 className="text-white mb-1">
          Score: {props.score} | Top Score: {props.topScore}
        </h5>
      </div>

      <img
        className="bebopImage"
        src="cowboy-bebop-banner.jpg"
        alt="cowboy-bebop-banner"
      />

      <div className="gameInstructions d-flex">
        <div className="flex-shrink-1 d-flex align-items-center">
          <img
            className="swordfishImage"
            src="cowboy-bebop-swordfish.png"
            alt="swordfish"
          />
        </div>

        <div className="d-flex align-items-center justify-content-end instructionText">
          <div className="text-right ml-4 pr-5">
            <h4 className="text-white mb-0">
              CLICK ON AN IMAGE BELOW TO EARN POINTS, BUT
            </h4>

            <h4 className="text-white mb-0">
              DON'T CLICK ON ANY MORE THAN ONCE...
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
