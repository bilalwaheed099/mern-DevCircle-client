import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// import redux from '';
import { logoutUser } from '../../actions/authAction';
import { useSelector, useDispatch } from 'react-redux';
import { clearCurrentProfile } from '../../actions/profileActions';


function Navbar() {

    const dispatch = useDispatch();
    const history = useHistory();

    function logoutClickHandler(e) {
        e.preventDefault();
        // clear current profile
        clearCurrentProfile(dispatch);
        logoutUser(dispatch, history);
    }

    const { auth } = useSelector(state=>state.auth);

    return(
        <nav>
            <div>
                <Link to = '/'>
                    Dashboard
                </Link>
            </div>
                Current
            <div>
                <Link to = '/register'>
                    Register
                </Link>
                <Link to = '/login'>
                    Login
                </Link>
                <a href="" onClick={logoutClickHandler}>Log out</a>
            </div>
        </nav>
    );
}

export default Navbar;