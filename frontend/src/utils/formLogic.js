import React from "react";

const validateRegisterForm = ( setError, fields ) => {

    let emailError = validateEmail(fields.name);
    let nameError = validateUsername(fields.userName);
    let pwError = validatePassword(fields.password);

    let temp = {email: emailError, username: nameError, password: pwError};
    setError(temp);

    return temp.email === "" && temp.password === "";
}
const validateEmail = (email) => {
    
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
    } 
    
    return errorMsg;
}

function validatePassword(pw) {
    
    let errorMsg = "";

    //Check that exists. 
    if(pw === "") {
        errorMsg = "Password needed."
    } 
    
    return errorMsg;
}

function validateUsername(username) {
    
    let errorMsg = "";

    //Check that exists. 
    if(username === "") {
        errorMsg = "Username needed."
    } 
    
    return errorMsg;
}

function addUser() {

}

//TODO implement
function loginUser( fields ){

}

//TODO implement
function attemptLogin( fields ) {
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