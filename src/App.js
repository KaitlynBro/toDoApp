import React, { Component } from 'react'
import Header from './Components/Header.js';
import Grateful from './Components/Grateful.js';
import Priorities from './Components/Priorities.js';
import Health from './Components/Health.js';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
          <Grateful />
        </header>
        <section className="lists">
          <Priorities />
        </section>
        <section className="health">
          <Health />
        </section>
      </div>
    )
  }
}

export default App


// TO DO
// Figure out how to have two components repated twice without having the same words -- just want same skeleton without repeating
// Figure out how to loop over jsx elements rather than repeating - Eg. list items
// Loop over list items eg. water intake same way as other elements?
// is it ok to put sections and divs within app.js component?
// use a quote api to pull in inspirational quotes to put at top of page on load - new one each days
// how to get just the date? i don't want the extra stuff :)
// I want the date to show on page load, not on click.
// SAVE SVG IN OWN FILE AND IMPORT INTO NEEDED FILES
