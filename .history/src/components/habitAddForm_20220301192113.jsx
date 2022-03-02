import React from "react";

const HabitAddForm = (props) => {
    const formRef = 
    <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
            ref={this.inputRef}
            type="text"
            className="add-input"
            placeholder="Habit"
        />
        <button className="add-button">Add</button>
    </form>;
};

export default HabitAddForm;
