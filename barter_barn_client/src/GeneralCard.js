import React, { useState, useContext} from 'react';
import { ForumContext } from './ForumContext.js';
import { UserContext } from './UserContext.js';

const GeneralCard = () => {
    const {user, setUser} = useContext(UserContext);
    const {allGoods, setAllGoods, allServices, setAllServices, allFrees, setAlFrees } = useContext(ForumContext)
    




  return (      
   <>
    <button type='submit' >SAVE</button>
   </>
  );
}; 

export default GeneralCard
