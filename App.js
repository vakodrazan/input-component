import React from 'react';
import Input from './Input';
import "./input.css"

function App() {
    return (
        <article>
            <header>
                <h2>Input field</h2>
            </header>
            <section>
                <div className="content">
                    {`<Input />`} 
                    <br/>
                    <Input />
                </div>
            </section>
            <section>
                <div className="content">
                    {`<Input error />`} 
                    <br/>
                    <Input error />
                </div>
            </section>
            <section>
                <div className="content">
                    {`<Input disabled />`} 
                    <br/>
                    <Input disabled />
                </div>
            </section>
            <section className="wrapper">
                <div className="content"> 
                    {`<Input helperText="You can use as much words as you want" />`} 
                    <br/>
                    <Input helperText="You can use as much words as you want" /> 
                </div>
                <div className="content"> 
                    {`<Input helperText="You can use as much words as you want" error />`} 
                    <br/>
                    <Input helperText="You can use as much words as you want" error />
                </div>
            </section>

            <section className="wrapper">
                <div className="content"> 
                    {`<Input startIcon="call" />`} 
                    <br/>
                    <Input startIcon="call" />
                </div>
                <div className="content"> 
                    {`<Input endIcon="lock" />`} 
                    <br/>
                    <Input endIcon="lock" />
                </div>
            </section>

            <section>
                <div className="content">
                    {`<Input value="text" />`} 
                    <br/>
                    <Input value="text" />
                </div>
            </section>

            {/* Size */}
            <section className="wrapper">
                <div className="content"> 
                    {`<Input size="sm" />`} 
                    <br/>
                    <Input size="sm" />
                </div>
                <div className="content"> 
                    {`<Input size="md" />`} 
                    <br/>
                    <Input size="md" />
                </div>
            </section>

            <section>
                <div className="content">
                    {`<Input fullWidth />`} 
                    <br/>
                    <Input fullWidth />
                </div>
            </section>

            <section>
                <div className="content">
                    {`<Input multiline row="4" />`} 
                    <br/>
                    <Input multiline row="4" />
                </div>
            </section>  
        </article>
    )
}


export default App;