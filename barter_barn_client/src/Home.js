import React, {useContext} from 'react';
import { Link} from 'react-router-dom';
import { UserContext } from './UserContext.js';
import { ForumContext } from './ForumContext.js';
import GeneralCard from './GeneralCard';

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  const {allForum, setAllForum } = useContext(ForumContext)
  

  const forumItems = allForum.map((forum) => (
    <div key={forum.id} className="forum-item">
      <h1>
        <Link to={`/forums/${forum.id}`} className="link">
            {forum.title}
        </Link>
      </h1>
    </div>
  ));

  return (
    <div className="home">
      <div className="background-image"></div> 
      <div className="content">
        {/* <h1 className='homeMainWords'>Welcome to Barter Barn</h1>
        <p className='homeSubWords'>Explore and trade with our community</p> */}
        {forumItems}
      </div>
    </div>
  );
};

export default Home;
