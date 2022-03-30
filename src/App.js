import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './js-components/nav';
import Hero from './js-components/hero';
import Card from './js-components/card';
import users from './js-components/data';

import { Axios } from 'axios';

// importing props components 

export default function App () {
const userDetails = users.map(user => {
  return (<Card 
          key = {user.id}
          user = {user}
       />
  )

})

  return (
    <div>
      <Nav />
      <Hero />
      {userDetails}
    </div>
  )
}

    