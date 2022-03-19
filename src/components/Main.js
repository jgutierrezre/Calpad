import React, { Component } from "react";
import Header from "../components/header.js";
import Test from "../components/test.js";

class Main extends Component {
    render() {
		return (
            <div className="app-main">
                <div className="app-main-note-edit">
                    <input type="text" placeholder="Untitled" autoFocus/>
                    <textarea id="body" placeholder="Write your note here..."/>

                </div>  
                <Header></Header>
                <Test></Test>
            </div>
		);
	}
}

export default Main;