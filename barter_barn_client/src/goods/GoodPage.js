import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext.js';
import { ForumContext } from '../context/ForumContext.js';
import { useParams } from 'react-router-dom';

const GoodPage = ({ good }) => {
  const { user, setUser } = useContext(UserContext);
  const { allGoods } = useContext(ForumContext);

  const { id } = useParams();
  const selectedGood = allGoods.find((good) => good.id === parseInt(id));

  if (!selectedGood) {
    return <div>Loading...</div>; // You can customize the loading state or handle errors
  }

  return (
    <div className="full-height-page">
      <div className="full-width-page">
        <h1 className="pageTitle">{selectedGood.name}</h1>
        <p className="pageDescription">Description: {selectedGood.description}</p>
        <button className="crudButton saveButton">SAVE</button>
        <button className="crudButton saveButton">CLAIM</button>
      </div>
    </div>  
  );
};

export default GoodPage;
