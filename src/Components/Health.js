import React from 'react';

class Health extends React.Component {
    render() {
        return(
            <div className="health-wrapper">
                <h2>Don't Forget about your <span>Health</span></h2>
                <div className="health-content">
                    <div className="water-intake">
                        <h3>Water Intake</h3>
                        <div className="checkbox">
                            <input type="checkbox" id="checkbox_4" />
                            <label for="checkbox_4"></label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="checkbox_5" />
                            <label for="checkbox_5"></label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="checkbox_6" />
                            <label for="checkbox_6"></label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="checkbox_7" />
                            <label for="checkbox_7"></label>
                        </div>
                    </div>
                    <div className="workout">
                        <h3>Today's workout</h3>
                        <textarea rows="4" cols="50" />                        
                    </div>
                    <div className="meals-wrapper">
                        <h3>Meals</h3>
                        <div className="meals">
                            <div>
                                <h4>Breakfast</h4>
                                <textarea rows="4" cols="50" />
                            </div>
                            <div>
                                <h4>Lunch</h4>
                                <textarea rows="4" cols="50" />
                            </div>
                            <div>
                                <h4>Dinner</h4>
                                <textarea rows="4" cols="50" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        )
    }
}

export default Health