import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import TextFieldGroup from '../../common/TextFieldGroup';
import { addExperience } from '../../actions/profileActions';
import { useHistory } from 'react-router-dom';


function AddExperience() {

        const history = useHistory();
        const dispatch = useDispatch();

        const [company, setCompany] = useState('');
        const [from, setFrom] = useState();
        const [to, setTo] = useState();

    const expObject = {
        company,
        from,
        to,
    }

    function onSubmit (e) {
        e.preventDefault();
        console.log('submitting')
        addExperience(expObject, history, dispatch);
        console.log('submitted')

    }

    function onChange(e){
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'company'){
            setCompany(value);
        }else if( name === 'from'){
            setFrom(value);
        }else{
            setTo(value);
        }
    }

    return (
        <div>
            <form>
                <TextFieldGroup 
                    placeholder = 'Company'
                    name = 'company'
                    value = {company}
                    type = 'text'
                    onChange = {onChange}
                />

                <TextFieldGroup 
                    placeholder = 'From'
                    name = 'from'
                    value = {from}
                    type = 'date'
                    onChange = {onChange}
                />

                <TextFieldGroup 
                    placeholder = 'To'
                    name = 'to'
                    value = {to}
                    type = 'date'
                    onChange = {onChange}
                />
            </form>
            <button type="button" onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default AddExperience;