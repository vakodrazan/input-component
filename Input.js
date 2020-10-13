import React from 'react';

function Input(props) {
    let inputClass = props.error ? `input input--error` : "input"
    if (props.helperText) {
        inputClass = `${inputClass} input--helperText`
    }
    return (
        <label>
            Label <br/>
            <input 
                className={inputClass} 
                type="text" 
                disabled={props.disabled}
                placeholder="Placeholder"
            />
            <br/>
            {props.helperText && <small>{props.helperText}</small>}

        </label>
    )
}


export default Input;