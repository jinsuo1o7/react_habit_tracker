import React, { Component } from "react";

class Habit extends Component {
    render() {
        return (
            <>
                <span className="habit-name">habit</span>
                <span className="habit-count">4</span>
                <button className="habit-button habit-increase">
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease">
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-">
                    <i className="fas fa-trash"></i>
                </button>
            </>
        );
    }
}

export default Habit;
