import './DarkModeBTN.css'

import { Component } from "react";

export class Button extends Component{
    render(){
        const {text, Click} = this.props

        return(
            <button onClick={Click}>
                {text}
            </button>
        );
    }
}