//React
import { useNavigate } from "react-router-dom";

//CSS
import "../styles/forms.css";

const CancelButton = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/");
    }

    return (
        <button className="form-button" onClick={onClick}>
            Cancel
        </button>
    )
}

export default CancelButton;