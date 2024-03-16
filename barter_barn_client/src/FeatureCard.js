import React, { useState, useEffect, useCallback, useContext } from 'react';
import Card from './Card'; // Import the Card component
import { ForumContext } from './context/ForumContext.js';

const FeaturedCard = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const { allGoods, allServices, allFrees, communities } = useContext(ForumContext);
  let randomItem;

  const handleRandomize = useCallback(() => {
    const allItems = [...allGoods, ...allServices, ...allFrees, ...communities];
    if (allItems.length > 0) {
      const newIndex = Math.floor(Math.random() * allItems.length);
      setRandomIndex(newIndex);
      setIsSaved(false);
    }
  }, [allGoods, allServices, allFrees, communities]);

  const handleSave = () => {
    if (randomItem) {
      setIsSaved(true);
      // Handle save logic
    }
  };

  useEffect(() => {
    handleRandomize();
  }, [handleRandomize, allGoods, allServices, allFrees, communities]);

  if (randomIndex !== null) {
    const allItems = [...allGoods, ...allServices, ...allFrees, ...communities];
    randomItem = allItems[randomIndex];
  }

  return (
    <div className='featurePage'>
      <div className="featured-card">
        {!isSaved && randomItem ? (
          <Card item={randomItem} handleSave={handleSave} />
        ) : null}
      </div>
    </div>
  );
};

export default FeaturedCard;
