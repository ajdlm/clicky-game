import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import CharacterPortrait from "./components/CharacterPortrait";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters,
    score: 0,
    highScore: 0
  };

  playerLoses = () => {
    this.setState({ highScore: this.state.score });
    this.setState({ score: 0 });

    this.setState(state => {
      const characters = state.characters.map(currentCharacter => {
        if (currentCharacter.clicked === true) {
          currentCharacter.clicked = false;
        }

        return currentCharacter;
      });

      return characters;
    });
  };

  portraitClicked = portraitId => {
    const characters = this.state.characters.length;

    for (let j = 0; characters.length; j++) {
      if (portraitId === characters[j].id) {
        if (!characters[j].clicked) {
          this.setState({ score: this.state.score + 1 });

          return true;
        }
      } else {
        this.playerLoses();
      }
    }
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <div className="container-fluid">
          <div className="row">
            {this.state.characters.map(character => (
              <CharacterPortrait
                id={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
