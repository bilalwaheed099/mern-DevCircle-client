import isEmpty from '../validation/isEmpty'; 

const userInitialState = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = userInitialState, action) => {
switch (action.type){
    case 'SET_CURRENT_USER':
        return {
                ...state,
                user: action.payload, 
                isAuthenticated: !isEmpty(action.payload)
        }
        default:
            return state;
        
    }
}

export default authReducer;