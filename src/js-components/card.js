import React from 'react';
import {ReactComponent as Star} from '../assets/card-assets/Star-1.svg';

export default function Card (props) {
    return (
        <div className='card-container'>
            <div className='card'>
                <img src={props.img} className='profile-img' alt='profile image' />
                <div className='status'><p className='status-text'>{props.status}</p></div>

                <div className='rating-and-location'>
                    <Star />
                    <p className='rating-num'>{props.ratingnum}</p>
                    <p className='rating-count'>({props.ratingcount})</p>
                    <p className='location'>&#8226; {props.location}</p>
                </div>

                <div className='card-text'>
                    <p className='description'>{props.description}</p>
                    <p className='pricing'>From $<span className='price-per-person'>{props.price}</span> <span className='span-2'>/ person</span></p>
                </div>

            </div>
        </div>
    )
}