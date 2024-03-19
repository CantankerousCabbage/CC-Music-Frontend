
//React Components
import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/Register");
    }
    return (
        <div className="Nav-Register" onClick={onClick}>
            Register
        </div>
    )
}

export default RegisterButton;