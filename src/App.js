import React, { Component } from 'react';
import Congrats from './Congrats/Congrats';
import GuessedWords from './GuessdWords/GuessedWords';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Congrats success={true} />
        <GuessedWords guessedWords={[ {guessedWord: 'train', letterMatchCount: 3}]} />
      </div>
    );
  };
}

export default App;
