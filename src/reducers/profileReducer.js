const initialState = {
    profile: null,
    profiles: null,
    isLoading: false
}

const profileReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_CURRENT_PROFILE':
            return {
                ...state,
                profile: action.payload,
                isLoading: false
            }
            case 'CLEAR_CURRENT_PROFILE':
                return {
                    ...state,
                    profile: null
                }
        default: return state;
    }
}

export default profileReducer;