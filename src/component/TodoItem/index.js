import React from 'react'

/* 할일 아이템 컴포넌트 정의
*  인자 설명
*    - id : 아이템 아이디값
*    - content : 아이템의 내용(할일 내용)
*    - color : 아이템 색상 값(color 클래스를 add 시킴).
*    - checked : 체크 여부 변수
*    - onToggleItem : 아이템 클릭 시 발생하는 이벤트( checked를 변경함 ) - Todo 컴포넌트에 정의
*    - onRemoveItem : 삭제 버튼 클릭 시 발생하는 이벤트 - Todo 컴포넌트에 정의
*/

const TodoItem = ({id, content, color, checked, onToggleItem, onRemoveItem}) => {
    return (
        <div className="todo-item">
            <div className="remove" onClick={() => onRemoveItem(id)}>×</div>
            <div className={`todo-text ${color} ${(checked==='true')? 'checked':''}`} onClick={()=>onToggleItem(id, checked)}>
                {content}
            </div>
            {
                (checked==='true') && (<div className="check-mark">✓</div>)
            }
        </div>
    )
}

export default React.memo(TodoItem)