import React from 'react';
import Header from './Header';
import "./Wears.css"
import ProductCard from './ProductCard';
import trouser from "../assets/trouser.jpeg"
import jeans from "../assets/jeans.jpeg"
import skirt from "../assets/skirt.jpeg"


const products = [
    {
      name: 'Trousers',
      price: '29.90',
      image: trouser, // Replace with actual image URLs
    },
    {
      name: 'Skirt',
      price: '9.99',
      image: skirt, // Replace with actual image URLs
    },
    {
      name: 'Jeans',
      price: '39.99',
      image: jeans, // Replace with actual image URLs
    },
    
  ];
  
  const Bottomwear = () => {
    return (
      <div className='body'>
        <Header/>
        <h1>Bottomwear</h1>
        <div className="container">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    );
  };

export default Bottomwear;