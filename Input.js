import React from 'react';

function Input(props) {
    let inputClass = props.error ? `input input--error` : "input"
    if (props.helperText) {
        inputClass = `${inputClass} input--helperText`
    } 
    if (props.startIcon) {
        inputClass = `${inputClass} input--startIcon input--${props.startIcon}`
    }
    if (props.endIcon) {
        inputClass = `${inputClass} input--endIcon input--${props.endIcon}`
    }
    if (props.value) {
        inputClass = `${inputClass} input--${props.value}`
    }


    return (
        <label>
            Label <br/>
            <input 
                className={inputClass} 
                type="text" 
                disabled={props.disabled}
                placeholder={props.value === "text" ? "Text" : "Placeholder"}
            />
            <br/>
            {props.helperText && <small>{props.helperText}</small>}

        </label>
    )
}


export default Input;