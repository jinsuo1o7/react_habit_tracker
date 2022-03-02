import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    state = {
        haibits: [
            {id: name: "Reading", count: 0 },
            { name: "Running", count: 0 },
            { name: "Coding", count: 0 },
        ],
    };
    render() {
        return (
            <ul>
                {this.state.haibits.map((habit) => (
                    <Habit habit={habit}></Habit>
                ))}
            </ul>
        );
    }
}

export default Habits;
