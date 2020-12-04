import './App.css';
import React from "react";
import Shuffle from "shuffle";
import AlteredList from "./AlteredList.jsx"

/* 

 Initializes app 

 */

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state =
    {
      cards: this.initialize_cards(),
      hand: []
    }

  }

  /* 

  Creates a new array of key-value formatted cards using the shuffle npm package.

  */

  initialize_cards = () => {
    let deck = Shuffle.shuffle();
    let initial_cards = deck.draw(52);
    initial_cards = initial_cards.map(this.keyValue);

    return initial_cards;
  }

  /* 

 Uses initialize_cards to set the card state to a new dek

 */

  shuffle = () => {
    this.setState({
      cards: this.initialize_cards()
    })
  }


  /* 

 Checks whether the inputted item is in the hand array.

 */
  isInHand = item => {
    return !this.state.hand.includes(item)
  }

  /* 

 Takes an input of a card and filters the hand list for occurrences of that card.

 */

  removeFromHand = (card) => {
    this.setState({
      hand: this.state.hand.filter((c) => c !== card)
    })
  }

  /* 
 
   Adds a card to the hand.
 
   */

  addToHand = (card) => {
    this.setState({
      hand: [...this.state.hand, card]
    })
  }

  /* 

  Removes all of the cards in the hand.

 */
  resetHand = () => {
    this.setState({
      hand: []
    })
  }


  /* 

  Formats the returned card array from the shuffle npm package into key values;
  takes card images from deckofcardsapi.com

  */

  keyValue = (card) => {
    let card_image_url = "https://deckofcardsapi.com/static/img/";
    var cardName = card.toShortDisplayString();

    if (cardName.slice(0, 2) === "10") {
      cardName = cardName.slice(1, 3);
    }

    var cardColor = "Black";

    if (card.suit === "Heart" || card.suit === "Diamond") {
      cardColor = "Red";
    }

    let key_value = {
      name: card.toString(), shortName: cardName, suit: card.suit, description: card.description,
      color: cardColor, number: card.sort, img_src: card_image_url + cardName + ".png"
    };

    return key_value;
  }


  /* 

  Render directly uses the AlteredList Component 

  */

  render() {
    return (
      <div>
        <h4>Card Hand Accumulator: Click on a card to move it to/from your hand!</h4>
        <AlteredList list={this.state.cards} shuffle={this.shuffle} hand={this.state.hand}
          isInHand={this.isInHand} removeFromHand={this.removeFromHand} addToHand={this.addToHand} resetHand={this.resetHand} />
      </div>
    );
  }
}
