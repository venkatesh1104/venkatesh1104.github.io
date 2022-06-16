import React,{Component} from 'react';

class Button extends Component{
    render(){
        return(
            <div className="Container-Button">
            <button className="btn primary-btn">
                {""}
                Hire Me{""}
            </button>
            <a href='Venkatesh K.V.pdf' download='Venkatesh K.V.pdf'>
            <button className="btn highlighted-btn"> Get Resume</button>
            </a>
       </div>
        )
    }
}

export default Button;