import React, {useState} from 'react';
import Color from './color'

/* 색상 선택 Palette 컴포넌트 정의
*  인자 설명
*    - todoColor : 현재 활성화 된 컬러 상태 값
*    - onSelect : 컬러 아이템 클릭 시 이벤트 처리 함수 - Todo 컴포넌트에 선언되어있음.
*/
const Palette = ({todoColor, onSelect}) => {
    /*내부 색상 배열 선언*/
    const color = ['red','blue','yellow','green'];

    return (
        <div className="palette">
            {color.map((v, index) => {
                return <Color color={v} active={v===todoColor} onClick={()=>onSelect(v)} key={index}></Color>
            })}
        </div>
    )
}

export default React.memo(Palette)