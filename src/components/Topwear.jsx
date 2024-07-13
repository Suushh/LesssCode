// src/components/Topwear.jsx
import React from 'react';
import ProductCard from './ProductCard';
import './Wears.css';
import tshirt from '../assets/tshirt.jpeg'
import shirt from '../assets/shirt.jpeg'
import jacket from '../assets/jacket.jpeg'
import hoodie from '../assets/hoodie.jpeg'
import Header from './Header';

const products = [
  {
    name: 'T-Shirt',
    price: '19.99',
    image: tshirt, // Replace with actual image URLs
  },
  {
    name: 'Shirt',
    price: '29.99',
    image: shirt, // Replace with actual image URLs
  },
  {
    name: 'Jacket',
    price: '49.99',
    image: jacket, // Replace with actual image URLs
  },
  {
    name: 'Hoodie',
    price: '39.99',
    image: hoodie, // Replace with actual image URLs
  },
];

const Topwear = () => {
  return (
    <div className='body'>
      <Header/>
      <h1>Topwear</h1>
      <div className="container">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Topwear;
