import React, { Component } from 'react';
import "./styles/header.css";

class Header extends Component {

    getDate() {
        const date1 = new Date();
        return(date1.getDate());
    }

    render() {
        return (
            <header className="header">
                <div className="logo"> Date is {this.getDate()} </div>
            </header>
        )
    }


}

export default Header;