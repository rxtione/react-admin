import React, {useState, useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Page from './style';
import * as todoListActions from 'store/modules/todo'
import TodoInput from 'component/TodoInput';
import Palette from 'component/Palette';
import TodoList from 'component/TodoList';

/* 할 일 컴포넌트 */
const Todo = () => {
    /* 인풋 상태 저장용 state 생성 */
    const [todoInput, setTodoInput] = useState('');
    /* 색상 상태 저장용 state 생성 */
    const [todoColor, setTodoColor] = useState('red');

    /* api에서 loading과 todos 값 받아옴 */
    const { loading, todos } = useSelector(state => state.todos)

    /* 메세지 전달 */
    const dispatch = useDispatch();

    /* 리스트를 받아오는 fetch 선언. useCallback을 이용한 재사용. modules의 fetch 실행 */
    const fetch = useCallback(() => {
        dispatch(
            todoListActions.fetch({})
        ).catch(console.log)
    }, [dispatch]);

    /* 최초 실행 시 목록 받아오도록 fetch() 실행, 리스트를 나갈 때 reset을 호출하여 내용 삭제 */
    useEffect(() => {
        fetch()

        return () => {
            dispatch(todoListActions.reset())
        }
    }, [dispatch, fetch])

    /* 색상 선택시 발생하는 콜백 */
    const onSelect = useCallback((color) => {
        setTodoColor(color);
    }, [todoColor]);

    /* 추가 버튼을 누르면 해야 할 일 목록이 추가 */
    const onAddClick = useCallback(() => {
        //api 호출을 위해 module에서 addtodo 호출
        dispatch(todoListActions.addtodo({text: todoInput, color: todoColor}));
        setTodoInput('');
    }, [dispatch, todoInput, todoColor])

    /* 인풋 상태 저장 */
    const onTodoInputChange = useCallback((e) => {
        setTodoInput(e.target.value);
    }, [todoInput])

    /* keypress 이벤트에서 엔터 키 값 입력 시 onAddClick 호출 */
    const onTodoInputKeyPress = useCallback((e) => {
        if ( e.key === 'Enter' ) {
            onAddClick();
        }
    }, [onAddClick])

    /* 할 일 클릭 시 체크를 반대로 한 후 API로 업데이트 호출 */
    const onToggleItem = useCallback((id, checked) => {
        checked = (checked === 'true')? 'false':'true';
        dispatch(todoListActions.checktodo({id,checked}));
    }, [dispatch])

    /* 아이템 삭제 */
    const onRemoveItem = useCallback((id) => {
        console.log('onRemoveItem - ' + id);
        dispatch(todoListActions.removetodo({id}));
    }, [dispatch])

    return (
        <div className="App">
            <main className="todo-list-template">
                <div className="title">오늘 할 일</div>
                <section className="palette-wrapper">
                    <Palette todoColor={todoColor} onSelect={onSelect}/>
                </section>
                <section className="form-wrapper">
                    <TodoInput todoInput={todoInput} onAddClick={onAddClick} onTodoInputChange={onTodoInputChange} onTodoInputKeyPress={onTodoInputKeyPress}/>
                </section>
                <section className="todos-wrapper">
                    <TodoList todos={todos} onToggleItem={onToggleItem} onRemoveItem={onRemoveItem}/>
                </section>
            </main>
        </div>
    )
}

export default React.memo(Todo)