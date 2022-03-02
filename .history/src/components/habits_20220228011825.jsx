import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    

    handleIncrement = (habit) => {
        // 새로운 배열 복사해서 만들기 [...]
        // 하지만 리엑트에서 오브젝트(데이터를) 직접 업데이트하는 것은 버그 발생
        const habits = [...this.state.habits];
        const idx = habits.indexOf(habit);
        habits[idx].count++;
        this.setState({ habits });
    };
    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const idx = habits.indexOf(habit);
        habits[idx].count--;
        this.setState({ habits });
    };
    handleDelete = (habit) => {
        const habits = [...this.state.habits].filter(
            (item) => item.id !== habit.id
        );
        this.setState({ habits });
    };

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