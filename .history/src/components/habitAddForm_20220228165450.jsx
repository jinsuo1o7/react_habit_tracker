import React, { Component } from "react";

class HabitAddForm extends Component {
    inputRef = React.createRef();
    onSubmit = (event) => {
        // submit이 일어날때 새로고침 막기 preventDefault
        event.preventDefault();
        console.log("ss");
    };
    render() {
        // ref를 이용해서 submit의 내용을 받아오는게 가능
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef}
                    type="text"
                    className="add-input"
                    placeholder="Habit"
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
