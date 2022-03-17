import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as AirbnbLogo } from '../assets/airbnb-logo.svg';

export default function Nav () {
    return (
        <nav className='nav'>
            <AirbnbLogo className='logo'/>
        </nav>
    )
}