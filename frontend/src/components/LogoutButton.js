//CSS
import '../styles/buttons.css';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

//React
import { useNavigate } from 'react-router-dom';

const LogoutButton = ( {setUser} ) => {
    
    const navigate = useNavigate();

    const onClick = () => {
        setUser({ username: "", email: ""});
        navigate("/Login");
    }

    return (
        <div className="Nav-Login" onClick={onClick}>
            <span className='text-icon-divide'>Logout</span> <FontAwesomeIcon icon={faArrowRightFromBracket} className='Font-Aws'/>
        </div>
    )
}

export default LogoutButton;