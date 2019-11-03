import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <Container>
        <br></br>
        <div className="not-found">
          <h2>404 not found 😞</h2>
          <p>Sorry, but we couldn`t find any 🍉 by that url</p>
          Visit <Link to="/home">Home</Link>
        </div>
      </Container>
    )
  }
}
