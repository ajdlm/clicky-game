import React from "react";
import "./CharacterPortrait.css";

function CharacterPortrait(props) {
    return (
        <div className="m-3" data-id={props.id}>
            <img src={props.image} alt={props.name} />
        </div>
    );
}

export default CharacterPortrait;