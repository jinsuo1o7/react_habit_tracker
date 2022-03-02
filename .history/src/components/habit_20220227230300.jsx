import React, { Component } from "react";

class Habit extends Component {
    render() {
        return (
            <>
                <span className="habit-name">habit</span>
                <div className="habit-count">4</div>
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
