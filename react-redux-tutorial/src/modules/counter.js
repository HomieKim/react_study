import { createAction } from 'redux-action';


// 액션 타입정의 '모듈 이름/액션 이름' 형태로 작성
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* 
// 액션 생성 함수 만들기
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// 초기 상태 및 리듀서 함수
const initialState = {
    number : 0
};

function counter(state = initialState, action){
    switch(action.type){
        case INCREASE :
            return {
                number : state.number+1
            };
        case DECREASE :
            return {
                number : state.number-1
            };
        default :
            return state;
    }
}
*/

// redux-action 적용
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 초기 상태 및 리듀서 함수
const initialState = {
    number : 0
};
const counter = handleActions(
    {
        [INCREASE] : (state, action) => ({number : state.number+1}),
        [DECREASE] : (state, action) => ({number : state.number-1}),
    },
    initialState,
);
export default counter; 