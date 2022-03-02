import React, { Component } from "react";

class Habit extends Component {
    render() {
        return (
            <>
                <span className="habit-name">habit</span>
                <saprn className="habit-count">4</saprn>
                <button>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button>
                    <i className="fas fa-minus-square"></i>
                </button>
            </>
        );
    }
}

export default Habit;
