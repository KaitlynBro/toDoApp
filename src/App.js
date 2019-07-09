import React from 'react';
import Calendar from './Components/Calendar.js';
import Grateful from './Components/Grateful.js';
import Priorities from './Components/Priorities.js';
import ToDo from './Components/ToDo.js';
import Notes from './Components/Notes.js';
import './App.css';

function App() {
  return (
    <div className="App">
       <Calendar />
       <Grateful />
       <Priorities />
       <ToDo />
       <Notes />
    </div>
  );
}

export default App;

// TO DO
// Figure out how to have two components repated twice without having the same words -- just want same skeleton without repeating
// Figure out how to loop over jsx elements rather than repeating - Eg. list items