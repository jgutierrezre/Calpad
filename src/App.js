import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Login from './pages/Login'
import Secret from './pages/Secret'

import "./App.css";
import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends Component {

	render() {
		return (
			<div className='App'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<IsLogged/>}>
							<Route path='/' element={<Default/>}/>
						</Route>
						<Route path='/login' element={<Login/>}/>
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

const IsLogged = () => {
    const auth = true;
    return auth ? <Outlet/> : <Navigate to="/login"/>;
}

const Default = () => {
	return (
		<>
			<Sidebar/>
			<Main/>
		</>
	)
}

export default App;