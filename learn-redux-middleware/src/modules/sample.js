
import {  createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';
import createRequestThunk from '../lib/createRequestThunk';
import { finishLoading, startLoading } from './loading';


// 액션 타입을 선언합니다.
// 한 요청당 세개를 만들어야 합니다. (요청, 성공, 실패)

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';


const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST, id=>id);
export const getUsers= createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);
/*
function* getPostSaga(action){  // 파라미터로 action을 받아오면 액션의 정보를 조회할 수 있습니다.
    yield put(startLoading(GET_POST));
    try{
        // call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있습니다.
        // 첫번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수 입니다.
        const post = yield call(api.getPost, action.payload); // api.getPost(action.payload)
        yield put({
            type : GET_POST_SUCCESS,
            payload : post.data
        });
    }catch(e){
        yield put({
            type: GET_POST_FAILURE,
            payload : e,
            error: true
        });
    }
    yield put(finishLoading(GET_POST));
}

function* getUsersSaga(){
    yield put(startLoading(GET_USERS));
    try{
        const users = yield call(api.getUsers);
        yield put({
            type: GET_USERS_SUCCESS,
            payload : users.data
        });
    }catch(e){
        yield put({
            type: GET_USERS_FAILURE,
            payload : e,
            error : true
        });
    }
    yield put(finishLoading(GET_USERS));
}
*/
export function* sampleSaga(){
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

// thunk 함수를 생성
// thunk 함수 내부에서는 시작할 때, 성공, 실패, 다른 액션을 디스패치 합니다.

// thunk함수 분리
//export const getPost = createRequestThunk(GET_POST, api.getPost);
//export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

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