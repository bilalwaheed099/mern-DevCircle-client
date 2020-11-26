import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import store from '../store';

export const registerUser = async (userData, history, dispatch) => {
    axios.post('/api/users/register', userData)
        .then( res => {
            history.push('/login')
            console.log(res)
            // return {
            //     type: 'REGISTER_USER',
            //     payload: userData
            // };
        })
        .catch(err => {
            dispatch({
                type: 'GET_ERROR',
                payload: err.response.data
            });
        });

    };

    export const loginUser = (userData, dispatch) => {
        axios.post('/api/users/login', userData)
            .then(res => {
                //save to localStorage
                console.log('here')
                const { token } = res.data;
                //set token to localStorage
                localStorage.setItem('jwtToken', token);
                //set to Auth header
                setAuthToken(token);
                // decode token to get user data
                const decoded = jwt_decode(token);
                //set current user
                dispatch(setCurrentUser(decoded));
                console.log('here')

            })
            .catch( err => {
                dispatch({
                    type: 'GET_ERROR',
                    payload: err.response.data
                })
            })
    }; 

    //set logged in user

    export const setCurrentUser = decoded => {
        return {
            type: 'SET_CURRENT_USER',
            payload: decoded
        }
    }


    export const logoutUser = (dispatch, history) => {
        //remove item from localStorage
        localStorage.removeItem('jwtToken');
        // remove auth header for future requests
        setAuthToken(false);
        // set current user to empty object --> isAuthenticated = false
        dispatch(setCurrentUser({}));
        // redirect to login page
        history.push('/login');
    }