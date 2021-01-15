import React from 'react';

export default function TextFieldGroup(props) {
    return (
        <div>
            <input 
                placeholder = {props.placeholder}
                type = {props.type}
                name = {props.name}
                value = {props.value}
                onChange = {props.onChange}
                disabled = {props.disabled}
            />
            <br/><small>{props.info}</small>
        </div>
    )
}
