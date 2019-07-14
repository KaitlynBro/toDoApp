import React from 'react';

class Calendar extends React.Component {
    constructor() {
      super();
      const d = new Date();
      const weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      const n = weekday[d.getDay()];
      this.state = {
          today: n
      }
  }
  componentDidMount() {
    this.setState({day: this.state.today + ''})
  }
  render() {
    return (
        <div className="calendar">
            <h1>{this.state.day}</h1>
        </div>
    )
  }
}
export default Calendar;