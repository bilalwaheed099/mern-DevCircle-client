import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import errorReducer from './reducers/errorReducer';
import profileReducer from './reducers/profileReducer';


const reducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    profile: profileReducer
});
export default reducer;