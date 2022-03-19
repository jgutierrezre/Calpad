import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render() {
		return (
            <div className="app-sidebar">
                <div className="app-sidebar-header">
                    <h1>Calpad</h1>
                    <button>Add</button>
                </div>
                <div className="app-sidebar-notes">
                    <div className="app-sidebar-note">
                        <div className="sidebar-note-title">
                            <strong>TITLE</strong>
                            <button>Delete</button>
                        </div>
                        <p>Note preview.</p>
                        <small className="note-meta">Last modified [date]</small>
                    </div>
                </div>
                <Link to="/">
                    <button>
                        Go to Main Page
                    </button>
                </Link>
                <br/>
                <Link to="/login">
                    <button>
                        Go to Login Page
                    </button>
                </Link>
                <br/>
                <Link to="/secret">
                    <button>
                        Go to Secret Page
                    </button>
                </Link>
            </div>
		);
	}
}

export default Sidebar;