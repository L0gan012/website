import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import '../../Styles/Shortcut.css';

const Shortcut = props => {
    const [isShown, setIsShown] = useState(false);
    
    return (
        <Link to={props.path} className={props.round?`round-shortcut-link ${props.space}`:`${props.space}`}>
            <section id={props.title} className={`shortcut shortcut-${props.size} ${props.cName}`} style={{backgroundImage: `url(${props.img})`}} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                {isShown && (
                    <div className='shortcut-overlay vert'>
                        <h2>{props.title}</h2>
                        <summary>{props.caption}</summary>
                    </div>
                )}
            </section>
        </Link>
    );
};

export default Shortcut;