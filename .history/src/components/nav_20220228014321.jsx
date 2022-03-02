import React, { Component } from "react";

class Nav extends Component {
    state = {
        total: 0,
    };
    render() {
        return <div>{this.state.total}</div>;
    }
}

export default Nav;
