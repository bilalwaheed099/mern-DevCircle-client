import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import store from "../../store";
import { loginUser } from '../../actions/authAction';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

// const getAuth = createSelector(state => state.auth.isAuthenticated);
function Login() {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const history = useHistory();

    console.log(isAuthenticated);

    if(isAuthenticated){
        history.push('/dashboard');
    };
   

    function submitHandler(e) {
        e.preventDefault();
        const userData = {
            email,
            password
        };

        store.dispatch(dispatch => {
            loginUser(userData, dispatch);
        });
        
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
       <form onSubmit={submitHandler}>
           <input name='text' placeholder='Enter your email..' onChange={e => setEmail(e.target.value)} value={email} />
           <input type='password' placeholder='Enter your password..' onChange={e => setPassword(e.target.value)} value={password} />
            <button>Login</button>
       </form>
    )
}

// Login.propTypes={
//     auth: PropTypes.object.isRequired
// }

// const mapStateToProps = state => {
//     return {
//         auth: state.auth
//     }
// };

export default withRouter(Login);