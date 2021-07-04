import React, { Component } from "react"
import { Container } from 'react-bootstrap';

// import logo from './logo.svg';
import '../App.css';
import NavBar from '../components/Nav.js';
import Stylists from '../components/stylists.js'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
    return <div className="App">
        <NavBar />
        <Container>
            <div className="row justify-content-around">
                <Stylists />
            </div>
        </Container>


    </div>
}
