import React from "react";

const validateRegisterForm = (setError, email, pw) => {

    let emailError = validateEmail(email);
    let pwError = validatePassword(pw);

    let temp = {email: emailError, password: pwError};
    setError(temp);

    return temp.email === "" && temp.password === "";
}
const validateEmail = (email) => {
    
    let valid = false;
    let errorMsg = "";

    // Check exists, basic regex for structure and not in DB.
    if(!email) {
        errorMsg = "Email cannot be empty."
    } 
    else if (!/\S+@\S+\.\S+/.test(email)){
        errorMsg = "Please use following format: <string>@<domain>.com"
    } 
    else if (emailInUse(email)){
        errorMsg = "Email in use."
    } else {
        valid = true;
    }
    
    return errorMsg;
}

function validatePassword(pw) {
    
    let valid = false;
    let errorMsg = "";

    //Check that exists. 
    if(pw === "") {
        errorMsg = "Password needed."
    } 
    else {
        valid = true;
    }
    
    return errorMsg;
}

function addUser() {

}

//TODO implement
function loginUser(email, password){

}

//TODO implement
function attemptLogin(error, setError, email, password) {
    return true;
}

//TODO implement.
function emailInUse(){
    return false;
}

export {
    validateRegisterForm,
    attemptLogin,
    loginUser,
    addUser
}