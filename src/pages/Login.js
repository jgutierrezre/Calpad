import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {loginWithEth, logoutWithEth} from '../services/LoginService'

import "../App.css";

class Login extends Component {
	render() {
		return (
			<div className="app-main">
				<h1>
					TEST LOGIN
				</h1>
				<p>ETH Address: {window.userAddress ? window.userAddress : "Not logged in."}</p>
				<button onClick={() => loginWithEth()}>Login</button>
				<button onClick={() => logoutWithEth()}>Logout</button>
				<br/>
				<Link to="/">
				<button>
					CANCEL
				</button>
				</Link>
			</div>
		);
	}
}
 
export default Login;