
//Css
import '../styles/NavBar.css';

//Components
import HomeButton from "./HomeButton";

const NavBar = () => {
    return (
        <>
        <div className="Nav-Header">
            Header
        </div>
        <div className="">
            <HomeButton />
        </div>
        </>
    )
}

export default NavBar;