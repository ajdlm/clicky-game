import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import CharacterPortrait from "./components/CharacterPortrait";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters
  };

  shuffleCharacters = id => {
    const characters = this.state.characters;
  };

  render() {
    return (
      <Wrapper>
        <Navbar />

        {this.state.characters.map(character => (
          <CharacterPortrait id={character.id} name={character.name} image={character.image} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
