import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    state = {
        haibits: [
            { name: "Reading", count: 0 },
            { name: "Running", count: 0 },
            { name: "Coding", count: 0 },
        ],
    };
    render() {
        return (
            <ul>
                this.state.haibits.map(habit =>(<Habit></Habit>))
            </ul>
        );
    }
}

export default Habits;
