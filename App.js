import React from 'react';
import Input from './Input';
import "./input.css"

function App() {
    return (
        <article>
            <section>
                <div>
                    {`<Input />`} 
                    <br/>
                    <Input />
                </div>
            </section>
            <section>
                <div>
                    {`<Input error />`} 
                    <br/>
                    <Input error />
                </div>
            </section>
            <section>
                <div>
                    {`<Input disabled />`} 
                    <br/>
                    <Input disabled />
                </div>
            </section>
            <section>
                <div> 
                    {`<Input helperText="You can use as much words as you want" />`} 
                    <br/>
                    <Input helperText="You can use as much words as you want" /> 
                </div>
                <div> 
                    {`<Input helperText="You can use as much words as you want" error />`} 
                    <br/>
                    <Input helperText="You can use as much words as you want" error />
                </div>
            </section>

            <section>
                <div> 
                    {`<Input startIcon="call" />`} 
                    <br/>
                    <Input startIcon="call" />
                </div>
                <div> 
                    {`<Input endIcon="lock" />`} 
                    <br/>
                    <Input endIcon="lock" />
                </div>
            </section>

            <section>
                <div>
                    {`<Input value="text" />`} 
                    <br/>
                    <Input value="text" />
                </div>
            </section>

            {/* Size */}
            <section>
                <div> 
                    {`<Input size="sm" />`} 
                    <br/>
                    <Input size="sm" />
                </div>
                <div> 
                    {`<Input size="md" />`} 
                    <br/>
                    <Input size="md" />
                </div>
            </section>

            <section>
                <div>
                    {`<Input fullWidth />`} 
                    <br/>
                    <Input fullWidth />
                </div>
            </section>

            <section>
                <div>
                    {`<Input multiline row="4" />`} 
                    <br/>
                    <Input multiline row="4" />
                </div>
            </section>  
        </article>
    )
}


export default App;