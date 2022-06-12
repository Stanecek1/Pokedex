import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonAPI from './Containers/PokemonApi';

class App extends Component {
  render() {
    return (
      <div>
        <PokemonAPI/>
      </div>
    );
  }
}

export default App;
