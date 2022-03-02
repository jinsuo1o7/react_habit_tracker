import React, { useCallback, useEffect, useRef, useState } from "react";
// 클래스 컴포넌트는 멤버변수가 한번만 생성되고 render()만 업데이트할때 호출되는 반면
// 함수 컴포넌트는 {} 블록 안의 모든것이 반복 생성, 호출 됨 ( 지역변수 다시 생성 )
// ReactHook을 사용하면 함수 안에서 지역변수, Ref, 함수를 기억하고 함수 컴포넌트의 단점을 극복
const SimpleHabit = (props) => {
    // ReactHook식 state선언법 const[data, func] = useState(init);
    const [count, setCount] = useState(0);
    // useState를 호출하면 실제 state값인 count와 이를 변경할 setCount를 줌
    // ReactHook 에서는 useState로 지역변수 값을 기억해 두기 때문에
    // 다시 호출되어도 이전의 값들을 기억해서 사용가능한 것

    // useRef()를 사용하기 !
    // createRef()를 사용하면 반복해서 생성하는 반면, useRef는 한번 생성하고 기억하기 때문에 다시 생성하지 않음
    const spanRef = useRef();

    // useCallback() 사용하기
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    useEffect(()=>{
      console.log(`mounted & updated:`)
    });
    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">
                Reading
            </span>
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
