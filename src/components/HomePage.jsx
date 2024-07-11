// src/pages/HomePage.js
import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Categories from './Categories';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <Categories />
      <Footer />
    </div>
  );
};

export default HomePage;
