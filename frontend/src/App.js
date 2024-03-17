
//CSS
import './App.css';

//React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className='App'>
		<Router>
			<Routes>
				<Route path="/" element={""}/>
				<Route path="Register" element={""}/>
				<Route path="Login" element={""}/>
			</Routes>
		</Router>
    </div>
  );
}

export default App;
