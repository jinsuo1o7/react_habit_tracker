import React, { Component } from "react";

class Nav extends Component {
    state = {
        total: 0,
    };
    render() {
        const habits = [...this.props.habits];
        habits.map((item) => {
            total += item.count;
        });

        return <div></div>;
    }
}

export default Nav;
