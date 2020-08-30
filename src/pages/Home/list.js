import React, {useState} from 'react'
import {Button, Input} from 'reactstrap'
import Search from './search'

const HeavyEquipList = ({list}) => {

    return (
        <div className="list-wrap">
            <table className="table thead-dark">
                    <colgroup>
                        
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>장비명</th>
                            <th>모델명</th>
                            <th>관리코드</th>
                            <th>등록번호</th>
                            <th>차대번호</th>
                            <th>사용현장</th>
                            <th>사용여부</th>
                            <th>기능</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default React.memo(HeavyEquipList);