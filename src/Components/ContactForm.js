import React from 'react';

const ContactForm = props => {
    return (
        <form className='contact-form'>
            <h2>Reason for Contact</h2>
            <input type='radio' id='web-des' name='contact-rsn' value='web-des'/>
            <label for='web-des'>Web Design Contracting</label>
            <input type='radio' id='hiring' name='contact-rsn' value='hiring'/>
            <label for='web-des'>Job hiring</label>
            <input type='radio' id='other' name='contact-rsn' value='other'/>
            <label for='web-des'>Other</label>
        </form>
    );
};

export default ContactForm;