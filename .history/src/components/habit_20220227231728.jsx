import React, { Component } from "react";

class Habit extends Component {
    render() {
        return (
            <li className="">
                <span className="habit-name">habit</span>
                <span className="habit-count">4</span>
                <button className="habit-button habit-increase">
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease">
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
