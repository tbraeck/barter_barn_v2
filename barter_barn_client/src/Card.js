import React from 'react';

const Card = ({ item, handleSave }) => {
  return (
    <div className="card" style={{width: "475px", justifyContent: "center", alignItems: "center"}}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button  className='btn btn-secondary' type='button'  onClick={handleSave}>Save</button>
    </div>
  );
};

export default Card;
