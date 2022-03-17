import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Web3 from 'web3';

class App extends Component {

  async loginWithEth() {
    if (window.ethereum) {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:8080')
      try {
        const accounts = await web3.eth.getAccounts();
      } catch (error) {
        console.error(error)
      }
    } else {
      alert("No ETH brower extension detected.");
    }
  }

  render() {
    return (
        <div>
            <h1>
                TEST LOGIN
            </h1>
            <button onClick={this.loginWithEth()}>Login</button>
            <Link to="/">
              <button>
                CANCEL
              </button>
            </Link>
        </div>
    );
  }
}
 
export default App;