import logo from './logo.svg';
import './App.css';
import NavBar from './components/Nav.js';
import Hero from './components/hero';
import React from 'react'
function App() {
  return (

    <div className="App">
      <Hero>
        <NavBar />
      </Hero>

    </div>
  );
}

export default App;
