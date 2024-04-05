//CSS
import '../styles/buttons.css';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const LogoutButton = () => {
    

    const onClick = () => {
        
    }

    return (
        <div className="Nav-Login" onClick={onClick}>
            <span className='text-icon-divide'>Logout</span> <FontAwesomeIcon icon={faArrowRightFromBracket} className='Font-Aws'/>
        </div>
    )
}

export default LogoutButton;