import React from 'react'

export default function TextAreaFieldGroup(props) {
    return (
        <div>
            <textarea 
                name = {props.name}
                value = {props.value}
                onChange = {props.onChange}
                disabled = {props.disabled}
            />
            <p>{props.info}</p>
        </div>
    )
}
