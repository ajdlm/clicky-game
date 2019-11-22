import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import CharacterPortrait from "./components/CharacterPortrait";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters,
    clickedPortraits: [],
    score: 0,
    topScore: 0
  };

  playerLoses = () => {
    // If the score from this last game was higher than their previous
    // topScore, change topScore's value to reflect that
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }

    // Reset their score and empty the array of previously clicked
    // portrait ids
    this.setState({
      clickedPortraits: [],
      score: 0
    });
  };

  portraitClicked = portraitId => {
    // Check if the id of the character whose portrait was just clicked
    // is in the array of previously clicked portrait ids
    if (!this.state.clickedPortraits.includes(portraitId)) {
      // If it isn't, increment the score by one and add it to the array
      // of clicked portrait ids
      this.setState({
        score: this.state.score + 1,
        clickedPortraits: this.state.clickedPortraits.concat([portraitId])
      });
    } else {
      // Otherwise, call the function that handles the game ending/restarting
      this.playerLoses();
    }
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <div className="container-fluid">
          <div className="row">
            {this.state.characters.map(character => (
              <CharacterPortrait
                portraitClicked={this.portraitClicked}
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
