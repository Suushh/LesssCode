// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Discussions from './components/Discussions';
import CreateDiscussion from './components/CreateDiscussion.jsx';
import HomeForum from './components/HomeForum.jsx';
import HomePage from './components/HomePage.jsx'; // Import the HomePage component
import './App.css';

const App = () => {
  const location = useLocation(); // Get the current location

  return (
    <div>
      {/* Conditionally render the Navbar based on the current path */}
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Set HomePage as the default route */}
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/create" element={<CreateDiscussion />} />
        <Route path="/homeforum" element={<HomeForum />} /> {/* Move HomeForum to a specific route if needed */}
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





