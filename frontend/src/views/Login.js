import React from 'react';

//API
import axios from 'axios';

//CSS
import '../styles/forms.css';

//React
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Componenets
import Error from '../components/Error';
import CancelButton from '../components/CancelButton';
import SubmitButton from '../components/SubmitButton';
import RegisterButton from '../components/RegisterButton'

//Functions
import { validateLogin, attemptLogin, setUser } from '../utils/formLogic';
import { verifyLogin } from '../api/APIs';


const Login = ({ setUser }) => {

    const navigate = useNavigate();

    //States for form data
    const [fields, setFields] = useState({email: "", password: ""});
    const[error, setError] = useState({invalid: "", email: "", password: ""});

    //TODO update to async
    //Handles form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        //Navigate Home on Login
        if(validateLogin(setError, fields)){
            
            const response = await verifyLogin(setUser, fields);

            if(response){
                // const temp = {...error}
                // temp.invalid = ""
                navigate("/");
            } else {
                error.invalid = "Email or password is invalid";
            }
            //TODO get usename returned from login check
            // setUser( {username: "Bob", email: fields.email} );
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
                    {error.invalid !== "" && Error(error.invalid)}
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