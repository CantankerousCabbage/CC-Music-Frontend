

//CSS
import '../styles/forms.css';

//React
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Componenets
import Error from '../components/Error';

//Functions
import { attemptLogin } from '../utils/formLogic';


const Login = () => {

    const navigate = useNavigate();

    //States for form data
    const[email, setEmail] = useState("");
    const[password, setPassWord] = useState("");
    const[error, setError] = useState({email: "", password: ""});

    //TODO update to async
    //Handles form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        //Navigate Home on Login
        if(attemptLogin(error, setError, email, password)){
            console.log(email);
            console.log(password);
            navigate("/");
        }
    }

    return (
        <div className="Content-Container">
            <div className='Page-Heading'><h2>Login</h2></div>
            <form className='Form-Container' onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" id="email" name="email" value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                {error.email !== "" && <Error error={error.email} />}
                <label>Password:</label>
                <input type="current-password" id="current-password" name="current-password" value={password}
                 onChange={(e) => setPassWord(e.target.value)}/>
                {error.password !== "" && <Error error={error.password} />}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;