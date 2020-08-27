import { combineReducers } from 'redux'
import todos from './todo'

/* 리듀서 합병 */
export default combineReducers({
    todos,
})