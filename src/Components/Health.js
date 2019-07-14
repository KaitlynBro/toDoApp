import React from 'react';

class Health extends React.Component {
    render() {
        return(
            <div className="health-wrapper">
                <div className="health-content">
                    <div className="water-intake">
                        <h2>Water Intake</h2>
                        <div className="water-content">
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_9" />
                                <label for="checkbox_9">
                                    <svg width="30%" viewbox="0 0 30 42">
                                        <path fill="transparent" stroke="#000" stroke-width="1.5"
                                            d="M15 3
                                            Q16.5 6.8 25 18
                                            A12.8 12.8 0 1 1 5 18
                                            Q13.5 6.8 15 3z" />
                                    </svg>
                                </label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_10" />
                                <label for="checkbox_10">
                                    <svg width="30%" viewbox="0 0 30 42">
                                        <path fill="transparent" stroke="#000" stroke-width="1.5"
                                            d="M15 3
                                            Q16.5 6.8 25 18
                                            A12.8 12.8 0 1 1 5 18
                                            Q13.5 6.8 15 3z" />
                                    </svg>
                                </label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_11" />
                                <label for="checkbox_11">
                                    <svg width="30%" viewbox="0 0 30 42">
                                        <path fill="transparent" stroke="#000" stroke-width="1.5"
                                            d="M15 3
                                            Q16.5 6.8 25 18
                                            A12.8 12.8 0 1 1 5 18
                                            Q13.5 6.8 15 3z" />
                                    </svg>
                                </label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_12" />
                                <label for="checkbox_12">
                                    <svg width="30%" viewbox="0 0 30 42">
                                        <path fill="transparent" stroke="#000" stroke-width="1.5"
                                            d="M15 3
                                            Q16.5 6.8 25 18
                                            A12.8 12.8 0 1 1 5 18
                                            Q13.5 6.8 15 3z" />
                                    </svg>
                                </label>
                            </div>                            
                        </div>
                    </div>
                    <div className="health-bottom">
                        <div className="workout">
                            <h3>Today's workout</h3>
                            <textarea rows="4" cols="50" />                        
                        </div>
                        <div className="meals-wrapper">
                            <h3>Meals</h3>
                            <div className="meals">
                                <div className="meal">
                                    <h4>Breakfast</h4>
                                    <textarea rows="4" cols="50" />
                                </div>
                                <div className="meal">
                                    <h4>Lunch</h4>
                                    <textarea rows="4" cols="50" />
                                </div>
                                <div className="meal">
                                    <h4>Dinner</h4>
                                    <textarea rows="4" cols="50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        )
    }
}

export default Health