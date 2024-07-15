// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Discussions from './components/Discussions';
import CreateDiscussion from './components/CreateDiscussion';
import HomeForum from './components/HomeForum';
import HomePage from './components/HomePage';
import Categories from './components/Categories';
import Topwear from './components/Topwear';
import Bottomwear from './components/Bottomwear';
import Footwear from './components/Footwear';
import Accessories from './components/Accessories';
import MyStyles from './components/MyStyles'; // Import MyStyles component
import './App.css';

const App = () => {
  const location = useLocation();
  const showNavbar = ['/homeforum', '/create', '/discussions'].includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/create" element={<CreateDiscussion />} />
        <Route path="/homeforum" element={<HomeForum />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/topwear" element={<Topwear />} />
        <Route path="/categories/bottomwear" element={<Bottomwear />} />
        <Route path="/categories/footwear" element={<Footwear />} />
        <Route path="/categories/accessories" element={<Accessories />} />
        <Route path="/mystyles" element={<MyStyles />} /> {/* Route for MyStyles */}
      </Routes>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;







