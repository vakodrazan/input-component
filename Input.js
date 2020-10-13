import React from 'react';

function Input(props) {
    let inputClass = props.error ? `input input--error` : "input"
    // if (props.helperText) {
        
    // }
    return (
        <label>
            Label <br/>
            <input 
                className={inputClass} 
                type="text" 
                disabled={props.disabled}
                placeholder="Placeholder"
             />
        </label>
    )
}


export default Input;