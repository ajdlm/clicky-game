import React from "react";
import "./CharacterPortrait.css";

function CharacterPortrait(props) {
    return (
        <div className="characterPortraitDiv col-sm-3 col-4" onClick={() => props.portraitClicked(props.id)}>
            <img className="characterPortrait" src={props.image} alt={props.name} />
        </div>
    );
}

export default CharacterPortrait;