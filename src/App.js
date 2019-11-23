import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import PortraitContainer from "./components/PortraitContainer";
import CharacterPortrait from "./components/CharacterPortrait";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters: characters,
    clickedPortraits: [],
    navbarCenter: "THE MEMORY GAME",
    navbarTextColor: "text-white",
    score: 0,
    topScore: 0,
    shaking: false
  };

  restoreSubtitle = () => {
    setTimeout(() => {
      this.setState({
        navbarCenter: "THE MEMORY GAME",
        navbarTextColor: "text-white"
      });
    }, 1500);
  };

  // Use the Durstenfeld shuffle algorithm to randomize the order of elements
  // in an array (taken from Lauren Holst's answer the question found at
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
  durstenfeldShuffle = array => {
    // Loop over the array starting with its last element
    for (let i = array.length - 1; i > 0; i--) {
      // Assign randomNumber a random value between 0 and the length of what
      // remains to be looped over in the array
      const randomNumber = Math.floor(Math.random() * (i + 1));
      // Swap the randomly picked element of the array (which has an index
      // equal to randomNumber) with the element that has an index of i
      [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
    }

    return array;
  };

  shakePortraits = () => {
    // Set this.state.shaking to true to give the portrait container the
    // .shaking class, which causes it to shake
    this.setState({
      shaking: true
    });

    // Remove the shaki
    setTimeout(() => {
      this.setState({ shaking: false });
    }, 300);
  };

  gameRestarts = () => {
    // If the score from this last game was higher than their previous
    // topScore, change topScore's value to reflect that
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }

    // Reset their score and empty the array of previously clicked
    // portrait ids
    this.setState({
      navbarCenter: "YOU GUESSED INCORRECTLY.",
      navbarTextColor: "bebopRed",
      clickedPortraits: [],
      score: 0,
      characters: this.durstenfeldShuffle(characters)
    });

    this.restoreSubtitle();
  };

  portraitClicked = portraitId => {
    // Check if the id of the character whose portrait was just clicked
    // is in the array of previously clicked portrait ids
    if (!this.state.clickedPortraits.includes(portraitId)) {
      // If it isn't, increment the score by one and add it to the array
      // of clicked portrait ids
      this.setState({
        score: this.state.score + 1,
        clickedPortraits: this.state.clickedPortraits.concat([portraitId]),
        characters: this.durstenfeldShuffle(characters),
        navbarCenter: "YOU GUESSED CORRECTLY!",
        navbarTextColor: "bebopGreen"
      });

      this.restoreSubtitle();
    } else {
      // Otherwise, call the function that shakes the portrait container
      this.shakePortraits();
      // Then call the function that handles the game ending/restarting
      this.gameRestarts();
    }
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          navbarCenter={this.state.navbarCenter}
          navbarTextColor={this.state.navbarTextColor}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <PortraitContainer shaking={this.state.shaking}>
          {this.state.characters.map(character => (
            <CharacterPortrait
              portraitClicked={this.portraitClicked}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </PortraitContainer>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
