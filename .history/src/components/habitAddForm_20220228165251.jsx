import React, { Component } from "react";

class HabitAddForm extends Component {
    onSubmit = (event) => {
      // sub
        event.preventDefault();
        console.log("ss");
    };
    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
