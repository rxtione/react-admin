import React, {useState, useEffect, useCallback} from 'react'
import HomeWrap from './style'
import {Button, Input} from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';
import HeavyEquipList from './list'
import Search from './search'

import * as equipActions from 'store/modules/equip'

/* 라우터 주소 테스트용 컴포넌트
*  인자 설명
*/
const Home = () => {
    /* api에서 loading과 todos 값 받아옴 */
    const { equiplist } = useSelector(state => state.equip)

    /* 메세지 전달 */
    const dispatch = useDispatch();

    /* 리스트를 받아오는 fetch 선언. useCallback을 이용한 재사용. modules의 fetch 실행 */
    const fetch = useCallback(() => {
        dispatch(
            equipActions.fetch({})
        ).catch(console.log)
    }, [dispatch]);

    /* 최초 실행 시 목록 받아오도록 fetch() 실행, 리스트를 나갈 때 reset을 호출하여 내용 삭제 */
    useEffect(() => {
        fetch()

        return () => {
            
        }
    }, [dispatch, fetch])

    return (
        <HomeWrap>
            <h6>Heavy Equip List</h6>
            <Search/>
            <HeavyEquipList 
                list={equiplist}
                />
        </HomeWrap>
    )
}

export default React.memo(Home)