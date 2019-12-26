import React, { Component } from 'react';



class Game extends Component {
    constructor(props) {
        super(props);
        const valuesArray = this.makeNewQuestion();

        this.state = {
            value1 : valuesArray[0],
            value2 : valuesArray[1],
            value3 : valuesArray[2],
            proposedAnswer : valuesArray[3]
        };
    }


    makeNewQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
        return [value1, value2, value3,proposedAnswer];
    }

    updateGame = (newValuesArray) => {
        this.setState( currentState => ({
            value1 : newValuesArray[0],
            value2 : newValuesArray[1],
            value3 : newValuesArray[2],
            proposedAnswer : newValuesArray[3]
        }));
    }

    /* handleScoreChange() { event => {
         this.setState(previousState => {
             numQuestions: previousState.numCorrect + 1,
             numCorrect = previousState.numCorrect +  isAnswerRight(event.target.name) ? 1 : 0
         })
     }
     }
 */

    handleAnswer =
        event => {
        const newValuesArray = this.makeNewQuestion();
        const givenAnswer = event.target.name;
        this.updateGame(newValuesArray);
        const correct = this.isAnswerRight(givenAnswer);
        this.props.handleAnswer(correct);
    }

    isAnswerRight(givenAnswer) {
        const { value1, value2, value3, proposedAnswer } = this.state;
        const corrAnswer = value1 + value2 + value3;
        return ((givenAnswer === "true" && (proposedAnswer === corrAnswer)) ||
            (givenAnswer === "false" && (proposedAnswer !== corrAnswer)));
    }



render() {
    const { value1, value2, value3, proposedAnswer } = this.state;

    return (
        <div className="game">
            <h2>Mental Math</h2>
            <div className="equation">
                <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
            </div>
            <button onClick={this.handleAnswer} name="true">True</button>
            <button onClick={this.handleAnswer} name="false">False</button>
        </div>
    );
}
}

export default Game;
