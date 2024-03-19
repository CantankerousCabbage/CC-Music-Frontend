
//CSS
import '../styles/buttons.css';

//React Components
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/Login");
    }

    return (
        <div className="Nav-Login" onClick={onClick}>
            Login &#9094;
        </div>
    )
}

export default LoginButton;