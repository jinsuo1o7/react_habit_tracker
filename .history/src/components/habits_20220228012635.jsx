import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    render() {
        return (
            <ul>
                {this.props.haibits.map((habit) => (
                    // props를 줄때 배열의 key를 id로 줘야 한다
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        onDelete={this.pt}
                    ></Habit>
                ))}
            </ul>
        );
    }
}

export default Habits;
