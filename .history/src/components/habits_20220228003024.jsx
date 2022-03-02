import React, { Component } from "react";

class Habits extends Component {
    state = {
        haibits: [
            { name: "Reading", count: 0 },
            { name: "Running", count: 0 },
            { name: "Coding", count: 0 },
        ],
    };
    render() {
        return <ul>this.state.haibits.map(habit =>(<Hait))</ul>;
    }
}

export default Habits;
