
## Functionality Overview

The overall goal of this application was to provide an easy means for people to create
a "hand" of cards and to view the total score of that hand. To do this, values of 2 to
14 were assigned for cards from 2 through Ace.

To easily add and remove cards from the user's hand, the user can filter the deck by
card description (number), suit, and color. The user can also sort by value of cards
in ascending or descending order.

When a card is added to the hand, it's value is automatically added to the "Total Hand
Value" for a quick way for users to determine the total value of their hand.



## Organization of Components

This application is separated into four different component files: App, AlteredList,
DisplayList, and DisplayHand. The App component is the main component of the app
and it contains the main headings and then an AlteredList component. This App
section basically stores the data and handles the logic of the application. The AlteredList
component handles the interaction between the two display components and the App component.
Essentially, it stores the current filter and sort states of the list, and it provides
the necessary access to the data from the App component for users through the DisplayList
and DisplayHand components. The DisplayList and DisplayHand components handle the display
of the deck and the hand respectively.



## Data Passage

The App component creates and contains the card array for the deck and for the hand (which is 
initially empty). This, along with functions related to the deck like shuffle, addToHand, resetHand, etc.,
are passed as props to the AlteredList. AlteredList then contains the sort and filter related user choices
in its state. The filtering of the deck is done before it is passed into DisplayList as a prop along with
the addToHand function (such that users can click on the cards to add them to the hand). The hand array
along with the resetHand and removeFromHand functions are passed to DisplayHand as props. Note that cards
are never really removed from the deck to be added to the hand; they are just filtered out before being
passed to DisplayList (this allows order in the deck to be preserved when the card is removed from the hand).

## User State Changes
The user can change the state through the functions (shuffle, resetHand, addToHand,
removeFromHand) and the arrays (deck and hand) that are passed from the App component. Then, these are provided
by the AlteredList, DisplayList, or DisplayHand components to the user through buttons or clicks that they
can then use to alter the state.