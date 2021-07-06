import React, { Component } from "react"

// import logo from './logo.svg';
import '../App.css';
import NavBar from '../components/Nav.js';
import Hero from '../components/hero';
import SalonInfo from '../components/SalonInfo';
import SalonText from "../components/SalonText";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-slideshow-image/dist/styles.css'

export default function Home() {
  return <div className="App">
    <NavBar />
    <Hero></Hero>
    <SalonText></SalonText>
    <SalonInfo></SalonInfo>

  </div>
}
