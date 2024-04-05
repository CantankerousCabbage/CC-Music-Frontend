import React from "react";

const validateRegisterForm = ( setError, fields ) => {

    let emailError = validateEmail(fields.email);
    let nameError = validateUsername(fields.username);
    let pwError = validatePassword(fields.password);

    let temp = {email: emailError, username: nameError, password: pwError};
    setError(temp);

    return temp.email === "" && temp.password === "" && temp.username;
}

const validateLogin = ( setError, fields ) => {

    let emailError = validateEmail(fields.email);
    let pwError = validatePassword(fields.password);

    let temp = {email: emailError, password: pwError};
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

//TODO implement asyn interaction
function attemptLogin( fields ) {


    return true;
}

//TODO implement.
function emailInUse(){
    return false;
}

export {
    validateRegisterForm,
    validateLogin,
    attemptLogin,
    loginUser,
    addUser
}