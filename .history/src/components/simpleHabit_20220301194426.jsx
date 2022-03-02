import React, { useRef, useState } from "react";
// 클래스 컴포넌트는 멤버변수가 한번만 생성되고 render()만 업데이트할때 호출되는 반면
// 함수 컴포넌트는 {} 블록 안의 모든것이 반복 생성, 호출 됨 ( 지역변수 다시 생성 )

const SimpleHabit = (props) => {
    // ReactHook식 state선언법 const[data, func] = useState(init);
    const [count, setCount] = useState(0);
    // useState를 호출하면 실제 state값인 count와 이를 변경할 setCount를 줌
    // ReactHook 에서는 useState로 지역변수 값을 기억해 두기 때문에
    // 다시 호출되어도 이전의 값들을 기억해서 사용가능한 것
    const spanRef = useRef();
    const handleIncrement = () => {
        setCount(count + 1);
    };
    return (
        <li className="habit">
            <span ref={span}className="habit-name">Reading</span>
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
