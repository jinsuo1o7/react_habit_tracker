import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    state = {
      // 배열을 사용할때 id를 가져야 하며, ㅇ 
        haibits: [
            { id: 0, name: "Reading", count: 0 },
            { id: 1, name: "Running", count: 0 },
            { id: 2, name: "Coding", count: 0 },
        ],
    };
    render() {
        return (
            <ul>
                {this.state.haibits.map((habit) => (
                    <Habit key={habit.id} habit={habit}></Habit>
                ))}
            </ul>
        );
    }
}

export default Habits;
