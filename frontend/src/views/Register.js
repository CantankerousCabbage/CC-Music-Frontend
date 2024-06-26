import React from 'react';


//CSS
import '../styles/forms.css';

//React
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Functions
import { validateRegisterForm } from '../utils/formLogic';
import { registerUser } from '../api/APIs';

//Componenets
import Error from '../components/Error';
import CancelButton from '../components/CancelButton';
import SubmitButton from '../components/SubmitButton';


const Register = () => {

    const[fields, setFields] = useState({ email: "", username: "", password: ""})
    const[error, setError] = useState({invalid: "", email: "", username: "", password: ""});

    const navigate = useNavigate();

    //Handles form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        //If registration valid login and Home. 
        if(validateRegisterForm( setError, fields)){
            
            const success = await registerUser(fields);

            if(success){
                navigate("/Login");
            } else {
                const temp = {...error};
                temp.invalid = "The email already exists"
                setError(temp);
            }   
        } 
    }

    const updateFields = (event) => {
        
        let temp = {...fields};
        temp[event.target.name] = event.target.value;

        setFields(temp);
    }

    return (
        <div className="Content-Container">
            <div className='Page-Heading'><h2>Register</h2></div>
            <form className='Form-Container' onSubmit={handleSubmit} >
                <div className='Form-Field'>
                    <label>Email:</label>
                    <input type="text" id="email" name="email" value={fields.email} 
                    onChange={updateFields}/>
                    {(error.email !== "") && Error(error.email)}
                </div>
                    <div className='Form-Field'>
                    <label>Username:</label>
                    <input type="text" id="username" name="username" value={fields.username} 
                    onChange={updateFields}/>
                    {(error.username !== "") && Error(error.username)}
                </div>
                <div className='Form-Field'>
                    <label>Password:</label>
                    <input type="password" id="password" name="password" value={fields.password}
                    onChange={updateFields}/>
                    {(error.password !== "") && Error(error.password)}
                    {(error.invalid !== "") && Error(error.invalid)}
                </div>
                <div className='form-b-container'>
                    <SubmitButton buttonText={"Register"} />
                    <CancelButton />
                </div>
                
            </form>
        </div>
    )
}

export default Register;