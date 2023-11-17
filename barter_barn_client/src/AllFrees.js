import React, {useContext} from 'react'
import { Link} from 'react-router-dom';

import { ForumContext } from './ForumContext.js';
import { UserContext } from './UserContext.js';

const AllFrees = () => {

    const {user, setUser} = useContext(UserContext);
  const { allGoods, allServices, allFrees, setAllGoods, setAllServices, setAllFrees } = useContext(ForumContext)
  
    
  const forumFrees = allFrees.map((free) => (
    <div key={free.id} className="forum-item">
          <Link to={`/frees/${free.id}`} className="link">
            <h1>{free.name}</h1>
          </Link>
    </div>
  ));
  
  return (
    <div className='freeForum'> 
     {forumFrees}
    </div>
  )
}

export default AllFrees
