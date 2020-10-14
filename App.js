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
                {`<Input startIcon="call" />`} 
                <br/>
                <Input startIcon="call" />
            </section>
            <section>
                {`<Input endIcon="lock" />`} 
                <br/>
                <Input endIcon="lock" />
            </section>

            <section>
                {`<Input value="text" />`} 
                <br/>
                <Input value="text" />
            </section>

            {/* Size */}
            <section>
                {`<Input size="sm" />`} 
                <br/>
                <Input size="sm" />
            </section>
            <section>
                {`<Input size="md" />`} 
                <br/>
                <Input size="md" />
            </section>
            <section>
                {`<Input fullWidth />`} 
                <br/>
                <Input fullWidth />
            </section>
        </article>
    )
}


export default App;