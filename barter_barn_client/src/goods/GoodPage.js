import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext.js';
import { ForumContext } from '../context/ForumContext.js';
import { useParams } from 'react-router-dom';
// import CommentForm from '../CommentForm.js';
import Chat from '../messaging/Chat.js';

const GoodPage = ({ good }) => {
  const { user, setUser } = useContext(UserContext);
  const { allGoods } = useContext(ForumContext);

  const { id } = useParams();
  const selectedGood = allGoods.find((good) => good.id === parseInt(id));
  const [showCommentForm, setShowCommentForm] = useState(false);

  if (!selectedGood) {
    return <div>Loading...</div>;
  }

  const handleContact =() => {
        setShowCommentForm(true);
  }

  return (
    <div className="full-height-page">
      <div className="full-width-page">
        <h1 className="pageTitle">{selectedGood.name}</h1>
        <p className="pageDescription">Description: {selectedGood.description}</p>
        <img className='thumbImg' src={selectedGood.image} alt="Free Stuff" />
        <button className="crudButton saveButton" onClick={handleContact}>REPLY</button> 
        {showCommentForm && <Chat />}
      </div>
    </div>  
  );
};

export default GoodPage;
