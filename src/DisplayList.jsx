import './App.css';
import React from "react";

/* 

 Initializes app 

 */

export default class DisplayList extends React.Component {

  display = (card) => {
    return (
      // Adds to hand on click
      <div className="card" key={card.shortName} onClick={() => this.props.addToHand(card)}>
        {/* Card Image */}
        <img src={card.img_src} alt={"Card: " + card.name} />
        {/* Card Information */}
        <h5>{"Description: " + card.description} <br />
          {"Suit: " + card.suit} <br />
          {"Color: " + card.color} <br />
          {"Value: " + card.number}</h5>
      </div>);
  }

  render() {
    return (
      <div className="cards">
        {/* Maps Deck List to display */}
        {this.props.list.map(this.display)}
      </div>

    );
  }
}
