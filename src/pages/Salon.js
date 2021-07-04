import React from 'react'
import NavBar from '../components/Nav.js';
import Hero from '../components/hero';
import SalonText from '../components/salonText.js';
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Salon() {
    return (
        <div>
            <NavBar />
            <SalonText />
        </div>

    )
}
