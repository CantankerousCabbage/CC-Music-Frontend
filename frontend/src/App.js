
//CSS
import './App.css';

//React
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Componenets
import NavBar from './components/NavBar'
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";



function App() {
  return (
    <div className='App'>
		<Router>
			<NavBar />
			<Link to="/">Home</Link>
			<Link to="/Register">Register</Link>
			<Link to="/Login">Login</Link>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="Register" element={<Register />}/>
				<Route path="Login" element={<Login />}/>
			</Routes>
		</Router>
    </div>
  );
}

export default App;
