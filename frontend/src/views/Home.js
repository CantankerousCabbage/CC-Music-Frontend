import React from "react";

//Componenets
import UserPanel from "../components/UserPanel";
import SearchPanel from "../components/SearchPanel";
import AlbumPanel from "../components/AlbumPanel";

//React
import { useState } from 'react';

//CSS 
import '../styles/Home.css'
import '../styles/PanelsGeneric.css'

const Home = ( {user} ) => {

    const[subResults, setSubs] = useState([]);
    const[queryResults, setResults] = useState([]);

    const[queryMsg, setMsg] = useState("");

    

    return (
        <>
        { (user.username !== "") &&
        (
        <div className="Home-Content-Container">
            <div className="Home-Col1-Container">
                <SearchPanel setResults={setResults} setMsg={setMsg}/>
                <QueryDisplay albumArray={queryResults} isSearch={true}/>
            </div>
            <div className="Home-Col2-Container">
                <UserPanel username={user.username}/>
                <SubDisplay albumArray={subResults} isSearch={false}/>
            </div>
        </div>
        )}
        { (user.username === "") &&
        (<div > User Not Logged In </div>)}
        </>
    )
}

const QueryDisplay = ( {albumArray, isSearch}) => {

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
                       return( <AlbumPanel album={album} isSearch={isSearch} />)
                    })}
            </div> </>)}

        </div>
        
    )
}

const SubDisplay = ( {albumArray, isSearch}) => {

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
                       return( <AlbumPanel album={album} isSearch={isSearch} />)
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