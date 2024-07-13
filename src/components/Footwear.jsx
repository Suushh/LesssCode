import React from 'react';
import Header from './Header';
import slipper from "../assets/slipper.jpeg"
import shoes from "../assets/shoes.jpeg"
import sandal from "../assets/sandal.jpeg"
import boots from "../assets/boots.jpeg"
import './Wears.css'
import ProductCard from './ProductCard';


const products = [
    {
      name: 'Slippers',
      price: '7.90',
      image: slipper, // Replace with actual image URLs
    },
    {
      name: 'Shoes',
      price: '25.99',
      image: shoes, // Replace with actual image URLs
    },
    {
      name: 'Boots',
      price: '39.99',
      image: boots, // Replace with actual image URLs
    },
    {
        name: "Sandals",
        price: "10.99",
        image: sandal,
    }
    
  ];
  
  const Footwear = () => {
    return (
      <div className='body'>
        <Header/>
        <h1>Footwear</h1>
        <div className="container">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    );
  };

export default Footwear;