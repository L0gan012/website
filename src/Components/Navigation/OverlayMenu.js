import React from 'react';
import {NavLink} from 'react-router-dom';

import menuItems from '../Lists/MenuItems';

import '../../Styles/OverlayMenu.css';

const OverlayMenu = props => {
    return (
        <div id='overlayMenu' className='overlay'>
            <i title='Close' className='fas fa-times menu-btn' onClick={props.onClick}></i>
            <div className='overlay-content'>
                {menuItems.map((item, k) => <NavLink key={k} to={item.path} className={item.classes} activeClassName='active' onClick={props.onClick}>{item.title}</NavLink>)}
            </div>
        </div>
    );
};

export default OverlayMenu;