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
    render() {
        return <Habits />;
    }
}

export default App;
