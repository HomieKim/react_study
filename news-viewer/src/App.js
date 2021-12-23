import axios from 'axios';
import React, { useState } from 'react';
import NewsList from './component/NewsList';


const App = () =>{
  const [data,setData] = useState(null);
  const onClick = async ()=>{
    try{
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=61d605f4d5a44b8e86837c7e87acf0cc',);
      setData(response.data)
    }catch(e){
      console.log(e);
    }
  };

  return  (
    <NewsList/>
  );
};

export default App;