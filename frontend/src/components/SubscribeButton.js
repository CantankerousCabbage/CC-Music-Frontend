
//CSS
import '../styles/buttons.css';

const SubscribeButton = ({ subbed, onClick, album }) => {

    return (
        <>
            {(!subbed) ? 
            <button className="Sub-Buttons Sub-Add" onClick={() => onClick(album)} type='button'>
                Subscribe<div className='button-Space'>&#43;</div>  
            </button>
            :
            <div className="Sub-Buttons Sub-Noclick" >
            Subscribed <div className='button-Space'>&#10004;</div>
            </div>
         }
        
        
        </>
        
    )
}

export default SubscribeButton;