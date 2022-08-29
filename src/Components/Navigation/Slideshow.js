import React, { useState, useEffect } from 'react';

import '../../Styles/Slideshow.css';

const colors = ['#0088FE', '#00C49F', '#FFBB28'];
const delay = 2500;

const Slideshow = props => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => setIndex(prevIndex => prevIndex === colors.length - 1 ? 0 : prevIndex + 1), delay);
        return () => {};
    }, [index]);

    return (
        <div className='slideshow'>
            <div className='slideshow-slider' style={{transorm: `translate3d(${-index*100}%, 0, 0)`}}>
                {colors.map((color, index) => (
                <div
                    className='slide'
                    key={index}
                    style={{backgroundColor: color}}
                />
                ))}
            </div>
            <div className='slideshow-dots'>
                {colors.map((color, index) => (
                    <div key={index} className='slideshow-dot'/>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;