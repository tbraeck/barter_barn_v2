import React, {useContext} from 'react'
import { Link} from 'react-router-dom';

import { ForumContext } from './ForumContext.js';
import { UserContext } from './UserContext.js';

const AllGoods = () => {

    const {user, setUser} = useContext(UserContext);
  const { allGoods, allServices, allFrees, setAllGoods, setAllServices, setAllFrees } = useContext(ForumContext)
  
  const forumGoods = allGoods.map((good) => (
    <div key={good.id} className="forum-item">
          <Link to={`/goods/${good.id}`} className="link">
            <h1>{good.name}</h1>
          </Link>
    </div>
  ));
  
  return (
    <div>
     {forumGoods}
    </div>
  )
}

export default AllGoods
