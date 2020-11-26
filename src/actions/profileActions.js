import axios from 'axios';

// get current profile
export const getCurrentProfile = (dispatch) => {
    setProfileLoading(dispatch);
    console.log('g')
    axios  
        .get('/api/profile/')
        .then(res => {
            dispatch({
                type: 'GET_CURRENT_PROFILE',
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'GET_CURRENT_PROFILE',
                payload: {}
        })
    })
}
    //set profile loading
const setProfileLoading = (dispatch) => {
    dispatch({
        type: 'SET_LOADING'
    });
}

// clear current profile
export const clearCurrentProfile = (dispatch) => {
    dispatch({
        type: 'CLEAR_CURRENT_PROFILE',
        profile: null
    });
}

// create profile
export const createProfile = (profileData, history, dispatch) => {
    console.log(profileData)
    axios
        .post('/api/profile/', profileData)
        .then(res => {
            console.log(res)
            history.push('/dashboard');
        })
        .catch(err => {
            console.log('sdfvasvd');
            dispatch({
                type: "GET_ERRORS",
                payload: err.response.data
            })
        });
}
// Delete current account 
export const deleteAccount = (dispatch) => {
    if(window.confirm("Are you sure? This can NOT be undone!")){
        axios.delete('/api/profile')
        .then(res => {
            console.log("deleted")
            dispatch({
                type: 'SET_CURRENT_USER',
                payload: {}
            })
        }).catch(err => {
                dispatch({
                    type: 'GET_ERRORS',
                    payload: err.response.data
                })
            })
    }

}