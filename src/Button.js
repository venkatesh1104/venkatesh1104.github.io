import React, { Component } from 'react';

export default class Button extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state =
        {
                 title: 'submit',
        };
        
        this.submit = this.submit.bind(this);
    }

    submit()
    {
        console.log('submitted');
    }
    render(){
        return(
            <div>
               <button onClick={this.submit}>{this.state.title}</button> 
            </div>
        );
    }
}