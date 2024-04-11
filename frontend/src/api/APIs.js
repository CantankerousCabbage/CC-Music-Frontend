
import axios from "axios";
import React from "react";

// const getLog = async () => {
//     const getLogin = "https://wb5rxpjrt6.execute-api.us-east-1.amazonaws.com/Production/Lambda-CRUD-get";

//     try {
//         const response = await axios.post(getLogin, {"email": "s39419112@student.rmit.edu.au", "type": "get"});
//         console.log(response.data); 
//     } catch (error) {
//         console.error("Error occurred:", error.message);
//         console.error("Response data:", error.response.data);
//     }
// }

const verifyLogin = async ( setUser, fields ) => {
    const verifyLogin_URL = "https://e1jerl0ws3.execute-api.us-east-1.amazonaws.com/developement/Lambda-Login-Check";
    
    let success = false;
    
    try {
        
        const response = await axios.post(verifyLogin_URL, {"email": fields.email, "password": fields.password, "type": "get"});
        
        success = (response.data.statusCode === 200);
        
        if(success){
            setUser(response.data.body);
        }
    } catch (error) {
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }
    
    return success;
}

const registerUser = async (newUser) => {
    const registerUser_URL = "https://2mv97phs7d.execute-api.us-east-1.amazonaws.com/developement/CRUD-Login-Register";
    let success = false;
    
    try {
        const response = await axios.post(registerUser_URL, {"email": newUser.email, "username": newUser.username, "password": newUser.password,  "type": "create"});
        console.log(response.data); 
        

        success = response.data.statusCode === 200;
    } catch (error) {
        success = false;
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }
    return success;
}

const searchAlbums = async (fields) => {
    const searchAlbums_URL = "https://xk5cprsn1c.execute-api.us-east-1.amazonaws.com/default/Lambda-Album-Search";
    let returnObject = null;

    try {
        const response = await axios.post(searchAlbums_URL, {"title": fields.email, "year": fields.year, "artist": fields.artist,  "type": "search"});
        returnObject = response.data.body.albums;
         
        // console.log(response.data.body.albums); 
    } catch (error) {
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }

    return returnObject;
}

const getSubscription = async (email) => {
    const getSubs_URL = "https://mug8stxt6l.execute-api.us-east-1.amazonaws.com/default/Lambda-Subscription-Get";
    let returnObject = null;

    try {
        const response = await axios.post(getSubs_URL, {"email": email, "type": "get"});
        console.log(response.data.body)
        
        returnObject = response.data.body;
    } catch (error) {
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }
    return returnObject;
}

const createSubscription = async (email, title) => {
    const createSub_URL = "https://qpubxri67e.execute-api.us-east-1.amazonaws.com/developement/Lambda-Subscription-Create";
    let success = false;
    try {
        const response = await axios.post(createSub_URL, {"email": email, "title": title, type: "create"});
        console.log(response.data); 

        success = response.data.statusCode === 200;
    } catch (error) {
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }

    return success;
}

const deleteSubscription = async (email, title) => {
    const deleteSub_URL = "https://6z4qg8q8ii.execute-api.us-east-1.amazonaws.com/default/Lambda-Subscription-Delete";
    
    let success = false;
    try {
        const response = await axios.post(deleteSub_URL, {"email": email, "title": title, "type": "delete"});
        console.log(response.data); 

        success = response.data.statusCode === 200;
    } catch (error) {
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }

    return success;
}


export {
    verifyLogin,
    registerUser,
    searchAlbums,
    getSubscription,
    createSubscription,
    deleteSubscription
}