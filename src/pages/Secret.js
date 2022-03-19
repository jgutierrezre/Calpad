import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {getRole} from '../services/LoginService'

import "../App.css";

class Secret extends Component {
	render() {
		if(getRole(window.userAddress) !== 'admin'){
			return (
				<div className="app-main">
						<h1>FORBIDDEN</h1>
						<Link to="/">
							<button>
								Go back
							</button>
						</Link>
				</div>
			);
		} else {
			return (
				<div className="app-main">
					<h1>HELLO ADMIN</h1>
					<Link to="/">
						<button>
							Go back
						</button>
					</Link>
				</div>
			);
		}
	}
}
 
export default Secret;