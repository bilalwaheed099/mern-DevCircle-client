import React from 'react';
import { Link } from 'react-router-dom';
import { dispatch } from 'react-redux';

export default function ProfileActions() {
    return (
        <div>
            {/* button for deleting the profile */}
            <Link to=''>Edit Profile</Link>
            <Link to='/add-experience'>Add Experience</Link>
            <Link to=''>Add Education</Link>
        </div>
    )
};
