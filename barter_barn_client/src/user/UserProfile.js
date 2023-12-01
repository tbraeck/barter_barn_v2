import React, {useContext} from 'react';
import { Link} from 'react-router-dom';
import { UserContext } from '../context/UserContext.js';
// import { ForumContext } from '../context/ForumContext.js';

const UserProfile = () => {
  const {user, setUser} = useContext(UserContext);
  // const { allGoods, allServices, allFrees, allCommunities } = useContext(ForumContext)

console.log(user.goods[0])

const usersGoods = user.goods.map(good => (

  <div key={good.id} className="user-link">
          <Link to={`/goods/${good.id}`} className="link">
            <h1>{good.name}</h1>
          </Link>
    </div>
 
))

const usersServices = user.services.map(service => (

  <div key={service.id} className="user-link">
          <Link to={`/services/${service.id}`} className="link">
            <h1>{service.name}</h1>
          </Link>
    </div>
 
))

const usersFrees = user.frees.map(free => (

  <div key={free.id} className="user-link">
          <Link to={`/frees/${free.id}`} className="link">
            <h1>{free.name}</h1>
          </Link>
    </div>
 
))

const usersCommunities = user.communities.map(community => (

  <div key={community.id} className="user-link">
          <Link to={`/communities/${community.id}`} className="link">
            <h1>{community.name}</h1>
          </Link>
    </div>
 
))

  return (
    <div className="userProfile">
      <div>
        <h1>USER PROFILE</h1>
        <div>
          <h1 className='userNameTitle'>{user.username}'s Saved Items</h1>
        </div>
        <div>
          <h1>USER'S GOODS</h1>
          {usersGoods}
        </div>
        <div>
          <h1>USER'S SERVICES</h1>
          {usersServices}
        </div>
        <div>
          <h1>USER'S FREE STUFF</h1>
          {usersFrees}
        </div>
        <div>
          <h1>USER'S COMMUNITIES</h1>
          {usersCommunities}
        </div>
        
        {/* <UserItems allForum={allForum} handleUpdateFreeStuffs={handleUpdateFreeStuffs} user={user} user_id={user_id} setUser={setUser } handleSaveItem={handleSaveGood} itemType="Goods" /> */}
      </div>
    </div>
  );
};

export default UserProfile;
