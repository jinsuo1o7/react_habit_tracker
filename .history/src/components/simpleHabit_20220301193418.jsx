import React from "react";

const SimpleHabit = (props) => {
  const [count,setCount] = use
    return (
        <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{this.state.count}</span>
            <button
                className="habit-button habit-increase"
                onClick={this.handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;
