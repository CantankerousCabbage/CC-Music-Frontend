import React from "react";
//React
import { useNavigate } from "react-router-dom";

//CSS
import "../styles/forms.css";

const SubmitButton = ( { buttonText } ) => {

    // const onClick = () => {
    //     execute();
    // }

    return (
        <button className="form-button" type="submit">
            { buttonText }
        </button>
    )
}

export default SubmitButton;