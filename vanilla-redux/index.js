const { createStore } = require('redux');

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션이름 설정(액션 명은 고유해야 합니다.)
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCRESE';
const DECREASE = 'DECREASE';

//액션 객체를 만드는 액션 생성 함수를 작성
const toggleSwitch = () => ({type : TOGGLE_SWITCH});
const increase = difference =>({type : INCREASE, difference});
const decrease = ()=> ({type: DECREASE});

// 초깃값 설정
const initialState = {
    toggle : false,
    counter : 0
};

//리듀서 함수 설정(리듀서는 변화를 일으키는 함수, 파라미터로 state와 action값을 받아옴)
// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state=initialState, action){
    //action.type에 따라 다른 작업을 처리
    switch(action.type){
        case TOGGLE_SWITCH:
            return{
                ...state,
                toggle : !state.toggle
            };
        case INCREASE :
            return {
                ...state,
                counter : state.counter + action.difference
            };
        case DECREASE :
            return {
                ...state,
                counter : state.counter - 1
            };
        default :
            return state;

        
    }
}

// 스토어 생성
const store = createStore(reducer);

// render함수 만들기(상태가 업데이터 될 때마다 호출 됨)
const render = () => {
    const state = store.getState();
    // 토글 처리
    if(state.toggle){
        divToggle.classList.add('active');
    }else{
        divToggle.classList.remove('active');
    }
    counter.innerText = state.counter;
};

render();
// subcribe합수의 파라미터로 함수형태의 값을전달, 추후 액션이 발생하여 상태가 업데이트 될 때마다 호출 됨
store.subscribe(render);

// 액션 발생시키기 , 액셔을 방생시키는 것을 디스패치라고함, 스토어의 내장함수 사용
divToggle.onclick = ()=>{
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () =>{
    store.dispatch(increase(1));
};
btnDecrease.onclick = () =>{
    store.dispatch(decrease());
};

