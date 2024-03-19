
//Css
import '../styles/NavBar.css';

//Components
import HomeButton from "./HomeButton";

import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

const NavBar = () => {
    return (
        <div className='Nav-Container'>
            <div className="Nav-Header">
                Music Solutions
            </div>
            <div className="Nav-Button-Container">
                <HomeButton />

                <div className='Nav-Button-Right'>
                    <LoginButton />
                    <RegisterButton />
                </div>
            </div>
        </div>
    )
}

export default NavBar;