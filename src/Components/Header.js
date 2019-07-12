import React from 'react';

class Calendar extends React.Component {
    constructor() {
      super();
      let today = new Date();
      this.state = {
          today: today
      }
  }
  handleClick = () => {
    this.setState({day: this.state.today + ''})
  }
  render() {
    return (
        <div className="calendar">
          <h1>A New Day</h1>
          <label>
            Today's Date
            <button onClick={ this.handleClick }>{this.state.day}</button>
          </label>
        </div>
    )
  }
}
export default Calendar;