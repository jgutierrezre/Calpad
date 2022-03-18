import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {loginWithEth, logoutWithEth} from '../services/LoginService'

class Login extends Component {
	render() {
		return (
			<div>
				<h1>
					TEST LOGIN
				</h1>
				<p>ETH Address: {window.userAddress ? window.userAddress : "Not logged in."}</p>
				<button onClick={() => loginWithEth()}>Login</button>
				<button onClick={() => logoutWithEth()}>Logout</button>
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