import React, {useContext} from 'react'
import { Link} from 'react-router-dom';
import { ForumContext } from '../context/ForumContext.js';
// import { UserContext } from '../context/UserContext.js';

const AllGoods = () => {

    // const {user, setUser} = useContext(UserContext);
  const { allGoods} = useContext(ForumContext)
  
  const forumGoods = allGoods.map((good) => (
    <div key={good.id} className="forum-item">
          <Link to={`/goods/${good.id}`} className="link">
            <h1>{good.name}</h1>
          </Link>
    </div>
  ));
  
  return (
    <div>
      
    <div className="forum-container"><div>
        {/* <Link to={`/services`} className="link header-link" style={{}}>
          <h1 className='category-column-h1'>SERVICES</h1>
        </Link>
        <Link to={`/frees`} className="link header-link">
            <h1 className='category-column-h1'>FREE STUFF</h1>
        </Link>
        <Link to={`/communities`} className="link header-link">
            <h1 className='category-column-h1'>COMMUNITY</h1>
        </Link> */}
      </div>
      <div className="category-column" style={{ backgroundColor: '#ffb3ba' }}>

      <Link to={`/goods`} className="link ">
        <h2 className='h2Forum'>GOODS</h2>
      </Link>
    <div className="forum-list">
      {forumGoods}
    </div>
    </div>
    </div>
  </div>
  )
}

export default AllGoods
