import React from 'react';
import './App.css';
import Board from './components/Board'
import boba from './assets/boba1.jpg'

function App() {
  return (
    <div className="App">
      <img className="banner" src={boba}></img>
      <h1>Popular Boba Spots</h1>
      <Board />
    </div>
  )
}

export default App
