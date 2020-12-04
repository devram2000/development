import './App.css';
import React from "react";

/* 

 Initializes app 

 */

export default class DisplayHand extends React.Component {

 display = (card) => {
  return (
    <div className="card" key={card.shortName} onClick={() => this.props.removeFromHand(card)}>
      <img src={card.img_src} alt={"Card: " + card.name} />
      <h5>{"Description: " + card.description} <br />
      {"Suit: " + card.suit} <br />
      {"Color: " + card.color} <br />
      {"Value: " + card.number}</h5>
    </div>);
}

  render() {
    return (
      <div className="hand-cards">
        <p>Total Hand Value: {this.props.hand.reduce((total, card) => total + card.number, 0)}</p>
        <button onClick={this.props.resetHand}>Reset Hand</button>
        <div className="cards">
        {this.props.hand.map(this.display)}
        </div>
        
      </div>

    );
  }
}
