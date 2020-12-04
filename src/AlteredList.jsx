import './App.css';
import React from "react";
import { Nav, Dropdown, DropdownButton } from "react-bootstrap";
import DisplayList from "./DisplayList.jsx";
import DisplayHand from "./DisplayHand.jsx";


/* 


 */

export default class AlteredList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suit: "All",
      description: "All",
      color: "All",
      sort: "None",
      hand: []
    };

  }

  /* 



  */

  onSelectFilterSuit = event => {
    this.setState({
      suit: event
    })
  };


  /* 

  */

  onSelectFilterDesc = event => {
    this.setState({
      description: event
    })
  };

  /* 

  */

  onSelectFilterColor = event => {
    this.setState({
      color: event
    })
  };


  /* 

  */

  onSelectSort = event => {
    this.setState({
      sort: event
    })
  };

  /* 
  
  
  */

  matchesFilterSuit = item => {
    // all items should be shown when no filter is selected
    if (this.state.suit === "All") {
      return true
    } else if (this.state.suit === item.suit) {
      return true
    } else {
      return false
    }
  }

  matchesFilterDesc = item => {
    // all items should be shown when no filter is selected
    if (this.state.description === "All") {
      return true
    } else if (this.state.description === item.description) {
      return true
    } else {
      return false
    }
  }

  matchesFilterColor= item => {
    // all items should be shown when no filter is selected
    if (this.state.color === "All") {
      return true
    } else if (this.state.color === item.color) {
      return true
    } else {
      return false
    }
  }

  filterChecker = (state, item_state) => {
    if (state === "All") {
      return true
    } else if (state === item_state) {
      return true
    } else {
      return false
    }
  }

  isInHand = item => {
    return !this.state.hand.includes(item)
  }

  matchesFilter = item => {
    return this.filterChecker(this.state.suit, item.suit) && this.filterChecker(this.state.description, item.description) && this.filterChecker(this.state.color, item.color) && this.isInHand(item)
  }

  matchesSort = (item1, item2) => {
    if (this.state.sort === "None") {
      return 0
    } else if (this.state.sort === "increasing") {
      return item1.number - item2.number
    } else {
      return item2.number - item1.number
    }
  }

  removeFromHand = (card) => {
    this.setState({
      hand: this.state.hand.filter((c) => c !== card)
    })
  }

  addToHand = (card) => {
    this.setState({
      hand: [...this.state.hand, card]
    })
  }

  resetHand = () => {
    this.setState({
      hand: []
    })
  }

  removeChanges = () => {
    this.setState({
      suit: "All",
      description: "All",
      color: "All",
      sort: "None"
    })
  }

  shuffleDeck = () => {
    this.removeFromHand()
    this.props.shuffle()
  }


  render() {
    return (
      <div>

        <DisplayHand hand={this.state.hand} removeFromHand={this.removeFromHand} resetHand={this.resetHand} />

        <Nav className="nav" variant="pills" >
          <p>Description Filter:</p>
          <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterDesc}>All</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Two" onSelect={this.onSelectFilterDesc}>Two</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Three" onSelect={this.onSelectFilterDesc}>Three</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Four" onSelect={this.onSelectFilterDesc}>Four</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Five" onSelect={this.onSelectFilterDesc}>Five</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Six" onSelect={this.onSelectFilterDesc}>Six</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Seven" onSelect={this.onSelectFilterDesc}>Seven</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Eight" onSelect={this.onSelectFilterDesc}>Eight</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Nine" onSelect={this.onSelectFilterDesc}>Nine</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Ten" onSelect={this.onSelectFilterDesc}>Ten</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Jack" onSelect={this.onSelectFilterDesc}>Jack</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Queen" onSelect={this.onSelectFilterDesc}>Queen</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="King" onSelect={this.onSelectFilterDesc}>King</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Ace" onSelect={this.onSelectFilterDesc}>Ace</Nav.Link></Nav.Item>
        </Nav>

        <Nav className="nav">
          <p>Suit Filter:</p>
          <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterSuit}>All</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Diamond" onSelect={this.onSelectFilterSuit}>Diamonds</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Heart" onSelect={this.onSelectFilterSuit}>Hearts</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Spade" onSelect={this.onSelectFilterSuit}>Spades</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Club" onSelect={this.onSelectFilterSuit}>Clubs</Nav.Link></Nav.Item>
        </Nav>

        <Nav className="nav">
          <p>Color Filter:</p>
          <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterColor}>All</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Red" onSelect={this.onSelectFilterColor}>Red</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="Black" onSelect={this.onSelectFilterColor}>Black</Nav.Link></Nav.Item>
        </Nav>


        <DropdownButton title="Sort">
          <Dropdown.Item eventKey="None" onSelect={this.onSelectSort}>None</Dropdown.Item>
          <Dropdown.Item eventKey="increasing" onSelect={this.onSelectSort}>Lowest to Highest</Dropdown.Item>
          <Dropdown.Item eventKey="decreasing" onSelect={this.onSelectSort}>Highest to Lowest</Dropdown.Item>
        </DropdownButton>

        <button onClick={this.removeChanges}>Remove Filters and Sort</button>

        <button onClick={this.shuffleDeck}>Shuffle Deck</button>

        <DisplayList list={this.props.list.filter(this.matchesFilter).sort(this.matchesSort)} addToHand={this.addToHand} />
      </div>
    );
  }
}
