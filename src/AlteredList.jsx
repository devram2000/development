import './App.css';
import React from "react";
import { Nav, Dropdown, DropdownButton } from "react-bootstrap";
import DisplayList from "./DisplayList.jsx";
import DisplayHand from "./DisplayHand.jsx";


/* 

Handles interactions between the DisplayList and DisplayHand components and the App component

 */

export default class AlteredList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suit: "All",
      description: "All",
      color: "All",
      sort: "None",
    };

  }

  /* 

  Changes filter value for the suit state variable

  */

  onSelectFilterSuit = event => {
    this.setState({
      suit: event
    })
  };


  /* 
 
   Changes filter value for the description state variable
 
   */

  onSelectFilterDesc = event => {
    this.setState({
      description: event
    })
  };

  /* 

  Changes filter value for the color state variable

  */

  onSelectFilterColor = event => {
    this.setState({
      color: event
    })
  };


  /* 

  Changes sort value for the sort state variable

  */

  onSelectSort = event => {
    this.setState({
      sort: event
    })
  };

  /* 
 
   Takes a state and an item_state and returns a boolean for the
   filter value of that item of the .filter function.
 
   */

  filterChecker = (state, item_state) => {
    if (state === "All") {
      return true
    } else if (state === item_state) {
      return true
    } else {
      return false
    }
  }

  /* 

 Uses the filterChecker function to ensure that the item passes the suit, description, and color
 filters that are currently applied, checks that the card is not in the hand,
  and returns a boolean value for the filter value of that item of the .filter function.

 */

  matchesFilter = item => {
    return this.filterChecker(this.state.suit, item.suit) && this.filterChecker(this.state.description, item.description) && this.filterChecker(this.state.color, item.color) && this.props.isInHand(item)
  }


  /* 

 Takes two items and returns a value representing the sorting preferences for the
 current state of the .sort function.

 */
  matchesSort = (item1, item2) => {
    if (this.state.sort === "None") {
      return 0
    } else if (this.state.sort === "increasing") {
      return item1.number - item2.number
    } else {
      return item2.number - item1.number
    }
  }

  /* 

 Sets the filter and sort values back to default.

 */

  removeChanges = () => {
    this.setState({
      suit: "All",
      description: "All",
      color: "All",
      sort: "None"
    })
  }


  /* 

  Sets the filter and sort values back to default using remove changes,
  and calls the shuffle function in the props to shuffle the deck.

  */

  shuffleDeck = () => {
    this.removeChanges()
    this.props.shuffle()
  }


  render() {
    return (
      <div className="main-row">
        <div className="main-hand">
          {/* DisplayHand Component for Hand */}
          <DisplayHand hand={this.props.hand} removeFromHand={this.props.removeFromHand} resetHand={this.props.resetHand} />
        </div>
        <div>
          <div className="main-alter">
            <div className="main-column">
              <Nav className="nav" variant="pills" >
                {/* Filter section for Card Description */}
                <p>Description Filter:</p>
                <Nav.Item className="nav-item"><Nav.Link eventKey="All" onSelect={this.onSelectFilterDesc}>All</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Two" onSelect={this.onSelectFilterDesc}>Two</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Three" onSelect={this.onSelectFilterDesc}>Three</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Four" onSelect={this.onSelectFilterDesc}>Four</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Five" onSelect={this.onSelectFilterDesc}>Five</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Six" onSelect={this.onSelectFilterDesc}>Six</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Seven" onSelect={this.onSelectFilterDesc}>Seven</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Eight" onSelect={this.onSelectFilterDesc}>Eight</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Nine" onSelect={this.onSelectFilterDesc}>Nine</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Ten" onSelect={this.onSelectFilterDesc}>Ten</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Jack" onSelect={this.onSelectFilterDesc}>Jack</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Queen" onSelect={this.onSelectFilterDesc}>Queen</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="King" onSelect={this.onSelectFilterDesc}>King</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Ace" onSelect={this.onSelectFilterDesc}>Ace</Nav.Link></Nav.Item>
              </Nav>

              {/* Filter section for Card Description */}
              <Nav className="nav">
                <p>Suit Filter:</p>
                <Nav.Item className="nav-item"><Nav.Link eventKey="All" onSelect={this.onSelectFilterSuit}>All</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Diamond" onSelect={this.onSelectFilterSuit}>Diamonds</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Heart" onSelect={this.onSelectFilterSuit}>Hearts</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Spade" onSelect={this.onSelectFilterSuit}>Spades</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Club" onSelect={this.onSelectFilterSuit}>Clubs</Nav.Link></Nav.Item>
              </Nav>

              {/* Filter section for Card Color */}
              <Nav className="nav">
                <p>Color Filter:</p>
                <Nav.Item className="nav-item"><Nav.Link eventKey="All" onSelect={this.onSelectFilterColor}>All</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Red" onSelect={this.onSelectFilterColor}>Red</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link eventKey="Black" onSelect={this.onSelectFilterColor}>Black</Nav.Link></Nav.Item>
              </Nav>

              {/* Dropdown Button for Sort */}
            </div>
            <div className="dropdown">
              <DropdownButton className="b1" title="Sort">
                <Dropdown.Item eventKey="None" onSelect={this.onSelectSort} className="dropdown-item">None</Dropdown.Item>
                <Dropdown.Item eventKey="increasing" onSelect={this.onSelectSort} className="dropdown-item">Lowest to Highest</Dropdown.Item>
                <Dropdown.Item eventKey="decreasing" onSelect={this.onSelectSort} className="dropdown-item">Highest to Lowest</Dropdown.Item>
              </DropdownButton>
            </div>

          </div>

          <div className="changing-buttons">
            {/* Button for Removing Filters and Sort */}
            <button onClick={this.removeChanges}>Remove Filters and Sort</button>

            {/* Button for Removing Shuffling Deck */}
            <button onClick={this.shuffleDeck}>Shuffle Deck</button>

          </div>

          <div>
            {/* DisplayList Component for Deck */}
            <DisplayList list={this.props.list.filter(this.matchesFilter).sort(this.matchesSort)} addToHand={this.props.addToHand} />
          </div>

        </div>
      </div>
    );
  }
}
