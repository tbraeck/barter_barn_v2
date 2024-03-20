import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext.js';
import { ForumContext } from '../context/ForumContext.js';
import { useParams } from 'react-router-dom';
// import CommentForm from '../CommentForm.js';

const GoodPage = ({ good }) => {
  const { user, setUser } = useContext(UserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [errors, setErrors] = useState([]);
  const { allGoods, setAllGoods } = useContext(ForumContext);

  // console.log(user)
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
console.log(user)
const handleSaveGood = () => {
  if (user.goods && user.goods.some(savedItem => savedItem.id === selectedGood.id)) {
    setErrors(['You have already saved this item.']);
    return;
  }

  if (selectedGood.user_id === user.id) {
    setErrors(['You cannot save an item you created.']);
    return;
  }

  // Update the allGoods state with the new saved good
  const updatedAllGoods = allGoods.map((item) => {
    if (item.id === selectedGood.id) {
      return { ...item, saved: true }; // You may want to add a 'saved' property to distinguish saved goods
    }
    return item;
  });
  setAllGoods(updatedAllGoods);

  // Optionally, you can also update the user's saved goods here
  const updatedUser = { ...user, goods: [...user.goods, selectedGood] };
  setUser(updatedUser);

  // Set isSaved to true or perform any other actions after saving
  setIsSaved(true);
};

  return (
    <div className="full-height-page">
      <div className="full-width-page">
        <h1 className="pageTitle">{selectedGood.name}</h1>
        <p className="pageDescription">Description: {selectedGood.description}</p>
        <img className='thumbImg' src={selectedGood.image} alt="Good" />
        {/* <button className="crudButton saveButton" onClick={handleContact}>REPLY</button>  */}
        <button type='submit' className="btn btn-primary" onClick={() => handleSaveGood()}>SAVE</button>
        {/* {showCommentForm && <Chat />} */}

        {/* {showCommentForm && <CommentForm />} */}
      </div>
    </div>  
  );
};

export default GoodPage;
