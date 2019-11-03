import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'



export default function ButtonAppBar() {
  return (
    <Navbar bg="light" >
      <Navbar.Brand href="#">Seasonal Veggies 🍌</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
        <Nav.Link><Link to="/my-garden">My Garden</Link></Nav.Link>
      </Nav>
    </Navbar>
  );
}