import React from "react";

//Componenets
import UserPanel from "../components/UserPanel";
import SearchPanel from "../components/SearchPanel";
import AlbumPanel from "../components/AlbumPanel";

//React
import { useState } from 'react';

const Home = ( {user} ) => {

    const[subDisplay, setSubs] = useState([]);
    const[searchDisplay, setResults] = useState([]);

    return (
        <>
        
        { (user.username !== "") &&
        (
        <div className="Home-Content-Container">
            <div className="Home-Col1-Container">
                <SearchPanel />
                <div className="Results-Container">
                    {searchDisplay.map((album, key) => {
                       return( <AlbumPanel album={album} subscription={true} />)
                    })}
                </div>
            </div>
            <div className="Home-Col2-Container">
                <UserPanel />
                <div className="Results-Container">
                    {subDisplay.map((album, key) => {
                       return( <AlbumPanel album={album} subscription={false}/>)
                    })}
                </div>
            </div>
        </div>
        )}
        { (user.username === "") &&
        (<div > User Not Logged In </div>)}
        </>
    )
}

export default Home;