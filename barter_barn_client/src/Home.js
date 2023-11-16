import React, {useContext} from 'react';
import { Link} from 'react-router-dom';
import { UserContext } from './UserContext.js';
import { ForumContext } from './ForumContext.js';
import GeneralCard from './GeneralCard';

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  const { allGoods, allServices, allFrees, setAllGoods, setAllServices, setAllFrees } = useContext(ForumContext)
  
  

  

  return (
    <div className="home">
      <div className="background-image"></div> 
      <div className="content">
        {/* <h1 className='homeMainWords'>Welcome to Barter Barn</h1>
        <p className='homeSubWords'>Explore and trade with our community</p> */}
      </div>
    </div>
  );
};

export default Home;
