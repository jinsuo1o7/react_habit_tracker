import React, { Component } from "react";

class Nav extends Component {
    render() {
        const habits = [...this.props.habits];
        let total = 0;
        habits.map((item) => {
            total += item.count;
        });
        this.set
        return <div></div>;
    }
}

export default Nav;
