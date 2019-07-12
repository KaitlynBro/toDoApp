import React from 'react';
import Flower from '.././assets/flower.png';

class Priorities extends React.Component {
    render() {
        return (
            <div className="priorities-wrapper">
                <div className="flower">
                    <img src={Flower} alt="" />
                </div>
                <div className="priorities-content">
                    <h2>Priorities</h2>
                    <div className="priority">
                        <input type="text" />
                        <div className="checkbox">
                            <input type="checkbox" id="checkbox_1" />
                            <label for="checkbox_1"></label>
                        </div>
                    </div>
                    <div className="priority">
                        <input type="text" />
                        <div className="checkbox">
                            <input type="checkbox" id="checkbox_2" />
                            <label for="checkbox_2"></label>
                        </div>
                    </div>
                    <div className="priority">
                        <input type="text" />
                        <div className="checkbox">
                            <input type="checkbox" id="checkbox_3" />
                            <label for="checkbox_3"></label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Priorities
