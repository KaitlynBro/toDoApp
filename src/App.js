import React from 'react';
import Calendar from './Components/Calendar.js';
import Grateful from './Components/Grateful.js';
import Priorities from './Components/Priorities.js';
import ToDo from './Components/ToDo.js';
import Health from './Components/Health.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Calendar />
      </header>
      <section className="priorities">
        <Grateful />
        <Priorities />
      </section>
      <section className="lists">
        <div>
          <h2>To Dos</h2>
          <ToDo />
        </div>
        <div>
          <h2>Tomorrow</h2>
          <ToDo />
        </div>
        <div>
          <h2>Notes</h2>
          <ToDo />
        </div>
      </section>
      <section className="health">
        <Health />
      </section>
    </div>
  );
}

export default App;

// TO DO
// Figure out how to have two components repated twice without having the same words -- just want same skeleton without repeating
// Figure out how to loop over jsx elements rather than repeating - Eg. list items
// Loop over list items eg. water intake same way as other elements?
// is it ok to put sections and divs within app.js component?
// use a quote api to pull in inspirational quotes to put at top of page on load - new one each days
// how to get just the date? i don't want the extra stuff :)
