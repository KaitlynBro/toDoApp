import React from 'react';

class Grateful extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
    this.setState({value: event.target.value});
    }
    handleSubmit(event) {
    event.preventDefault();
    }
    render() {
        return (
            <div className="grateful-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h2>Today I'm Grateful for</h2>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        )
    }
}

export default Grateful