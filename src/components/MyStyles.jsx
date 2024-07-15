// src/components/MyStyles.jsx
import React, { useEffect, useState } from 'react';

const MyStyles = () => {
  // Example state for styles and upvotes
  const [styles, setStyles] = useState([]);
  const [totalUpvotes, setTotalUpvotes] = useState(0);

  useEffect(() => {
    // Example: Fetch styles and total upvotes from backend
    // Replace with actual API call or state management logic
    const fetchStyles = async () => {
      // Example API call to fetch styles
      const stylesData = await fetch('/api/mystyles'); // Adjust URL as per your backend setup
      const stylesJson = await stylesData.json();
      setStyles(stylesJson.styles); // Assuming styles is an array of style objects
      setTotalUpvotes(stylesJson.totalUpvotes); // Assuming totalUpvotes is a number
    };

    fetchStyles();
  }, []);

  return (
    <div>
      <h2>My Styles</h2>
      <div>
        {styles.map((style, index) => (
          <div key={index} className="style-item">
            <img src={style.imageUrl} alt={`Style ${index}`} />
            <p>Upvotes: {style.upvotes}</p> {/* Assuming each style object has an upvotes field */}
          </div>
        ))}
      </div>
      <p>Total Upvotes: {totalUpvotes}</p>
    </div>
  );
};

export default MyStyles;
