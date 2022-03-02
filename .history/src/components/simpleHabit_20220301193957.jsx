import React, { useState } from "react";
// 클래스 컴포넌트는 멤버변수가 한번만 생성되고 render()만 업데이트할때 호출되는 반면
// 함수 컴포넌트는 {} 블록 안의 모든것이 반복 호출 됨

const SimpleHabit = (props) => {
    // ReactHook식 state선언법 const[data, func] = useState(init);
    const [count, setCount] = useState(0);
    // useState를 호출하면 실제 state값인 count와 이를 변경할 setCount를 줌
    const handleIncrement = () => {
        setCount(count + 1);
    };
    return (
        <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;
