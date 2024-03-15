import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext.js';
import { ForumContext } from '../context/ForumContext.js';
import { useParams } from 'react-router-dom';
// import CommentForm from '../CommentForm.js';

const GoodPage = ({ good }) => {
  const { user, setUser } = useContext(UserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [errors, setErrors] = useState([]);
  const { allGoods } = useContext(ForumContext);

  console.log(user)
  const { id } = useParams();

  // if (!good || !good.title) {
  //   return <div>Loading...</div>;
  // }

  const selectedGood = allGoods.find((good) => good.id === parseInt(id));

  // const [showCommentForm, setShowCommentForm] = useState(false);

  if (!selectedGood) {
    return <div>Loading...</div>;
  }

  // const handleContact =() => {
  //       setShowMessageForm(true);
  // }

  // const handleSend =() => {
  //   setShowMessageForm(false)
  // }

  const handleSaveGood = () => {
    if (user.goods && user.goods.some(savedItem => savedItem.id === good.id)) {
      setErrors(['You have already saved this item.']);
      return;
    }
    if (good.user_id === user.id) {
      setErrors(['You cannot save an item you created.']);
      return;
    }

    if (good.user_id === user.id) {

      return;
    }
    
    // const saveResult = handleSaveGoodToUserProfile(good);
    // if (saveResult.success) {
    //   setIsSaved(true);
    //   setErrors([]);
    // } else {
    //   setErrors([saveResult.message]);
    // }
  };

  return (
    <div className="full-height-page">
      <div className="full-width-page">
        <h1 className="pageTitle">{selectedGood.name}</h1>
        <p className="pageDescription">Description: {selectedGood.description}</p>
        <img className='thumbImg' src={selectedGood.image} alt="Good" />
        {/* <button className="crudButton saveButton" onClick={handleContact}>REPLY</button>  */}
        <button type='submit' className="btn btn-primary" >SAVE</button>
        {/* {showCommentForm && <Chat />} */}

        {/* {showCommentForm && <CommentForm />} */}
      </div>
    </div>  
  );
};

export default GoodPage;
