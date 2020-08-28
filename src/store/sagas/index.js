import { all, fork } from 'redux-saga/effects'

import todo from './todo'
import equip from './equip'

export default function* rootSaga() {
    yield all([
        fork(todo),
        fork(equip)
    ])
}