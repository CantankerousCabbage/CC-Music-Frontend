
//React
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Css
import '../styles/NavBar.css';

//Components
import HomeButton from "./HomeButton";

import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';


const NavBar = ( { user, setUser } ) => {
    const location = useLocation();
    
    return (
        
        <>
        <ContentBuffer/>
        <div className='Nav-Container'>
            <div className="Nav-Header">
                <h1> &#9835; Music Solutions <span className='flip-title-icon'>&#9835;</span></h1>
            </div>
            <div className="Nav-Button-Container">
                <HomeButton />

                {(location.pathname == "/") && (user.username === "") &&
                (<div className='Nav-Button-Right'>
                    <LoginButton />
                    <RegisterButton />
                </div>)}
                {user.username !== "" && (<LogoutButton />)}
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