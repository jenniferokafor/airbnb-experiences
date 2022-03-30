import React from 'react';
import {ReactComponent as Star} from '../assets/card-assets/Star-1.svg';

export default function Card (props) {
    let badgeText;
    if (props.user.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.user.location === 'Online') {
        badgeText = "ONLINE";
    }



    return (
        <div className='card-container'>
            <div className='card'>
                <img src  = {props.user.coverImg} className='profile-img' alt='profile image' />
                {badgeText && <div className='status'><p className='status-text'>{badgeText}</p></div>}

                <div className='rating-and-location'>
                    <Star />
                    <p className='rating-num'>{props.user.stats.rating}</p>
                    <p className='rating-count'>({props.user.stats.reviewCount})</p>
                    <p className='location'>&#8226; {props.user.location}</p>
                </div>

                <div className='card-text'>
                    <p className='description'>{props.user.title}</p>
                    <p className='pricing'>From $<span className='price-per-person'>{props.user.price}</span> <span className='span-2'>/ person</span></p>
                </div>

            </div>
        </div>
    )
}