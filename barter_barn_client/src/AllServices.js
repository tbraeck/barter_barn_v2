import React, {useContext} from 'react'
import { Link} from 'react-router-dom';

import { ForumContext } from './ForumContext.js';
import { UserContext } from './UserContext.js';

const AllServices = () => {

    const {user, setUser} = useContext(UserContext);
  const { allGoods, allServices, allFrees, setAllGoods, setAllServices, setAllFrees } = useContext(ForumContext)
  
  const forumServices = allServices.map((service) => (
    <div key={service.id} className="forum-item">
          <Link to={`/services/${service.id}`} className="link">
            <h1>{service.name}</h1>
          </Link>
    </div>
  ));
  
  return (
    <div>
     {forumServices}
    </div>
  )
}

export default AllServices
