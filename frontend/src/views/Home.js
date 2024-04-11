import React, {useEffect, useState} from "react";
import axios from "axios"

//Image
import  image from '../styles/title.png';
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
    const[searched, setSearched] = useState(false);
    const[queryMsg, setMsg] = useState("");

    //Get Initial subs
    useEffect( () => {
        
        const fetchData = async () => {
            if(user.email){
                try {
                    const subObject = await getSubscription(user.email);
                    
                    setSubs(subObject);
                } catch (error) {
                    console.error("Error fetching subscription:", error);
                }
            }
        }
        
       fetchData();
    }, [])

    const handleRemove = async (album) => {
        const success = await deleteSubscription(user.email, album.song.title);
    
        if (success) {
            const index = subResults.findIndex((item) => item.song.title === album.song.title);
            if (index !== -1) {
                const temp = [...subResults];
                temp.splice(index, 1);
                setSubs(temp);
            }
        }
    }

    const handleSubscribe = async (album) => {
        const success = await createSubscription(user.email, album.song.title);

        
        if(success){
            const temp = [...subResults];
            temp.push(album);
            
            setSubs(temp);
        }
    }
    

    return (
        <>
        { (user.username !== "") &&
        (
        <div className="Home-Content-Container">
            <div className="Home-Col1-Container">
                <SearchPanel setResults={setResults} setSearched={setSearched} setMsg={setMsg}/>
                <QueryDisplay albumArray={queryResults} searched={searched} subResults={subResults} 
                isSearch={true} subscribe={handleSubscribe} queryMsg={queryMsg} />
            </div>
            <div className="Home-Col2-Container">
                <UserPanel username={user.username}/>
                <SubDisplay albumArray={subResults} isSearch={false} remove={handleRemove} />
            </div>
        </div>
        )}
        { (user.username === "") &&
        (<MainPlaceholder />)}
        </>
    )
}

const QueryDisplay = ( {albumArray, searched, subResults, isSearch, subscribe}) => {

    const resultsMSG = (numResults) => {
        let message = (numResults === 0) ? "No result retrieved. Please query again." 
        : (numResults === 1) ? "Query returned 1 result" 
        : `Query returned ${numResults} results`;
        return message;
    }

    const numSongs = albumArray.length;
    
    return (
        
        <div className="Home-Panel">
            {(searched) && 
            (<> <h3 className="Home-Panel-Title">{"Query Results"}</h3>
            <div className="Query-Msg-Container">{resultsMSG(numSongs)}</div>
            <div className="Results-Container">
                    {albumArray.map((album, key) => {
                        return( <AlbumPanel key={key} album={album} subResults={subResults} isSearch={isSearch} onClick={subscribe}/>)
                    })}
            </div> </>)}

        </div>
        
    )
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

const MainPlaceholder = () => {
    return(
        <div className="Home-MAIN-Placeholder">
            <img className="Home-Image" src={image} />
        </div>) 
}
const SubPlaceholder = () => {
    return(
    <div className="Home-Sub-Placeholder">
        <p> No music currently subscribed.<br/>Query to find your favourite music!</p>
        
        <p> Build a list of tracks using the subscribe button.</p>
    </div>)
}

 

export default Home;