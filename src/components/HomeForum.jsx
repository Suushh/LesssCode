// src/components/Home.jsx
import React from 'react';
import "./HomeForum.css"
import Navbar from './Navbar';
const HomeForum = () => {
  return (
    <div>
    <Navbar/>
    <div className='intro'>
      
        <h2> Congratulations!</h2>
      <h1>Welcome to the Discussion Forum  </h1>
      <p>Discover, discuss, and define your style.</p>
    </div>
    </div>
  );
};

export default HomeForum;
