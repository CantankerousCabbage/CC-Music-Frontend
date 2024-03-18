//CSS
import '../styles/buttons.css';


//React Components
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/")
    }

    return (
        <div className="Button-Home" onClick={onClick}>
           &#127926; Home
        </div>
    )
}

export default HomeButton;