import React, { Component } from "react";
import Header from "../components/header.js";
import Test from "../components/test.js";
import {Link} from 'react-router-dom';
import {getRole} from '../services/LoginService'

import "../App.css";

class Secret extends Component {
	render() {
		console.log(window.userAddress)
		console.log(getRole(window.userAddress))
		if(getRole(window.userAddress) != 'admin'){
			return (
				<div>
						<h1>FORBIDDEN</h1>
						<Link to="/">
							<button>
								GO BACK
							</button>
						</Link>
				</div>
			);
		} else {
			return (
				<div className="App">
					<h1>HELLO</h1>
					<Link to="/">
						<button>
							Go back.
						</button>
					</Link>
				</div>
			);
		}
	}
}
 
export default Secret;