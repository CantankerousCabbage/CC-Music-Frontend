import React from 'react';

//CSS
import '../styles/forms.css';

const Error = ( errorMsg ) => {
    
    return (
        <div className='Form-Error'>
            {errorMsg}
        </div>
    )
}

export default Error;