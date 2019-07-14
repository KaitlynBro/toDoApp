import React from 'react';
import Flower from '.././assets/flower.png';

class Priorities extends React.Component {
    render() {
        return (
            <div className="lists-wrapper">
                <div className="left">
                    <img src={Flower} alt="" />
                </div>
                <div className="right">
                    <div>
                        <h2>Priorities</h2>
                        <div className="list-item">
                            <input type="text" />
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_1" />
                                <label for="checkbox_1"></label>
                            </div>
                        </div>
                        <div className="list-item">
                            <input type="text" />
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_2" />
                                <label for="checkbox_2"></label>
                            </div>
                        </div>
                        <div className="list-item">
                            <input type="text" />
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_3" />
                                <label for="checkbox_3"></label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>To Do</h2>
                        <div className="list-item">
                            <input type="text" />
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_4" />
                                <label for="checkbox_4"></label>
                            </div>
                        </div>
                        <div className="list-item">
                            <input type="text" />
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_5" />
                                <label for="checkbox_5"></label>
                            </div>
                        </div>
                        <div className="list-item">
                            <input type="text" />
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_6" />
                                <label for="checkbox_6"></label>
                            </div>
                        </div>
                        <div className="list-item">
                            <input type="text" />
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_7" />
                                <label for="checkbox_7"></label>
                            </div>
                        </div>
                        <div className="list-item">
                            <input type="text" />
                            <div className="checkbox">
                                <input type="checkbox" id="checkbox_8" />
                                <label for="checkbox_8"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Priorities
