import './App.css';
import React from "react";

/* 

 Initializes app 

 */

export default class DisplayHand extends React.Component {

  display = (card) => {
    return (
      // Removes from hand on click
      <div className="card" key={card.shortName} onClick={() => this.props.removeFromHand(card)}>
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
      <div className="hand-cards">
        {/* Calculates total hand value by using the reduce function */}
        <p>Total Hand Value: {this.props.hand.reduce((total, card) => total + card.number, 0)}</p>
        {/* Resents hand by calling resetHand prop function */}
        <button onClick={this.props.resetHand}>Reset Hand</button>
        <div className="cards">
          {/* Maps Deck List to display */}
          {this.props.hand.map(this.display)}
        </div>

      </div>

    );
  }
}
