import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './js-components/nav';
import Hero from './js-components/hero';
import Card from './js-components/card';

// importing props components 
import picture from '../src/assets/card-assets/image-12.png';

export default function App () {
  return (
    <div>
      <Nav />
      <Hero />
      <Card 
        img = {picture}
        status = "sold out"
        ratingnum = "5.0"
        ratingcount = {6}
        location = "USA"
        description = "Life lessons with Katie Zaferes"
        price = {136}
      />
    </div>
  )
}

        // img = ""
        // status = ""
        // rating-num = ""
        // rating-count = ""
        // location = ""
        // description = ""
        // price = ""