import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory, withRouter } from 'react-router-dom';

import { registerUser } from '../../actions/authAction';
import store from "../../store";


function Register() {

    const history = useHistory();
    const dispatch = useDispatch();

    const { user } = useSelector(state=>state.auth.user);
    const { error } = useSelector(state=>state.error);
    
    if(user){
        console.log(user.name);
    }
    if(error){
        console.log(error)
    }

    function submitHandler(e){
        e.preventDefault();
        const newUser = {
            name,
            email,
            password,
            password2,
        }

         store.dispatch(dispatch => {
            registerUser(newUser, history, dispatch)
         })
        // axios.post('/api/users/register', newUser)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err.response.data));



    }



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    return(
        <div>
            <form onSubmit={submitHandler}>
    <h1>{user ? user.name : null}</h1>
                <input type='text' placeholder='Enter Full Name..' name='name' onChange={e => setName(e.target.value)} value={name} />
                <input type='text' placeholder='Enter Email..' name='email' onChange={e => setEmail(e.target.value)} value={email}/>
                <input type='password' placeholder='Enter Password..' name='password' onChange={e => setPassword(e.target.value)} value={password}/>
                <input type='password' placeholder='Enter Password again..' name='password2' onChange={e => setPassword2(e.target.value)} value={password2}/>
                <button type='submit' >Register</button> 
            </form>
        </div>
    );
};

export default withRouter(Register);