import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext.js';
import { ForumContext } from '../context/ForumContext.js';
import { useParams } from 'react-router-dom';
// import CommentForm from '../CommentForm.js';

const GoodPage = ({ good }) => {
  // const { user, setUser } = useContext(UserContext);
  const { allGoods } = useContext(ForumContext);

  const { id } = useParams();
  const selectedGood = allGoods.find((good) => good.id === parseInt(id));
<<<<<<< HEAD
  // const [showMessageForm, setShowMessageForm] = useState(false);
=======
  const [showCommentForm, setShowCommentForm] = useState(false);
>>>>>>> parent of 390f71d (render deploying front and backend)

  if (!selectedGood) {
    return <div>Loading...</div>;
  }

<<<<<<< HEAD
  // const handleContact =() => {
  //       setShowMessageForm(true);
  // }

  // const handleSend =() => {
  //   setShowMessageForm(false)
  // }
=======
  const handleContact =() => {
        setShowCommentForm(true);
  }
>>>>>>> parent of 390f71d (render deploying front and backend)

  return (
    <div className="full-height-page">
      <div className="full-width-page">
        <h1 className="pageTitle">{selectedGood.name}</h1>
        <p className="pageDescription">Description: {selectedGood.description}</p>
        <img className='thumbImg' src={selectedGood.image} alt="Free Stuff" />
<<<<<<< HEAD
        {/* <button className="crudButton saveButton" onClick={handleContact}>REPLY</button>  */}
=======
        <button className="crudButton saveButton" onClick={handleContact}>REPLY</button> 
        {showCommentForm && <Chat />}
>>>>>>> parent of 390f71d (render deploying front and backend)
      </div>
    </div>  
  );
};

export default GoodPage;
