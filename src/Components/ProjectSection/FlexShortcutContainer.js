import React from 'react';

import '../../Styles/FlexShortcutContainer.css';

const FlexShortcutContainer = props => {
    return (
        <section id='shortcut-section' className={`${props.cName} vert`}>
            <h1 className='section-title'>{props.title}</h1>
            <section className='flex-shortcut-container'>
                {props.children}
            </section>
        </section>
    );
};

export default FlexShortcutContainer;