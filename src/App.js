import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to First Half Goals</h1>
        </header>
        <p className="App-intro">
          This page will list opportunities to bet on a goal being scored in the first half.  The algorithm will try to find games where this is likely to happen.
        </p>
      </div>
    );
  }
}

export default App;
