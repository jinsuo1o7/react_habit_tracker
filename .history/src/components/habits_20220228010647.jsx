import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    state = {
        // 배열을 사용할때 id를 가져야 하며, []를 사용하는 것은 금지
        haibits: [
            { id: 0, name: "Reading", count: 0 },
            { id: 1, name: "Running", count: 0 },
            { id: 2, name: "Coding", count: 0 },
        ],
    };

    handleIncrement = (habit) => {
        const habits = [...this.state.habits];
        const idx = habits.
    };
    handleDecrement = (habit) => {};
    handleDelete = (habit) => {};

    render() {
        return (
            <ul>
                {this.state.haibits.map((habit) => (
                    // props를 줄때 배열의 key를 id로 줘야 한다
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    ></Habit>
                ))}
            </ul>
        );
    }
}

export default Habits;
