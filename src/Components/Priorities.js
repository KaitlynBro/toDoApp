import React from 'react';
import Flower from '.././assets/flower.png';

class Priorities extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={Flower} alt="" />
                </div>
                <div>
                    <p>Priorities</p>
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
