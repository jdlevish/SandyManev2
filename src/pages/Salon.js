import React from 'react'
import NavBar from '../components/Nav.js';
import Hero from '../components/hero';
import SalonText from '../components/SalonText.js';
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';

export default function Salon() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>The Sandy Mane: a new high-end salon in Palm Desert California </title>
            </Helmet>
            <NavBar />
            <SalonText />
        </div>

    )
}
