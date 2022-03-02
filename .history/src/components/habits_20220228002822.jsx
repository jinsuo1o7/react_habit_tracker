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
        return (
            <ul>
                <li className="reading">{this.state.haibits[]}</li>
            </ul>
        );
    }
}

export default Habits;
