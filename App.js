import React from 'react';
import Input from './Input';
import "./input.css"

function App() {
    return (
        <article>
            <section>
                {`<Input />`} 
                <br/>
                <Input />
            </section>
            <section>
                {`<Input error />`} 
                <br/>
                <Input error />
            </section>
            <section>
                {`<Input disabled />`} 
                <br/>
                <Input disabled />
            </section>
            <section>
                {`<Input helperText="You can use as much words as you want" />`} 
                <br/>
                <Input helperText="You can use as much words as you want" />
            </section>

            <section>
                {`<Input helperText="You can use as much words as you want" error />`} 
                <br/>
                <Input helperText="You can use as much words as you want" error />
            </section>

            <section>
                {`<Input startIcon="" />`} 
                <br/>
                <Input startIcon="" />
            </section>
            <section>
                {`<Input endIcon="" />`} 
                <br/>
                <Input endIcon="" />
            </section>
        </article>
    )
}


export default App;