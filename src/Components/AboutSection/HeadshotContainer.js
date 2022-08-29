import React from 'react';

import '../../Styles/HeadshotContainer.css';

const HeadshotContainer = props => {
    return (
        <section className='headshot-container'>
            {props.img}
            <div className='bio vert'>
                {props.children}
            </div>
        </section>
    );
};

export default HeadshotContainer;