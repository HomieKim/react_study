// 루트 리듀서 
// 해당 프로젝트는 여러개의 리듀서를 만들었으므로 store를 사용할때 하나로 합친 리듀서를 사용합니다.
// combineReducers라는 유틸함수를 사용하여 처리합니다

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
