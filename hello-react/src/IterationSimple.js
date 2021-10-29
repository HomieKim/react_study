import React, { useCallback, useState } from 'react';

const IterationSimple = ()=>{
    const [names, setNames] = useState([
        {id:1, text: '눈사람'},
        {id:2, text: '얼음'},
        {id:3, text: '눈'},
        {id:4, text: '바람'}
    ]);
    const [inputText, setInputText]= useState('');
    const [nextId, setNextId] = useState(5);
    
    const onChange = e => setInputText(e.target.value);
    
    const onClick = ()=>{
        setNames(names => [...names, {id:nextId, text:inputText}]);
        setNextId(nextId+1);
        setInputText('');
    }
    const onRemove = id => {
        const modifiedNames = names.filter(name=> name.id !== id);
        setNames(modifiedNames) 
    }
    const nameList = names.map(name => <li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>);
    

    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IterationSimple;