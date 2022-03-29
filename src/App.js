import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './js-components/nav';
import Hero from './js-components/hero';
import Card from './js-components/card';
import users from './js-components/data';

import { Axios } from 'axios';

// importing props components 
import picture from '../src/assets/card-assets/image-12.png';
import { upload } from '@testing-library/user-event/dist/upload';

export default function App () {
const userDetails = users.map(user => {
  return <Card 
          img = {user.coverImg}
          status = {user.openSpots}
          ratingNum = {user.stats.rating}
          ratingCount = {user.stats.reviewCount}
          location = {user.location}
          title = {user.title}
          price = {user.price}
       />

})

  return (
    <div>
      <Nav />
      <Hero />
      {userDetails}
    </div>
  )
}

    