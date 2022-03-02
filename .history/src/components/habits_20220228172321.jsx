import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
    render() {
        return (
            <>
                <HabitAddForm onAdd={this.props.onAdd} />
                <ul>
                    {this.props.habits.map((habit) => (
                        // props를 줄때 배열의 key를 id로 줘야 한다
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIcrement={this.props.onIcrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                        ></Habit>
                    ))}
                </ul>
                <button className="habit-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;
