
//CSS
import '../styles/buttons.css';

const SubscribeButton = ({ subbed }) => {
    

    const onClick = () => {
        
    }

    return (
        <>
            {subbed ? 
            <div className="" onClick={onClick}>
                &#43; Subscribe 
            </div>
            :
            <div className="" >
            Subscribed &#10004; 
            </div>
         }
        
        
        </>
        
    )
}

export default SubscribeButton;