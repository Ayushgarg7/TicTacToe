// src/TicTacToe.js
import React, { Component } from "react";
import "./TicTacToe.css";

class TicTacToe extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
    };
  }

  handleClick(i) {
    const squares = [...this.state.squares];
    if (this.state.winner || squares[i]) return;

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext,
      winner: this.calculateWinner(squares),
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  render() {
    const winner = this.state.winner;

    return (
      <div className="tic-tac-toe">
        <div className="status">
          {winner
            ? `Winner: ${winner}`
            : `Next player: ${this.state.xIsNext ? "X" : "O"}`}
        </div>
        <div className="board">
          {this.state.squares.map((square, i) => (
            <button
              key={i}
              className="square"
              onClick={() => this.handleClick(i)}
            >
              {square}
            </button>
          ))}
        </div>
        <button
          className="reset"
          onClick={() =>
            this.setState({
              squares: Array(9).fill(null),
              xIsNext: true,
              winner: null,
            })
          }
        >
          Reset Game
        </button>
      </div>
    );
  }
}

export default TicTacToe;
