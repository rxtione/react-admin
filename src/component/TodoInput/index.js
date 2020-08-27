import React, {useState} from 'react'

/* 할일 입력 input 컴포넌트 정의
*  인자 설명
*    - todoInput : 입력 될때마다 저장되는 내부 입력 State
*    - onAddClick : 추가 버튼을 눌렀을 때 ADDTODO를 발생 시키는 함수 - Todo 컴포넌트에 선언되어있음.
*    - onTodoInputChange : 인풋 내 변경 값이 발생할 때마다 상태에 업데이트 시키는 함수 - Todo 컴포넌트에 선언되어있음.
*    - onTodoInputKeyPress : 입력 시 엔터 키 체크를 위해 사용 - Todo 컴포넌트에 선언되어 있음.
*/
const TodoInput = ({todoInput, onAddClick, onTodoInputChange, onTodoInputKeyPress}) => {
    return (
        <div className="form">
            <input id="test_input" value={todoInput} onChange={onTodoInputChange} onKeyPress={onTodoInputKeyPress}/>
            <div className="create-button" onClick={onAddClick}>추가</div>
        </div>
    )
}

export default React.memo(TodoInput)