
import axios from "axios";



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

const verifyLogin = async (fields) => {
    const verifyLogin_URL = "https://e1jerl0ws3.execute-api.us-east-1.amazonaws.com/developement/Lambda-Login-Check";
    
    try {
        const response = await axios.post(verifyLogin_URL, {"email": fields.email, "password": fields.password, "type": "get"});
        console.log(response.data); 
    } catch (error) {
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }
}

const registerUser = async (newUser) => {
    const registerUser_URL = "https://2mv97phs7d.execute-api.us-east-1.amazonaws.com/developement/CRUD-Login-Register";
    
    try {
        const response = await axios.post(registerUser_URL, {"email": newUser.email, "username": newUser.username, "password": newUser.password,  "type": "create"});
        console.log(response.data); 
    } catch (error) {
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }
}

const searchAlbums = async (fields) => {
    const searchAlbums_URL = "https://xk5cprsn1c.execute-api.us-east-1.amazonaws.com/default/Lambda-Album-Search";
    
    try {
        const response = await axios.post(searchAlbums_URL, {"title": fields.email, "year": fields.year, "artist": fields.artist,  "type": "search"});
        console.log(response.data); 
    } catch (error) {
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }
}

const getSubscription = async (email) => {
    const getSubs_URL = "https://mug8stxt6l.execute-api.us-east-1.amazonaws.com/default/Lambda-Subscription-Get";
    
    try {
        const response = await axios.post(getSubs_URL, {"email": email, "type": "get"});
        console.log(response.data); 
    } catch (error) {
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }
}

const createSubscription = async (email, title) => {
    const createSub_URL = "https://qpubxri67e.execute-api.us-east-1.amazonaws.com/developement/Lambda-Subscription-Create";
    
    try {
        const response = await axios.post(createSub_URL, {"email": email, "title": title, type: "create"});
        console.log(response.data); 
    } catch (error) {
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }
}

const deleteSubscription = async (email, title) => {
    const deleteSub_URL = "https://6z4qg8q8ii.execute-api.us-east-1.amazonaws.com/default/Lambda-Subscription-Delete";
    
    try {
        const response = await axios.post(deleteSub_URL, {"email": email, "title": title, "type": "delete"});
        console.log(response.data); 
    } catch (error) {
        console.error("Error occurred:", error.message);
        console.error("Response data:", error.response.data);
    }
}


export {
    verifyLogin,
    registerUser,
    searchAlbums,
    getSubscription,
    createSubscription,
    deleteSubscription
}