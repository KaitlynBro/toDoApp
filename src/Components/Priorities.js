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
                    <form>
                        <input type="text" />
                        <input type="checkbox"></input>
                    </form>
                    <form>
                        <input type="text" />
                        <input type="checkbox"></input>
                    </form>
                    <form>
                        <input type="text" />
                        <input type="checkbox"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Priorities
