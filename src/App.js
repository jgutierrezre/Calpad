import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import uuid from 'react-uuid';

import Login from './pages/Login'
import Secret from './pages/Secret'

import "./App.css";
import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  notes: []
		};
	  }

	onAddNote = () => {
		const newNote = {
			id: uuid(),
			title: "Untitled Note",
			body: "",
			lastModified: Date.now(),
		};
		this.setState({ notes: [newNote, ...this.state.notes] });
	}

	onDeleteNote = (idToDelete) => {
		this.setState({ notes: this.state.notes.filter((note) => note.id !== idToDelete) });
	}

	IsLogged = () => {
		const auth = true;
		return auth ? <Outlet/> : <Navigate to="/login"/>;
	}

	Default = () => {
		return (
			<>
				<Sidebar 
					notes={this.state.notes} 
					onAddNote={this.onAddNote}
					onDeleteNote={this.onDeleteNote}
				/>
				<Main/>
			</>
		)
	}

	render() {
		return (
			<div className='App'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<this.IsLogged/>}>
							<Route path='/' element={<this.Default/>}/>
						</Route>
						<Route path='/login' element={<Login/>}/>
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;