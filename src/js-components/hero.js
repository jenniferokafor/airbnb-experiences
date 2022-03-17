import React from 'react';
import grid from '../../src/assets/photo-grid.png';

export default function Hero () {
    return (
    <div className='hero'>
        <img src={grid} alt="photo grid" className='grid-image' />
        <div className='hero-text'>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </div>

    )
}