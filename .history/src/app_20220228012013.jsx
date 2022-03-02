import "./reset.css";
import "./app.css";
import Habits from "./components/habits";

import React, { Component } from "react";

class App extends Component {
    state = {
        // 배열을 사용할때 id를 가져야 하며, []를 사용하는 것은 금지
        haibits: [
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
    render() {
        return<>
          <ul>
            this.state.habits.map((habit)=>{})
          </ul>
        </>
    }
}

export default App;
