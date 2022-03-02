import React from "react";

const HabitAddForm = (props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onSubmit(name);
        this.formRef.current.reset();
    };
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
