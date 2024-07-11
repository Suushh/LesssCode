// src/components/Categories.js
import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    'Topwear',
    'Bottomwear',
    'Footwear',
    'Accessories'
    
  ];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
