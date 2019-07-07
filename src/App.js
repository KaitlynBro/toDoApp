import React from 'react';
import Calendar from './Components/Calendar.js';
import Grateful from './Components/Grateful.js';
import Priorities from './Components/Priorities.js';
import './App.css';

function App() {
  return (
    <div className="App">
       <Calendar />
       <Grateful />
       <Priorities />
    </div>
  );
}

export default App;

// to do functionality

// multiple inputs for to dos - i want it to resemble a piece of notepad paper so inputs will be there on page load
// user can click on input and write something and delete it as needed 
// once user has completed a to do, they can check off the box beside that to do 
// if user wants to undo a checked off to do, they can click on checkbox and undo it
