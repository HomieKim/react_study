import React from 'react';
import { useLocation} from 'react-router-dom';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = ()=>{
    // 카테고리 선택되지 않았으면 기본값으로 all 사용
    
    const {pathname} = useLocation();
    const path = pathname.substring(1);
    const category = (pathname === '/') ? "all" : `${path}`;
    //console.log(category);
    
    return (
        <>
            <Categories/>
            <NewsList category={category} />
        </>
    );


}

export default NewsPage;