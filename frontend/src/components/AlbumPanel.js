import React from 'react';

//Componenets
import SubscribeButton from './SubscribeButton';
import RemoveButton from './RemoveButton';

//CSS
import '../styles/PanelsGeneric.css';
import '../styles/AlbumPanel.css'

const AlbumPanel = ( {album, subResults, isSearch, onClick} ) => {
    
        let success = false;
        if(isSearch){
            
            for(let i = 0; i < subResults.length; i++){
                if(album.song.title === subResults[i].song.title){
                    success = true;
                    break;
                }
            } 
        }
        
    return (
        <div className='Album-Panel-Container'>
            <div className='Album-Info-Container'>
                <div className='Album-Text-Container'>
                    <TextItem name={"Title:"} value={album.song.title} />
                    <TextItem name={"Year:"} value={album.song.year} />
                    <TextItem name={"Artist:"} value={album.song.artist} />
                </div>
                <div className='Album-Image-Container'>
                    <img className='album-Image' src={album.imgURL} alt={album.song.title} />
                </div>
            </div>
            <div className='Album-Panel-Button'>
                {(isSearch) ? (<SubscribeButton subbed={success} onClick={onClick} album={album}/>) :
                (<RemoveButton onClick={onClick} album={album}/>)}
            </div>  
        </div>
    );
}

const TextItem = ({name, value}) => {
    return (
        <div className='Album-Text-Entry'>{name} {value}</div>
    )
}

export default AlbumPanel;