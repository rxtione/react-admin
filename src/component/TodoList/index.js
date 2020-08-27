import React, {useState} from 'react'
import TodoItem from 'component/TodoItem'

/* 할일 아이템 컴포넌트 정의
*  인자 설명
*    - todos : 할 일 목록(API로 받아옴)
*    - onToggleItem : 아이템 클릭 시 발생하는 이벤트( checked를 변경함 ) - Todo 컴포넌트에 정의
*    - onRemoveItem : 삭제 버튼 클릭 시 발생하는 이벤트 - Todo 컴포넌트에 정의
*/
const TodoList = ({todos, onToggleItem, onRemoveItem}) => {
    return (
        <div className="todoList">
            {todos.map((v, index) => {
                return <TodoItem
                            id={v.id}
                            content={v.content}
                            color={v.color}
                            checked={v.checked}
                            onToggleItem={onToggleItem}
                            onRemoveItem={onRemoveItem}
                            key={index}
                        />
            })}
        </div>
    )
}

export default React.memo(TodoList)