

//CSS
import '../styles/forms.css';

//React
import { useState, useEffect } from 'react';


const Login = () => {

    //States for form data
    const[email, setEmail] = useState("");
    const[password, setPassWord] = useState("");
    const[error, setError] = useState({error: false, message: ""});

    //Handles form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        setError({error: true, message: "Error Test"});
    }

    return (
        <div className="Content-Container">
            <div className='Page-Heading'><h2>Login</h2></div>
            <form className='Form-Container' onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" id="email" name="email" value={email} 
                onChange={(e) => setEmail(e.target.value)}/>

                <label>Password:</label>
                <input type="password" id="password" name="password" value={password}
                 onChange={(e) => setPassWord(e.target.value)}/>
                {error.error && <Error error={error} />}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const Error = ({ error }) => {
    return (
        <div className='Form-Error'>
            {error.message}
        </div>
    )
}


export default Login;