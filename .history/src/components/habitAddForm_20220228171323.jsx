import React, { Component } from "react";

class HabitAddForm extends Component {
    // React Ref생성하기
    // DOM과 연결하는 역할을 함
    inputRef = React.createRef();
    formRef = React.createRef();

    onSubmit = (event) => {
        // submit이 일어날때 새로고침 막기 preventDefault
        event.preventDefault();
        // current.value는 input에 입력된 문자열
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        // 입력을 마치고 input을 빈칸으로 만들기
        // this.inputRef.current.value = ""; 이렇게 해도 되지만
        // React Form 
        this.formRef.current.reset();
    };
    render() {
        // ref를 이용해서 submit의 내용을 받아오는게 가능
        return (
            <form
                ref={this.formRef}
                className="add-form"
                onSubmit={this.onSubmit}
            >
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
