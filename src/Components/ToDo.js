import React from 'react'

class Todo extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <div className="checkbox">
            <input type="checkbox" id="checkbox_8" />
            <label for="checkbox_8"></label>
        </div>
        <div>
            <input type="text" />
            <div className="checkbox">
                <input type="checkbox" id="checkbox_9" />
                <label for="checkbox_9"></label>
            </div>
        </div>
        <div>
            <input type="text" />
            <div className="checkbox">
                <input type="checkbox" id="checkbox_10" />
                <label for="checkbox_10"></label>
            </div>
        </div>
        <div>
            <input type="text" />
            <div className="checkbox">
                <input type="checkbox" id="checkbox_11" />
                <label for="checkbox_11"></label>
            </div>
        </div>
        <div>
            <input type="text" />
            <div className="checkbox">
                <input type="checkbox" id="checkbox_12" />
                <label for="checkbox_12"></label>
            </div>
        </div>
        <div>
            <input type="text" />
            <div className="checkbox">
                <input type="checkbox" id="checkbox_13" />
                <label for="checkbox_13"></label>
            </div>
        </div>
      </div>
    )
  }
}

export default Todo
