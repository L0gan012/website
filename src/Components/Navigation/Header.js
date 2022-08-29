import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import OverlayMenu from './OverlayMenu';

import '../../Styles/Header.css';

const Header = props => {
    const [menuState, setMenuState] = useState(false);

    const handleMenuClick = () => {
        if(menuState){
            document.getElementById('overlayMenu').style.height = "0%";
        }else{
            document.getElementById('overlayMenu').style.height = "100%";
        }
        setMenuState(!menuState)
    };

    return (
        <header>
            <Link to='/' className='link'>
                <h1 className='home-logo shadow'>{props.title}</h1>
            </Link>
            <nav>
                <i title='Menu' className='fas fa-bars menu-btn shadow' onClick={handleMenuClick}></i>
                <OverlayMenu onClick={handleMenuClick}/>
            </nav>
        </header>
    )
};

export default Header;
