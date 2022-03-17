import React from 'react';
import img from '../../src/assets/card-assets/image-12.png';
import {ReactComponent as Star} from '../assets/card-assets/Star-1.svg';

export default function Card () {
    return (
        <div className='card-container'>
            <div className='card'>
            <img src={img} className='profile-img' alt='profile image' />
            <div className='status'><p className='status-text'>sold out</p></div>

            <div className='rating-and-location'>
                <Star />
                <p className='rating-num'>5.0</p>
                <p className='rating-count'>(6)</p>
                <p className='location'>&#8226; USA</p>
            </div>

            <div className='card-text'>
                <p className='description'>Life lessons with Katie Zaferes</p>
                <p className='pricing'>From <span className='price-per-person'>$136</span> <span className='span-2'>/ person</span></p>
            </div>

            </div>
        </div>
    )
}