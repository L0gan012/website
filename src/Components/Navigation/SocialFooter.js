import React from 'react';
import socials from '../Lists/SocialList';

import '../../Styles/SocialFooter.css';

const SocialFooter = () => {
    return (
        <section className='solid footer'>
            {socials.map((socialLink, k) => <a key={k} href={socialLink.url} className='social-link'><i id={socialLink.title} className={socialLink.cName}></i></a>)}
        </section>
    );
};

export default SocialFooter;