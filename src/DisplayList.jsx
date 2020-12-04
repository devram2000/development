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
      <h5>{"Description: " + card.description} <br />
      {"Suit: " + card.suit} <br />
      {"Color: " + card.color} <br />
      {"Value: " + card.number}</h5>
    </div>);
}

  render() {
    return (
      <div className="cards">
        {this.props.list.map(this.display)}
      </div>

    );
  }
}
