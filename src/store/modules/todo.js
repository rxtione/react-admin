import produce from "immer"
import { createPromiseAction } from '@adobe/redux-saga-promise'
import createReqTypes from "util/createReqTypes"

import {createAction} from 'redux-actions'

export const TODO_LIST_LOAD = createReqTypes('TODO_LIST_LOAD')
export const TODO_LIST_UNLOAD = 'TODO_LIST_UNLOAD'
export const ADD_TODO = createReqTypes('ADD_TODO')
export const REMOVE_TODO = createReqTypes('REMOVE_TODO')
export const CHECK_TODO = createReqTypes('CHECK_TODO')

/* list 로드용 API 호출 함수, createPromiseAction으로 request 호출을 진행? */
export const fetch = createPromiseAction(TODO_LIST_LOAD.type, () => ({}))

/* redux 내 리스트 값들 UNLOAD 시키기 위한 함수 */
export const reset = () => ({ type: TODO_LIST_UNLOAD })

/* 할 일 추가 API 호출 함수, createPromiseAction으로 request 호출을 진행? */
export const addtodo = createPromiseAction(ADD_TODO.type, ({text, color}) => ({text, color}) )

/* 할 일 삭제 API 호출 함수, createPromiseAction으로 request 호출을 진행? */
export const removetodo = createPromiseAction(REMOVE_TODO.type, ({id}) => ({id}) )

/* 할 일 체크 API 호출 함수, createPromiseAction으로 request 호출을 진행? */
export const checktodo = createPromiseAction(CHECK_TODO.type, ({id, checked}) => ({id, checked}) )

/* 최초 상태 선언 */
const initialState = {
    loading: false,
    todos: []
};

/* action 처리 함수 부분. 각 타입 별 상태 확인 */
export default function todos(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case TODO_LIST_LOAD.request:
                draft.loading = true
                return

            case TODO_LIST_LOAD.success:
                draft.loading = false
                draft.todos = action.payload.data
                return

            case TODO_LIST_LOAD.failure:
                draft.loading = false
                draft.todos = []
                return

            case TODO_LIST_UNLOAD:
                draft.loading = false
                draft.todos = []
                return

            case ADD_TODO.success:
                draft.todos = [action.payload.data,...draft.todos];
                return

            case REMOVE_TODO.success: {
                const id = action.payload.data.id;
                draft.todos = draft.todos.filter((v) => v.id != id);
                return
            }

            case CHECK_TODO.success: {
                const id = action.payload.data.id;
                const todo = draft.todos.find(todo => todo.id === id);
                todo.checked = action.payload.data.checked;
                return
            }
            default:
                return state
        }
    })
}
