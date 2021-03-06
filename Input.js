import React from 'react';

function Input(props) {
    let inputClass = props.error ? `input input--error` : "input";
    let lableStyle = props.error ? "label--error" : "";

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
    if (props.size) {
        inputClass = `${inputClass} input--${props.size}`
    }
    if (props.fullWidth) {
        inputClass = `${inputClass} input--fullWidth`
    }
    if (props.row) {
        inputClass = `${inputClass} input--${props.row}`
    }


    return (
        <fieldset>
            <label className={lableStyle}>
                Label
            </label>
            <br/>
            {props.multiline 
                ? <textarea 
                    className={inputClass} 
                    placeholder="Placeholder"
                ></textarea> 
                : <input 
                        className={inputClass} 
                    type="text" 
                    disabled={props.disabled}
                    placeholder={props.value === "text" ? "Text" : "Placeholder"}
                /> 
            }
            <br/>
            {props.helperText && <small>{props.helperText}</small>}
        </fieldset>
        
    )
}


export default Input;