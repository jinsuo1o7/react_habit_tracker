import React, { Component } from "react";

class Nav extends Component {
    state = {
        total: 0,
    };
    render() {
        return (
            <div>
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
                {this.state.total}
            </div>
        );
    }
}

export default Nav;
