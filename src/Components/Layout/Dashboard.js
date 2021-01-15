import React from 'react';
import { getCurrentProfile, setProfileLoading, deleteAccount } from '../../actions/profileActions'; 
import { logoutUser } from '../../actions/authAction'; 
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import store from "../../store";
import ProfileActions from './ProfileActions';
import Experience from './Experience';

 
function Dashboard() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {isLoading, profile} = useSelector(state => state.profile);
    const user = useSelector(state => state.auth.user);

    function onDeleteClick (e) {
        deleteAccount(dispatch);
        logoutUser(dispatch, history);
    };

    useEffect( () => {
        getCurrentProfile(dispatch);
    }, []);

        let dashboardContent;
        if( profile === null || isLoading){
            dashboardContent = (
                <h4>Loading...</h4>
            );
        } else {
            if(Object.keys(profile).length > 0) {                
            dashboardContent = (
                <div>
                    <h4>{profile.handle}</h4>
                    <ProfileActions />
                    <Experience />
                    <button onClick={onDeleteClick}>Delete Account</button>
                </div>
            )
            } else {
                dashboardContent = (
                    <div>
                        <p>Welcome {user.name}</p>
                        <p>You have not yet created a profile. Create one Now!</p>
                        <Link to='/create-profile'> Create Profile</Link>
                    </div>
                );
            }
        }


    return(
        <div>
            {dashboardContent}
        </div>
    );
}

export default Dashboard;