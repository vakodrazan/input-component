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
                    <p>{`<Input />`} </p>
                    <br/>
                    <Input />
                </div>
            </section>
            <section>
                <div className="content">
                    <p>{`<Input error />`} </p>
                    <br/>
                    <Input error />
                </div>
            </section>
            <section>
                <div className="content">
                    <p>{`<Input disabled />`} </p>
                    <br/>
                    <Input disabled />
                </div>
            </section>
            <section className="wrapper">
                <div className="content"> 
                    <p>{`<Input helperText="You can use as much words as you want" />`} </p>
                    <br/>
                    <Input helperText="You can use as much words as you want" /> 
                </div>
                <div className="content"> 
                    <p>{`<Input helperText="You can use as much words as you want" error />`} </p>
                    <br/>
                    <Input helperText="You can use as much words as you want" error />
                </div>
            </section>

            <section className="wrapper">
                <div className="content"> 
                    <p>{`<Input startIcon="call" />`} </p>
                    <br/>
                    <Input startIcon="call" />
                </div>
                <div className="content"> 
                    <p>{`<Input endIcon="lock" />`} </p>
                    <br/>
                    <Input endIcon="lock" />
                </div>
            </section>

            <section>
                <div className="content">
                    <p>{`<Input value="text" />`} </p>
                    <br/>
                    <Input value="text" />
                </div>
            </section>

            {/* Size */}
            <section className="wrapper">
                <div className="content"> 
                    <p>{`<Input size="sm" />`} </p>
                    <br/>
                    <Input size="sm" />
                </div>
                <div className="content"> 
                    <p>{`<Input size="md" />`} </p>
                    <br/>
                    <Input size="md" />
                </div>
            </section>

            <section>
                <div className="content">
                    <p>{`<Input fullWidth />`} </p>
                    <br/>
                    <Input fullWidth />
                </div>
            </section>

            <section>
                <div className="content">
                    <p>{`<Input multiline row="4" />`} </p>
                    <br/>
                    <Input multiline row="4" />
                </div>
            </section>  
        </article>
    )
}


export default App;