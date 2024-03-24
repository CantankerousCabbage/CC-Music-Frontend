

const validateEmail = (error, setError, email) => {
    
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

    // console.log("Email message: " + errorMsg);
    // const temp = {...error}
    // temp.email = errorMsg;
    console.log(error);
    setError(error => ({ ...error, email: errorMsg }));
    // setError({email: "cat", password: "rat"});
    
    return valid;
}

function validatePassword(error, setError, pw) {
    
    let valid = false;
    let errorMsg = "";

    //Check that exists. 
    if(pw === "") {
        errorMsg = "Password needed."
    } 
    else {
        valid = true;
    }

    
    const temp = {...error}
    temp.password = errorMsg;
    setError(temp);
    
    return valid;
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
    validateEmail,
    validatePassword,
    attemptLogin,
    loginUser,
    addUser
}