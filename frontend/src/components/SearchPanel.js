
import React, {useState} from 'react';
//Components
import SubmitButton from './SubmitButton';
import Error from './Error';

//Functions

import { searchAlbums } from '../api/APIs';

//CSS
import '../styles/PanelsGeneric.css';
import '../styles/SearchPanel.css';

const SearchPanel = ( {setResults} ) => {

    //States for governing form input and user feedback
    const[fields, setFields] = useState({title:"", year:"", artist:""});
    const[error, setError] = useState("");

    const updateFields = (event) => {
        const temp = {...fields};
        temp[event.target.name] = event.target.value;
        setFields(temp);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        //TODO test
        if(validateSearch(fields, setError)){

            const albumArray = await searchAlbums(fields);

            if("title" in albumArray){
                const temp = [];
                for (const key in albumArray) {
                    temp.push(albumArray[key]);
                } 
                setResults(albumArray);
            }
           
        }
    }

    return (
        <div className='Home-Panel Home-Search-Container HS-Colour'>
            <h2 className='Home-Panel-Title'>Query Music</h2>
            <form onSubmit={handleSubmit}>
                <div className='Home-Search-Field'>
                    <label id="title">Title:</label>
                    <input type="text" id="title" name="title" value={fields.title} 
                    onChange={updateFields} />
                </div>
                <div className='Home-Search-Field'>
                    <label id="year">Year:</label>
                    <input type="text" id="year" name="year" value={fields.year} 
                    onChange={updateFields}/>
                </div>
                <div className='Home-Search-Field'>
                    <label id="artist">Artist:</label>
                    <input type="text" id="artist" name="artist" value={fields.artist} 
                    onChange={updateFields}/>
                </div>
                <div className='Home-search-msgs'>
                    { (error !== "") && Error(error)}
                </div>
                
                <div className='Home-submitButton-container'>
                    <SubmitButton buttonText={"Query"}/>
                </div>
            </form>
            
        </div>
    );
}

function validateSearch(fields , setError){
    let valid = false;

    if(fields.title !== "" || fields.year !== "" || fields.artist !== "") {
        setError("");  
        valid = true;  
    } else {
        setError("Minimum of one field required for query");
    }

    return valid;
}

export default SearchPanel;