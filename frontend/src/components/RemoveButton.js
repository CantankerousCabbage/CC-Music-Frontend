
//CSS
import '../styles/buttons.css';

const RemoveButton = ({onClick, album}) => {

    return (

        <button className="Sub-Buttons Sub-Remove" onClick={() => onClick(album)} type='button'>
            Remove<div className='button-Space'>&#8722;</div> 
        </button>
        
    )
}

export default RemoveButton;