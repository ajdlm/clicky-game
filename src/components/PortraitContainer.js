import React from "react";
import "./PortraitContainer.css";

function PortraitContainer(props) {
  return (
    <div
      id="portraitContainer"
      className={`container-fluid${props.shaking ? " shaking" : ""}`}
    >
      <div className="row">{props.children}</div>
    </div>
  );
}

export default PortraitContainer;
