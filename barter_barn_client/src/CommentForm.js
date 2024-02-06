import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './context/UserContext.js';
import { ForumContext } from './context/ForumContext.js';

const CommentForm = () => {

  const {user} = useContext(UserContext);
  const { setAllComments} = useContext(ForumContext)
//   const [selectedType, setSelectedType] = useState('GOOD');

  const [commentFormData, setCommentData] = useState({
    name: '',
    comment: ''
  });

  const [errors, setErrors] = useState([]);
  const { name, comment} = commentFormData
  
//   useEffect(() => {

//     fetch(`/comments`)
//     .then(res => res.json())
//     .then(data => setAllComments(data))

//   }, [setAllComments])

//   const handleCommentChange = (e) => {
//     const { name, value } = e.target;
//     setCommentFormData((prevData) => ({ ...prevData, [name]: value }));
//   };    


    const handleNewComment = (newComment) => {
      setAllComments((prevComments) => [...prevComments, newComment]);
      setCommentData({
        name: '',
        comment: '',
      });
    };

  

  const handleSubmitComment = (e) => {
    e.preventDefault();
    
    const commentData = new FormData();
    commentData.append('user_id', user?.id || '');   
    commentData.append('name', user.name);
    commentData.append('comment', user.comment);
    

    fetch(`/comments`, {
      method: 'POST',
      body: (commentData), 
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((newComment) => {
            handleNewComment(newComment);
            if (newComment.errors) {
              setErrors(newComment.errors);
            }
            });
        } else {
          r.json().then((err) => setErrors(err.errors));
          setTimeout(() => {
            setErrors([null]);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Error saving stuff:', error);
        setErrors(['Error saving stuff']);
      });
  };

// const handleClick = () => {

// }
  return (
<div className="new-post-container">
      <div className="new-post-form">
            <form className='form' onSubmit={handleSubmitComment}>
      <div className='form-field'>
        <label htmlFor='name'>NAME:</label>
        <input
          className='formInput'
          type='text'
          name='name'
          value={name}
          placeholder={user.username}
          onChange={(e) => setCommentData({ ...commentFormData, name: e.target.value })}
          required
        />
      </div>
      <div className='form-field'>
        <label htmlFor='comment'>COMMENT:</label>
        <input
          className='formInput'
          type='text'
          name='comment'
          placeholder='Comments or Questions'
          value={comment}
          onChange={(e) => setCommentData({ ...commentFormData, comment: e.target.value })}
          required
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
    </div>
  </div>
  )
}

export default CommentForm
