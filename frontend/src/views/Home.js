import React, {useEffect, useState} from "react";
import axios from "axios"

//API's
import { getSubscription, createSubscription, deleteSubscription, searchAlbums } from "../api/APIs";

//Componenets
import UserPanel from "../components/UserPanel";
import SearchPanel from "../components/SearchPanel";
import AlbumPanel from "../components/AlbumPanel";

//CSS 
import '../styles/Home.css'
import '../styles/PanelsGeneric.css'

const Home = ( {user} ) => {

    const[subResults, setSubs] = useState([]);
    const[queryResults, setResults] = useState([]);
    const[queryMsg, setMsg] = useState("");

    //Get Initial subs
    useEffect( () => {

        const get = async (user) => {
            const subObject = await getSubscription(user.email);
            return subObject;
        }
        if(user.email){
            const subObject = get(user)

            const temp = [];
            for (const key in subObject) {
                temp.push(subObject[key]);
            } 
    
            setSubs(temp); 
        }
        

    }, [])

    const handleRemove = async (album) => {
        const success = await deleteSubscription(user.email, album.title);

        if(success){
            const temp = {...subResults}
            temp.splice(temp.indexOf(album.title), 1);
            setSubs(subResults);
        }
    }

    const handleSubscribe = async (album) => {
        const success = await createSubscription(user.email, album);

        if(success){
            const temp = {...subResults}
            temp.push(album);
            setSubs(subResults);
        }
    }

    //TODO add function to check sub and search results off against each other
    

    return (
        <>
        { (user.username !== "") &&
        (
        <div className="Home-Content-Container">
            <div className="Home-Col1-Container">
                <SearchPanel setResults={setResults} setMsg={setMsg}/>
                <QueryDisplay albumArray={queryResults} subResults={subResults} isSearch={true} subscribe={handleSubscribe} />
            </div>
            <div className="Home-Col2-Container">
                <UserPanel username={user.username}/>
                <SubDisplay albumArray={subResults} isSearch={false} remove={handleRemove} />
            </div>
        </div>
        )}
        { (user.username === "") &&
        (<div > User Not Logged In </div>)}
        </>
    )
}

const QueryDisplay = ( {albumArray, subResults, isSearch, subscribe}) => {

    const resultsMSG = (numResults) => {
        let message = (numResults === 0) ? "No result retrieved. Please query again." 
        : (numResults === 1) ? "Query returned 1 result" 
        : `Query return ${numResults} results`;
        return message;
    }

    return (
        
        <div className="Home-Panel">
            {(albumArray.length > 0) && 
            (<> <h3 className="Home-Panel-Title">{"Query Results"}</h3>
            <div className="Query-Msg-Container">{resultsMSG(albumArray.length)}</div>
            <div className="Results-Container">
                    {albumArray.map((album, key) => {
                       return( <AlbumPanel album={album} subbed={CheckArray(album.title, subResults)} isSearch={isSearch} onClick={subscribe}/>)
                    })}
            </div> </>)}

        </div>
        
    )
}

const CheckArray = ( {title, subArray} ) => {
    let success = false;

    for( let i = 0; i < subArray.length || success; i++){
        if(subArray[i] === title){
            success = true;
        }
    }

    return success;
}

const SubDisplay = ( {albumArray, isSearch, remove}) => {

    const resultsMSG = (numResults) => {
        let message = (numResults === 0) ? "Subscribed to 1 album." 
        : `Subscribed to ${numResults} albums`;
        return message;
    }

    return (
        <>
        {(albumArray.length !== 0) ?
        (<div className="Home-Panel">
            <h3 className="Home-Panel-Title">{"Subscribed Music"}</h3>
            <div className="Query-Msg-Container">{resultsMSG(albumArray.length)}</div>
            <div className="Results-Container">
                    {albumArray.map((album, key) => {
                       return( <AlbumPanel album={album} isSearch={isSearch} onClick={remove}/>)
                    })}
            </div>
        </div>)
        : (<SubPlaceholder />)}
        </>
    )
}

const SubPlaceholder = () => {
    return(
    <div className="Home-Sub-Placeholder">
        <p> No music currently subscribed.<br/>Query to find your favourite music!</p>
        
        <p> Build a list of tracks using the subscribe button.</p>
    </div>)
}

 

export default Home;