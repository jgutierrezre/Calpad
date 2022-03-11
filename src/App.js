import React, { Component } from "react";
import Sidebar2 from "./components/sidebar.js";
import Header from "./components/header.js";
 
import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header></Header>
            <Sidebar2></Sidebar2>
        </div>
    );
  }
}
 
export default App;