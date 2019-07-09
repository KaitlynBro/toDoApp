import React from 'react';

class Health extends React.Component {
    render() {
        return(
            <div>
                <h2>Don't Forget about your <span>Health</span></h2>
                <div>
                    <div>
                        <h3>Water Intake</h3>
                        <ul>
                            <input type='checkbox' />
                            <input type='checkbox' />
                            <input type='checkbox' />
                            <input type='checkbox' />
                            <input type='checkbox' />
                        </ul>
                    </div>
                    <div>
                        <h3>Today's workout</h3>
                        <textarea rows="4" cols="50"> </textarea>                        
                    </div>
                    <div>
                        <h3>Meals</h3>
                        <div>
                            <div>
                                <h4>Breakfast</h4>
                                <textarea rows="4" cols="50"> </textarea>
                            </div>
                            <div>
                                <h4>Lunch</h4>
                                <textarea rows="4" cols="50"> </textarea>
                            </div>
                            <div>
                                <h4>Dinner</h4>
                                <textarea rows="4" cols="50"> </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        )
    }
}

export default Health