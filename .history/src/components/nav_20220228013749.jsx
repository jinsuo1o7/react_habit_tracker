import React, { Component } from "react";

class Nav extends Component {
    state = {
      total = 0;
    };
    render() {
        const habits = [...this.props.habits];
        let total = 0;
        habits.map((item) => {
            total += item.count;
        });

        return <div></div>;
    }
}

export default Nav;
