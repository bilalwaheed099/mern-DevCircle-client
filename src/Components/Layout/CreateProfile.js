import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
import SelectListGroup from '../../common/SelectListGroup';
import InputGroup from '../../common/InputGroup';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import { createProfile } from '../../actions/profileActions'; 
import { withRouter, useHistory } from 'react-router-dom';



function CreateProfile() {

    const history = useHistory();
    const dispatch = useDispatch();

    const errors = useSelector(state => state.errors);

    const [handle, setHandle] = useState('');
    const [skills, setSkills] = useState('');
    const [linksDisplay, setLinksDisplay] = useState(false);
    const [fb, setfb] = useState('');

    const profileData = {
        handle,
        fb,
        skills
    }



    //Social Links
    let socialLinks;
    if(linksDisplay) {
        socialLinks = (
            <div>
                <InputGroup 
                    placeholder="Facebook" 
                    name="facebook"
                    value={fb}
                    onChange={e => setfb(e.target.value)}
                />
            </div>
        );
    }


    function clickHandler() {
        setLinksDisplay(!linksDisplay);
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log('submit');
        createProfile(profileData, history, dispatch);

    }

    const options = [
        {label: "* Select Professional Status ", value: 0},
        {label: "Developer", value: "Developer"},
        {label: "Junior Developer", value: "Junior Developer"},
        {label: "Senior Developer", value: "Senior Developer"},
        {label: "Developer1", value: "Developer1"},
        {label: "Developer2", value: "Developer2"},
        {label: "Developer3", value: "Developer3"},
    ];

    return (
        <div>
            <h1> Create your profile </h1>
            <p> Lets get some information to start creating your profile.</p>
            <form>
                <TextFieldGroup 
                    placeholder = "* Profile Handle"
                    name = "handle"
                    value = {handle}
                    onChange = {e => setHandle(e.target.value)}
                    // error = {errors.handle}
                    info="A unique handle for your profile URL. Your full name, your company name etc."
                />
                {/* skills */}
                <TextFieldGroup 
                    placeholder = "* Skills"
                    name = "skills"
                    value = {skills}
                    onChange = {e => setSkills(e.target.value)}
                    // error = {errors.handle}
                    info="Skills that you have acquired"
                />
                {/* Select Group List */}
                <SelectListGroup 
                    name = "status"
                    options = {options}
                />
                {/* Select Group List */}

                {/* Select Group List */}

            </form>
            <button type="button" onClick={clickHandler}>Add Social Network Links</button>
            <button type="button" onClick={onSubmit}>Submit</button>
            {socialLinks}
        </div>
    )
}

export default CreateProfile;