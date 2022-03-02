import React, { PureComponent } from "react";

class Nav extends PureComponent {
    render() {
        return (
            <div>
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </div>
        );
    }
}

export default Nav;
