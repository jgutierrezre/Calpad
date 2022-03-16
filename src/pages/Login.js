import React, { Component } from "react";
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <h1>
                TEST LOGIN
            </h1>
            <Link to="/">CANCEL</Link>
        </div>
    );
  }
}
 
export default App;