import React, { Component } from "react";

class Habit extends Component {
    handleIncrement = () => {};
    handleDecrement = () => {};
    handleDelete = () => {};

    render() {
        // props를 받아오기 이름 같게 해야함 habit
        const { name, count } = this.props.habit;

        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.handleIncrement}
                >
                    <i className="fas fa-plus-square"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.handleDecrement}
                >
                    <i className="fas fa-minus-square"></i>
                </button>
                <button
                    className="habit-button habit-delete"
                    onClick={this.handleDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;
