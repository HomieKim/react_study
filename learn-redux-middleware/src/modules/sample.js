
import {  handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';
// 액션 타입을 선언합니다.
// 한 요청당 세개를 만들어야 합니다. (요청, 성공, 실패)





const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';


const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';


// thunk 함수를 생성
// thunk 함수 내부에서는 시작할 때, 성공, 실패, 다른 액션을 디스패치 합니다.

// thunk함수 분리
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

/*
export const getPost = id => async dispatch => {
    dispatch({type : GET_POST}); // 요청 시작을 알림
    try {
        const response = await api.getPost(id);
        dispatch({
            type : GET_POST_SUCCESS,
            payload : response.data
        });
    }catch(e){
        dispatch({
            type : GET_POST_FAILURE,
            payload : e,
            error : true
        });
        throw e;
    }
};

export const getUsers = () => async dispatch => {
    dispatch({type : GET_USERS});
    try {
        const response = await api.getUsers();
        dispatch({
            type: GET_USERS_SUCCESS,
            payload : response.data
        });
    }catch (e){
        dispatch({
            type : GET_USERS_FAILURE,
            payload : e,
            error : true
        });
        throw e;
    }
};
*/


// 초기 상태를 선언
// 요청의 로딩 중일 때는 loading이라는 객체에서 관리

const initialState = {
 
    post : null,
    users: null
};

const sample = handleActions({

    [GET_POST_SUCCESS] : (state, action) => ({
        ...state,
        post : action.payload
    }),
    [GET_USERS_SUCCESS] : (state, action) => ({
        ...state,
        users : action.payload
    })

}, initialState);

export default sample;