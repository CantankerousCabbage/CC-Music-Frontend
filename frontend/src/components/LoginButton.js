
//CSS
import '../styles/buttons.css';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

//React Components
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/Login");
    }

    return (
        <div className="Nav-Login" onClick={onClick}>
            <span className='text-icon-divide'>Login</span> <FontAwesomeIcon icon={faArrowRightToBracket} className='Font-Aws'/>
        </div>
    )
}

export default LoginButton;