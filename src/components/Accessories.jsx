import React from 'react';
import Header from './Header';
import ring from "../assets/ring.jpeg"
import necklace from "../assets/necklace.jpeg"
import hairclip from "../assets/hairclip.jpeg"
import earings from "../assets/earings.jpeg"
import './Wears.css'
import ProductCard from './ProductCard';


const products = [
    {
      name: 'Necklace',
      price: '7.90',
      image: necklace, // Replace with actual image URLs
    },
    {
      name: 'Ring',
      price: '5.99',
      image: ring, // Replace with actual image URLs
    },
    {
      name: 'Hair Clip',
      price: '6.99',
      image: hairclip, // Replace with actual image URLs
    },
    {
        name: "Earings",
        price: "6.99",
        image: earings,
    }
    
  ];
  
  const Accessories = () => {
    return (
      <div className='body'>
        <Header/>
        <h1>Accessories</h1>
        <div className="container">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    );
  };

export default Accessories;