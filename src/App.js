import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './js-components/nav';
import Hero from './js-components/hero';
import Card from './js-components/card';

export default function App () {
  return (
    <div>
      <Nav />
      <Hero />
      <Card />
    </div>
  )
}