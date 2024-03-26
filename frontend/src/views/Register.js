import React from 'react';

//CSS
import '../styles/forms.css';

//React
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Functions
import { validateRegisterForm, addUser, loginUser } from '../utils/formLogic';

//Componenets
import Error from '../components/Error';
import CancelButton from '../components/CancelButton';
import SubmitButton from '../components/SubmitButton';


const Register = () => {

    const[fields, setFields] = useState({ email: "", username: "", password: ""})
    const[error, setError] = useState({email: "", password: ""});

    const navigate = useNavigate();

    //Handles form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        //If registration valid login and Home. 
        if(validateRegisterForm( setError, fields)){

            addUser(fields);
            loginUser(fields);
            navigate("/Login");
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
            <form className='Form-Container' onSubmit={handleSubmit} noValidate>
                <label>Email:</label>
                <input type="text" id="email" name="email" value={fields.email} 
                onChange={updateFields}/>

                
                {(error.email !== "") && Error(error.email)}
                <label>Username:</label>
                <input type="text" id="username" name="username" value={fields.username} 
                onChange={updateFields}/>
                {(error.username !== "") && Error(error.username)}
                <label>Password:</label>
                <input type="password" id="password" name="password" value={fields.password}
                 onChange={updateFields}/>
                {(error.password !== "") && Error(error.password)}
                
                <div className='form-b-container'>
                    <SubmitButton buttonText={"Register"} />
                    <CancelButton />
                </div>
                
            </form>
        </div>
    )
}

export default Register;