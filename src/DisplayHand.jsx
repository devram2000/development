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
      <h4>{"Description: " + card.description}</h4>
      <h4>{"Suit: " + card.suit}</h4>
      <h4>{"Color: " + card.color}</h4>
      <h4>{"Value: " + card.number}</h4>
    </div>);
}

  render() {
    return (
      <div className="hand-cards">
        <p>Hand</p>
        <div className="cards">
        {this.props.hand.map(this.display)}
        </div>
        
        <p>Total Hand Value: {this.props.hand.reduce((total, card) => total + card.number, 0)}</p>
        <button onClick={this.props.resetHand}>Reset Hand</button>
      </div>

    );
  }
}
