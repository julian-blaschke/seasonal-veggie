import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

export default class MyGarden extends Component {
  render() {
    return (
      <Container>
        <br></br>
        <h2>My Garden </h2>
        <br></br>
        <h4>🐌 My saved veggies:</h4> 
        <br></br>
        <p>You haven`t saved any veggies to `Your Garden` yet. 🤷‍</p>
      </Container>
    )
  }
}
