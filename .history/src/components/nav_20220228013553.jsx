import React, { Component } from "react";

class Nav extends Component {
    render() {
        const habits = [...this.props.habits];
        habits.map((item)=>{item.count})
        return <div></div>;
    }
}

export default Nav;
