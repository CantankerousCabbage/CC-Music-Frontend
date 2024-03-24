import React from 'react';

//CSS
import '../styles/forms.css';

//React
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Functions
import { validateEmail, validatePassword, addUser, loginUser } from '../utils/formLogic';

//Componenets
import Error from '../components/Error';


const Register = () => {

    

    //States for form data
    const[email, setEmail] = useState("");
    const[password, setPassWord] = useState("");
    
    const[error, setError] = useState({email: "test", password: "test"});
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Error has changed");
        console.log(error);
    }, [error]);
    //Handles form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        let validEmail = validateEmail(error, setError, email);
        let validPassword = validatePassword(error, setError, password);
        
        //If registration valid login and Home. 
        if(validEmail && validPassword){

            addUser(email, password);
            loginUser(email, password);

            navigate("/");
        }
    }

    return (
        <div className="Content-Container">
            <div className='Page-Heading'><h2>Register</h2></div>
            <form className='Form-Container' onSubmit={handleSubmit} noValidate>
                <label>Email:</label>
                <input type="text" id="email" name="email" value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                {error.email !== "" && Error(error.email)}
                <label>Password:</label>
                <input type="current-password" id="current-password" name="current-password" value={password}
                 onChange={(e) => setPassWord(e.target.value)}/>
                {error.password !== "" && Error(error.email)}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register;