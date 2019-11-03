import React, { Component } from 'react'
import VeggieCard from './veggie-card/veggie-card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class home extends Component {

  render() {
    //veggies array with holding all values
    let veggies = [
      {
        name : "Eggplant 🍆",
        type : "vegetable",
        description : "a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit.",
      },
      {
        name : "Strawberry 🍓",
        type : "fruit",
        description : "a sweet soft red fruit with a seed-studded surface.",
      },
      {
        name : "Fries 🍟",
        type : "fast food",
        description : "are served hot, either soft or crispy, and are generally eaten as part of lunch or dinner or by themselves as a snack, and they commonly appear on the menus of diners, fast food restaurants, pubs, and bars.",
      },
    ];

    return (
      <Container>
        <br></br>
        <h2>Home</h2>
        <br></br>
        <h4>⭐️ In season today:</h4> 
        <br></br>
        <Container>
          <Row>
            {
              //iterating through all veggies
              veggies.map((veggie) => {
                return <Col><VeggieCard name={veggie.name} type={veggie.type} description={veggie.description}></VeggieCard></Col>
              })
            }
          </Row>
        </Container>
        <Container>
          <br></br>
          <h4>🌦 What are seasonal veggies?</h4> 

          When are pears in season? What are some examples of fall fruits? With so many fruits and vegetables being imported from other states and countries, it can be hard to know what fruits are in season around your restaurant, cafe, or bar. Restaurant trends show that customers are willing to pay more for the addition of flavorful and vibrant colors provided by local and organic fresh vegetables and fruits in season now.

          Cooking with local, fresh seasonal vegetables and herbs is delicious, healthy, and easy to do with this convenient guide. We've broken down the contiguous United States into regions, so you can see the fruits and vegetables in season in your part of the country all year round.

          As you explore, however, it’s important to keep in mind that these lists may vary depending on where you live, even within a certain region. Be sure to research your area using information from your local government or food guides to find what vegetables are in season near you.
        </Container>
      </Container>
    )
  }
}
