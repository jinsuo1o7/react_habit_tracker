import "./reset.css";
import "./app.css";
import Habits from "./components/habits";

import React, { Component } from "react";
import Nav from "./components/nav";

class App extends Component {
    state = {
        // 배열을 사용할때 id를 가져야 하며, []를 사용하는 것은 금지
        habits: [
            { id: 0, name: "Reading", count: 0 },
            { id: 1, name: "Running", count: 0 },
            { id: 2, name: "Coding", count: 0 },
        ],
    };
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
    handleAdd = (name) => {
        const habits = [
            ...this.state.habits,
            { id: Date.now(), name, count: 0 },
        ];
        this.setState({ habits });
    };
    handleReset = () => {
        const habits = [...this.state.habits].;
    };
    render() {
        return (
            <>
                <Nav
                    totalCount={
                        this.state.habits.filter((item) => item.count > 0)
                            .length
                    }
                />

                <Habits
                    habits={this.state.habits}
                    onIcrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                />

                <button>Reset All</button>
            </>
        );
    }
}

export default App;
