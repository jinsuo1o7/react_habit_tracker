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
        const habits = this.state.habits.map((item)=>{
            if(item.id == habit.id) 
                return {}
            
        })
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
        const habits = this.state.habits.map((habit) => {
            habit.count = 0;
            return habit;
        });
        this.setState({ habits });
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
                    onReset={this.handleReset}
                />
            </>
        );
    }
}

export default App;
