import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './component/Categories';
import NewsList from './component/NewsList';
import NewsPage from './component/NewsPage';


const App = () =>{
  // const [data,setData] = useState(null);
  // const onClick = async ()=>{
  //   try{
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=61d605f4d5a44b8e86837c7e87acf0cc',);
  //     setData(response.data)
  //   }catch(e){
  //     console.log(e);
  //   }
  // };

  //const [category, setCategory] = useState('all');
  //const onSelect = useCallback(category => setCategory(category),[]);

  return  (
    <Routes>
      <Route path="/:category?" element={<NewsPage/>}/>
      <Route path="/*" element={<NewsPage/>}/>
    </Routes>
    
  );
};

export default App;