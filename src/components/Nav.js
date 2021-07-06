import React, { Component } from 'react'
import { Nav, Container, NavDropdown, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import tsm from '../images/tsm.png';

export default function NavBar() {
    return (

        <Navbar className="bg-transparent shadow-sm" expand="lg" bg="transparent">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/" className="m-auto "><img className="d-md-none brand-logo pl-3" src={tsm}></img></Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">



                <Nav className="m-auto" >

                    <Nav.Link href="/"> Salon</Nav.Link>
                    <Nav.Link href="/Stylists"  >Stylists</Nav.Link>

                    <Navbar.Brand href="/" className="d-none d-lg-block"><img className="  brand-logo pl-3" src={tsm}></img></Navbar.Brand>

                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/products"  >Products</Nav.Link>





                </Nav>
            </Navbar.Collapse>



        </Navbar >




    )
}



