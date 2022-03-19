import { notStrictEqual } from "assert";
import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        console.log(this.props.notes)
		return (
            <div className="app-sidebar">
                <div className="app-sidebar-header">
                    <h1>Calpad</h1>
                    <button onClick={this.props.onAddNote}>Add</button>
                </div>
                <div className="app-sidebar-notes">
                    {this.props.notes.map((note) => (
                        <div className="app-sidebar-note" key={note.id}>
                            <div className="sidebar-note-title">
                                <strong>{note.title}</strong>
                                <button onClick={() => this.props.onDeleteNote(note.id)}>Delete</button>
                            </div>
                            <p>{note.body && note.body.substring(0,100) + "..."}</p>
                            <small className="note-meta">Last modified {new Date(note.lastModified).toLocaleDateString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}</small>
                        </div>
                    ))}
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