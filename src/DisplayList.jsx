import './App.css';
import React from "react";

/* 

 Initializes app 

 */

export default class DisplayList extends React.Component {

 display = (card) => {
  return (
    <div className="card" key={card.shortName} onClick={() => this.props.addToHand(card)}>
      <img src={card.img_src} alt={"Card: " + card.name} />
      <h4>{"Description: " + card.description}</h4>
      <h4>{"Suit: " + card.suit}</h4>
      <h4>{"Color: " + card.color}</h4>
      <h4>{"Value: " + card.number}</h4>
    </div>);
}

  render() {
    return (
      <div className="cards">
        <p>Deck</p>
        {this.props.list.map(this.display)}
      </div>

    );
  }
}
