import { combineReducers } from 'redux';
import  reducer  from './randomReducer';
import  loginReducer  from './loginReducer';

export default combineReducers({
    data: reducer,
    login: loginReducer
});

