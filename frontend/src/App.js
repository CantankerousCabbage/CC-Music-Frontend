
//CSS
import './App.css';

//React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReducer, useState } from 'react';
//Componenets
import NavBar from './components/NavBar'
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";



function App() {

	const[user, setUser] = useState({ username: "cat", email: ""});

	return (
		<div className='App'>
			<Router>
				<NavBar user={user} setUser={setUser}/>
				
					<Routes>
						<Route path="/" element={<Home user={user} />}/>
						<Route path="Register" element={<Register />}/>
						<Route path="Login" element={<Login setUser={setUser}/>}/>
					</Routes>
				
			</Router>
		</div>
	);
}



export default App;
