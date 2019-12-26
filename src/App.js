import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './Score';
import Game from './Game';


/*const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
*/


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0
    };
  }

  handleAnswer = (isAnswerRight) => {
    if (isAnswerRight) {
      this.setState(previousState => ({
        numCorrect: (previousState.numCorrect + 1)
      }))
    }
      this.setState(previousState => ({
        numQuestions: previousState.numQuestions + 1,
      }))
  }


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <Game handleAnswer={this.handleAnswer} />
        <Score numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect} />
      </div>
    </div>
  );
}
}

export default App;
