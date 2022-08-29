import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import '../../Styles/LongCard.css';

const LongCard = props => {
    const [isShown, setIsShown] = useState(false);

    return (
        <Link to={props.path} className='long-card-link'>
            <section className='long-card vert' style={{backgroundImage: `url(${props.img})`}} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                {isShown &&
                    <div className='long-card-overlay vert'>
                        <h1>{props.title}</h1>
                        <summary>{props.desc}</summary>
                    </div>
                }
            </section>
        </Link>
    );
}

export default LongCard;