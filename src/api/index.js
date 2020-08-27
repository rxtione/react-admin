import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
import axiosCancel from 'axios-cancel'
/*import Cookies from 'js-cookie'*/

/* http 객체 생성 :: axios 모듈 사용*/
export const http = axios.create({
    baseURL: 'http://45.120.69.125:8001/react',
    adapter: cacheAdapterEnhancer(axios.defaults.adapter, { enabledByDefault: false })
})

axiosCancel(http, {
    debug: false // process.env.NODE_ENV === 'development'
})

export const CancelToken = axios.CancelToken

/*해야 할 일 API 목록 리스트 정의 :: list, addlist, removetodo, checktodo */
const Todo = {
    list: ({ config } = {}) => {
        return http.get(`/list`, null, config)
    },
    addlist: ({ text, color, config } = {}) => {
        return http.post(`/addlist`, {text, color}, config)
    },
    removetodo: ({id, config} = {}) => {
        return http.post(`/removetodo`, {id}, config)
    },
    checktodo: ({id, checked, config} = {}) => {
        return http.post(`/checktodo`, {id, checked}, config)
    }
}

export default {
    Todo,
}