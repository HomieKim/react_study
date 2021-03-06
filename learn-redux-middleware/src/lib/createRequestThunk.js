import { finishLoading, startLoading } from '../modules/loading';

export default function createRequestThunk(type, request) {
    // 성공 및 실패 액션타입 정의   
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return params => async dispatch => {
        dispatch({type});// 시작
        dispatch(startLoading(type));
        try{
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload : response.data
            });
            dispatch(finishLoading(type));
        } catch (e) {
            dispatch({
                type : FAILURE,
                payload : e,
                error : true
            });
            dispatch(startLoading(type));
            throw e;
        }
    };

}