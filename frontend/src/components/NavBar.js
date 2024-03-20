
//Css
import '../styles/NavBar.css';

//Components
import HomeButton from "./HomeButton";

import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

const NavBar = () => {
    return (
        
        <>
        <ContentBuffer/>
        <div className='Nav-Container'>
            <div className="Nav-Header">
                <h1>Music Solutions</h1>
            </div>
            <div className="Nav-Button-Container">
                <HomeButton />

                <div className='Nav-Button-Right'>
                    <LoginButton />
                    <RegisterButton />
                </div>
            </div>
        </div>
        </>
        
    )
}

const ContentBuffer = () => {
    return (
        <div className='Content-Buffer'>
        </div>
    )
}

export default NavBar;