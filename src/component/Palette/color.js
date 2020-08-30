import React from 'react';

/* Palette 객체 하위 Color Item 컴포넌트
*  인자 설명
*    - color : 내부 색상 상태값
*    - active : 활성화 여부
*    - onClick : 클릭 이벤트 처리 함수 - Todo 컴포넌트에 선언되어있음.
*/
const Color = ({color, active, onClick}) => {
    return (
                             /* color 객체의 클래스 부여, active 상태에 따라 값 활성화*/
        <div className={`color ${color} ${active ? ' active':''}`} onClick={onClick}></div>
    )
}

export default React.memo(Color);