// src/components/Categories.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Topwear', path: 'topwear' },
    { name: 'Bottomwear', path: 'bottomwear' },
    { name: 'Footwear', path: 'footwear' },
    { name: 'Accessories', path: 'accessories' },
  ];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div
          key={index}
          className="category"
          onClick={() => navigate(`/categories/${category.path}`)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;

