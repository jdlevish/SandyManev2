import React, { Component } from "react"

// import logo from './logo.svg';
import '../App.css';
import NavBar from '../components/Nav.js';
import Hero from '../components/hero';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return <div className="App">
    <NavBar />
    <Hero></Hero>

  </div>
}
