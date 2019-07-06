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
        <div>
            <p>Today's Date</p>
            <button onClick={ this.handleClick }>{this.state.day}</button>
        </div>
    )
  }
}
export default Calendar;