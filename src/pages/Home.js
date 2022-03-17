import React, { Component } from "react";
import Header from "../components/header.js";
import Test from "../components/test.js";
import {Link} from 'react-router-dom';
 
import "../App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header></Header>
            <Test></Test>
            <Link to="/login">
              <button>
                Login
              </button>
            </Link>
        </div>
    );
  }
}
 
export default App;