import produce from "immer"
import { createPromiseAction } from '@adobe/redux-saga-promise'
import createReqTypes from "util/createReqTypes"

const CHANGE_STATUS = 'equip/CHANGE_STATUS';
export const REGISTER_EQUIP = createReqTypes('REGISTER_EQUIP')
export const EQUIP_LIST_LOAD = createReqTypes('EQUIP_LIST_LOAD')

/* redux 내 등록창 상태 저장용 */
export const changeStatus = (status) => ({ type: CHANGE_STATUS, status: status })

/* list 로드용 API 호출 함수, createPromiseAction으로 request 호출을 진행? */
export const fetch = createPromiseAction(EQUIP_LIST_LOAD.type, () => ({}))

/* 할 일 추가 API 호출 함수, createPromiseAction으로 request 호출을 진행? */
export const register = createPromiseAction(REGISTER_EQUIP.type, ({type, useyn, code, construction, name, model_name, car_number, car_identify, manufacturer, car_year, buy_date, uptime})=>
    ({type, useyn, code, construction, name, model_name, car_number, car_identify, manufacturer, car_year, buy_date, uptime}) );

/* 최초 상태 선언 */
const initialState = {
    status: 'ready',
    equiplist: []
};

/* action 처리 함수 부분. 각 타입 별 상태 확인 */
export default function equip(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case REGISTER_EQUIP.request: {
                draft.status = 'request';
                return
            }
            case REGISTER_EQUIP.success: {
                draft.status = 'success';
                return
            }
            case CHANGE_STATUS:{
                draft.status = action.status;
                return
            }
            default:
                return state
        }
    })
}



