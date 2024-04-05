import React from 'react';

//CSS
import '../styles/forms.css';

//React
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Componenets
import Error from '../components/Error';
import CancelButton from '../components/CancelButton';
import SubmitButton from '../components/SubmitButton';
import RegisterButton from '../components/RegisterButton'

//Functions
import { validateLogin, attemptLogin } from '../utils/formLogic';


const Login = () => {

    const navigate = useNavigate();

    //States for form data
    const [fields, setFields] = useState({email: "", password: ""});
    const[error, setError] = useState({email: "", password: ""});

    //TODO update to async
    //Handles form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        //Navigate Home on Login
        if(validateLogin(setError, fields) && attemptLogin( fields )){
            navigate("/");
        }
    }

    const updateFields = (event) => {

        const temp = {...fields};
        temp[event.target.name] = event.target.value;
        setFields(temp);
    }

    return (
        <div className="Content-Container">
            <div className='Page-Heading'><h2>Login</h2></div>
            <form className='Form-Container' onSubmit={handleSubmit}>
                <div className='Form-Field'>
                    <label>Email:</label>
                    <input type="text" id="email" name="email" value={fields.email} 
                    onChange={updateFields}/>
                    {error.email !== "" && Error(error.email)}
                </div>
                <div className='Form-Field'>
                    <label>Password:</label>
                    <input type="password" id="password" name="password" value={fields.password}
                    onChange={updateFields}/>
                    {error.password !== "" &&  Error(error.password)}
                </div>
                <div className='login-register-container'>
                    Don't have an account? 
                    <RegisterButton />
                </div>

                <div className='form-b-container'>
                    <SubmitButton buttonText={"Login"} />
                    <CancelButton />
                </div>  
            </form>
        </div>
    )
}

export default Login;