import React, { useCallback, useState } from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
const TodoInsert = ({onInsert})=>{
    // 상태관리
    const [value, setValue] = useState('');

    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e=>{
            onInsert(value);
            setValue(''); // value값 초기화

            // submit 이벤트는 브라우저에서 새로고침이 기본임 기본동작 방지하는 함수
            e.preventDefault();
        },
        [onInsert,value],
    );

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};
export default TodoInsert;