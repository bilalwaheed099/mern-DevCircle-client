import React from 'react'

export default function InputGroup(props) {
    return (
        <div>
            <input 
                placeholder = {props.placeholder}
                name = {props.name}
                value = {props.value}
                icon = {props.icon}
                onChange = {props.onChange}
                disabled = {props.disabled}
            />
            <p>{props.info}</p>
        </div>
    )
}
