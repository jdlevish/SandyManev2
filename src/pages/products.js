import React from 'react'
import NavBar from '../components/Nav';
import '../App.css';



import { Component } from "react"
import { Container } from 'react-bootstrap';

// import logo from './logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Products from '../components/products.js'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
    return <div className="App">
        <NavBar />
        <Container>
            <div className="row justify-content-around">
                <Products />
            </div>
        </Container>


    </div>
}
