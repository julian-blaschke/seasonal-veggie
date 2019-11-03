import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import './veggie-card.css'

export default class VeggieCard extends Component {
  render() {
    return (
      <Container class="veggie-card">
        <Card style={{ width: '18rem'}}>
          <Card.Body>
            <Card.Title> {this.props.name} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">  {this.props.type} </Card.Subtitle>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
