import React, {useState} from 'react'
import HomeWrap from './style'
import {Button, Input} from "reactstrap";

/* 라우터 주소 테스트용 컴포넌트
*  인자 설명
*/
const Home = () => {
    const [startDate, setStartDate] = useState('2020-01-01');
    const [endDate, setEndDate] = useState('2020-01-01');

    return (
        <HomeWrap>
            <h6>Heavy Equip List</h6>
            <div className="search-wrap">
                <div className="search-item">
                    <div className="search-title">
                        구입 기간
                    </div>
                    <div className="search-content">
                        <Input type="date" className="digits equiplist-date" name="search_start" defaultValue="2020-01-01" onChange={(e)=>setStartDate(e.target.value)}/>
                        <div className="between-date">~</div>
                        <Input type="date" className="digits equiplist-date" name="search_end" defaultValue="2020-01-01" onChange={(e)=>setEndDate(e.target.value)}/>
                        <div className="button-wrap">
                            <Button className="btn btn-light mr-1">오늘</Button>
                            <Button className="btn btn-light mr-1">1주일</Button>
                            <Button className="btn btn-light mr-1">1개월</Button>
                            <Button className="btn btn-light mr-1">3개월</Button>
                            <Button className="btn btn-light mr-1">6개월</Button>
                        </div>
                    </div>
                </div>
                <div className="search-item">
                    <div className="search-title">
                        조건 검색1
                    </div>
                    <div className="search-content">

                    </div>
                </div>
            </div>
        </HomeWrap>
    )
}

export default React.memo(Home)