import { all, call, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import { implementPromiseAction } from '@adobe/redux-saga-promise'
import API from 'api'
import {
    TODO_LIST_LOAD,
    ADD_TODO,
    REMOVE_TODO,
    CHECK_TODO
} from 'store/modules/todo'

/* redux-saga 할일 목록 리스트 API 호출 */
function* fetch(action) {
    yield call(implementPromiseAction, action, function* () {
        return yield call(API.Todo.list, { })
    })
}

/* redux-saga 할일 목록 추가 API 호출 */
function* addtodo(action) {
    yield call(implementPromiseAction, action, function* () {
        console.log(action.payload);
        const { text, color } = action.payload;
        return yield call(API.Todo.addlist, { text, color })
    })
}

/* redux-saga 할일 목록 삭제 API 호출 */
function* removetodo(action) {
    yield call(implementPromiseAction, action, function* () {
        const { id } = action.payload;
        return yield call(API.Todo.removetodo, { id })
    })
}

/* redux-saga 할일 목록 체크 API 호출 */
function* checktodo(action) {
    yield call(implementPromiseAction, action, function* () {
        const { id, checked } = action.payload;
        return yield call(API.Todo.checktodo, { id, checked })
    })
}

/*watch로 이벤트 구독 설정*/
function* watchFetch() {
    yield takeEvery(TODO_LIST_LOAD.request, fetch);
}

function* watchAddTodo() {
    yield takeLatest(ADD_TODO.request, addtodo);
}

function* watchRemoveTodo() {
    yield takeLatest(REMOVE_TODO.request, removetodo);
}

function* watchCheckTodo() {
    yield takeLatest(CHECK_TODO.request, checktodo);
}

/*watch 함수들 트리거 등록*/
export default function* todoListSaga() {
    yield all([
        fork(watchFetch),
        fork(watchAddTodo),
        fork(watchRemoveTodo),
        fork(watchCheckTodo)
    ]);
}