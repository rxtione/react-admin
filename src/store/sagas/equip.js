import { all, call, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import { implementPromiseAction } from '@adobe/redux-saga-promise'
import API from 'api'
import {
    REGISTER_EQUIP
} from 'store/modules/equip'

/* redux-saga 장비 추가 API 호출 */
function* register(action) {
    yield call(implementPromiseAction, action, function* () {
        console.log('calling on register saga');
        const { type, useyn, code, construction, name, model_name, car_number, car_identify, manufacturer, car_year, buy_date, uptime } = action.payload;
        return yield call(API.Equip.register, { type, useyn, code, construction, name, model_name, car_number, car_identify, manufacturer, car_year, buy_date, uptime })
    })
}

/*watch로 이벤트 구독 설정*/
function* watchRegisterEquip() {
    yield takeLatest(REGISTER_EQUIP.request, register);
}


/*watch 함수들 트리거 등록*/
export default function* equipySaga() {
    yield all([
        fork(watchRegisterEquip)
    ]);
}