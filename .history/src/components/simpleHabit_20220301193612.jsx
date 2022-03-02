import React, { Component, useState } from "react";

const SimpleHabit = (props) => {
    // ReactHook식 state선언법 const[data, ]
    const [count, setCount] = useState(0);
    // useState를 호출하면 실제 state값인 count와 이를 변경할 setCount를 줌
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
