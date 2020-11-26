import React from 'react'

export default function SelectListGroup(props) {
    const selectOptions = props.options.map(option => (
            <option key={option.label} value={option.value}>
                {option.label}
            </option>
        )
    )
    return (
        <div>
            <select 
                name = {props.name}
                value = {props.value}
                onChange = {props.onChange}
            >
                {selectOptions}
            </select>
        </div>
    )
}
