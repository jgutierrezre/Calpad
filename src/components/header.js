import React, { Component } from 'react';

function toHex(str){
    let result = "";

    for (let i=0; i<str.length; i++) {
        const hex = str.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
}

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {input: 'pasa'};
    }

    getDate() {
        const date1 = new Date();
        return(date1.getDate());
    }

    static getDerivedStateFromProps(props,state){ 
        if(state.input === 'no pasa'){
            return false;
        }
        state.input = toHex(state.input);
        return true
    }

    render() {
        return (
            <header>
                <div>Date is {this.getDate()}</div>
                <div>{this.state.input}</div>
            </header>
        )
    }


}

export default Header;