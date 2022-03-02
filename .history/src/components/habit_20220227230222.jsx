import React, { Component } from "react";

class Habit extends Component {
    render() {
        return (
            <>
                <div className="habit-name">habit</div>
                <div className="habit-count">4</div>
                <button>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button>
                    <i className="fas fa-plus-square"></i>
                </button>
            </>
        );
    }
}

export default Habit;
