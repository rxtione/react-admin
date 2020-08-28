import { combineReducers } from 'redux'
import todos from './todo'
import equip from './equip'

/* 리듀서 합병 */
export default combineReducers({
    todos,
    equip
})