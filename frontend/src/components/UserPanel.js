
//CSS
import '../styles/PanelsGeneric.css';

const UserPanel = ( {username} ) => {
    return(
        <div className='User-Panel'>
            <div className='User-Smiley'>&#9787; </div> 
            {username}
            </div>
    );
}

export default UserPanel;