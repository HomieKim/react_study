import React from 'react';
import qs from 'qs';

const About = ({location})=>{
    const query = qs.parse(location.search, {
        ignoreQueryPrefix : true // 이 설정을 통해 문자열 맨 앞의 ? 를 생략합니다.
    });

    const showDetail = query.detail === 'true'; // 쿼리 파싱의 결과 값은 문자열이기 때문

    return (
        <div>
            <h1>소개</h1>
            <p>소개 페이지, 리액트 라우터 기초 실습!</p>
            {showDetail && <p>detail 값은 true 입니다.</p>}
        </div>
    );
};

export default About;