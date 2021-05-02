import React, { Component } from 'react'
import { Nav, Container, NavDropdown, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import tsm from '../images/tsm.png';

export default function NavBar() {
    return (

        <Navbar className="" expand="lg" bg="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/" className="m-auto "><img className="d-md-none brand-logo pl-3" src={tsm}></img></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">



                <Nav className="m-auto" >

                    <Nav.Link href="#features" >The Stylists</Nav.Link>

                    <Navbar.Brand href="/" className="d-none d-lg-block"><img className="  brand-logo pl-3" src={tsm}></img></Navbar.Brand>





                    <Nav.Link className=" order-3" href="#pricing">The Salon</Nav.Link>
                </Nav>
            </Navbar.Collapse>



        </Navbar >




    )
}



