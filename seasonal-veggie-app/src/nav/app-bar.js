import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export default function ButtonAppBar() {
  return (
    <Navbar bg="light" >
      <Navbar.Brand href="#home">Seasonal Veggies 🍌</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    </Navbar>
  );
}