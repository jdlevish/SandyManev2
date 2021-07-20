import React, { Component } from "react"

// import logo from './logo.svg';
import '../App.css';
import NavBar from '../components/Nav.js';
import Hero from '../components/hero';
import SalonInfo from '../components/SalonInfo';
import SalonText from "../components/SalonText";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-slideshow-image/dist/styles.css';
import { Helmet } from "react-helmet"

export default function Home() {
  return <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <title>The Sandy Mane: a new high-end salon in Palm Desert California </title>
    </Helmet>
    <NavBar />
    <Hero></Hero>
    <SalonText></SalonText>
    <SalonInfo></SalonInfo>

  </div>
}
