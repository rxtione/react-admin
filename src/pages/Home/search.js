import React, {useState} from 'react'
import {Button, Input} from 'reactstrap'

const Search = () => {
    const [findStart, setFindStart] = useState('2020-01-01');
    const [findEnd, setFindEnd] = useState('2020-01-01');
    const [findUseyn, setFindUseyn] = useState('');
    const [findType, setFindType] = useState('');
    const [findConstruction, setFindConstruction] = useState('');
    const [findParamType, setFindParamType] = useState('');
    const [findParamText, setFindParamText] = useState('');

    return (
        <div className="search-wrap">
            <div className="search-item">
                <div className="search-title">
                    구입 기간
                </div>
                <div className="search-content">
                    <Input type="date" className="digits equiplist-date" name="search_start" defaultValue="2020-01-01" onChange={(e)=>setFindStart(e.target.value)}/>
                    <div className="between-date">~</div>
                    <Input type="date" className="digits equiplist-date" name="search_end" defaultValue="2020-01-01" onChange={(e)=>setFindEnd(e.target.value)}/>
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
                    조건 검색
                </div>
                <div className="search-content">
                    <Input type="select" className="form-control find-select" onChange={(e)=>setFindUseyn(e.target.value)}>
                        <option value="">사용 여부</option>
                        <option value="Y">사용함</option>
                        <option value="N">사용안함</option>
                    </Input>
                    <Input type="select" className="form-control find-select" onChange={(e)=>setFindType(e.target.value)}>
                        <option value="">장비/차량</option>
                        <option value="equip">장비</option>
                        <option value="car">차량</option>
                    </Input>
                    <Input type="select" className="form-control find-select" onChange={(e)=>setFindConstruction(e.target.value)}>
                        <option value="">사용현장</option>
                        <option value="phochen">포천</option>
                        <option value="anyang">안양</option>
                        <option value="uijengbu">의정부</option>
                        <option value="cheonan">천안</option>
                        <option value="busan">부산</option>
                    </Input>
                    <Input type="select" className="form-control find-select" onChange={(e)=>setFindParamType(e.target.value)}>
                        <option value="">검색조건</option>
                        <option value="name">차량명</option>
                        <option value="model_name">모델명</option>
                        <option value="car_number">등록번호</option>
                        <option value="car_identify">차대번호</option>
                        <option value="manufacturer">제조사</option>
                        <option value="car_year">연식</option>
                    </Input>
                    <Input type="text" className="form-control find-text" onChange={(e)=>setFindParamText(e.target.value)}/>
                    <Button className="btn btn-primary mr-1">저장</Button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Search);