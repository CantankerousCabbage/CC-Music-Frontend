import React from 'react';

//Componenets
import SubscribeButton from './SubscribeButton';
import RemoveButton from './RemoveButton';

//CSS
import '../styles/PanelsGeneric.css';

const AlbumPanel = ( {album, isSearch, onClick} ) => {
    return (
        <div className='Album-Panel-Container'>
            <div className='Album-Info-Container'>
                <div className='Album-Text-Container'>
                    <TextItem name={"Title:"} value={album.title} />
                    <TextItem name={"Year:"} value={album.year} />
                    <TextItem name={"Artist:"} value={album.artist} />
                </div>
                <div className='Album-Image-Container'>

                </div>
            </div>
            <div className='Album-Panel-Button'>
                {(isSearch) ? (<SubscribeButton onClick={onClick}/>) :
                (<RemoveButton onClick={onClick}/>)}
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