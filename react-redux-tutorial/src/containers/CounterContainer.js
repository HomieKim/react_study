import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';
// 컴포넌트를 리덕스와 연동하려면 connect함수를 사용합니다. 
// connect함수는 함수를 반환하는데 반환받음 함수에 타겟컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어집니다.

const CounterContainer =()=>{
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter 
            number={number} 
            onIncrease={onIncrease} 
            onDecrease={onDecrease}/>
    ); 
};

export default CounterContainer;

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//     // 임시함수
//     increase : ()=>{
//         dispatch(increase());
//     },
//     decrease : ()=>{
//         dispatch(decrease());
//     },
// });

// connect 함수 사용
/*
export default connect(
    state =>({
        number : state.counter.number,
    }),
    {
        increase,
        decrease,
    },
)(CounterContainer);
*/