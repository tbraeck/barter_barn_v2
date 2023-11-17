import React, {useContext} from 'react';
// import UserItems from './UserItems'; 
import { UserContext } from '../context/UserContext.js';
import { ForumContext } from '../context/ForumContext.js';

const UserProfile = () => {
  const {user, setUser} = useContext(UserContext);
  const { allGoods, allServices, allFrees } = useContext(ForumContext)
  return (
    <div className="userProfile">
      <div>
        <h1 className='userNameTitle'>{user.username}'s Saved Items</h1>
        {/* <UserItems allForum={allForum} handleUpdateFreeStuffs={handleUpdateFreeStuffs} user={user} user_id={user_id} setUser={setUser } handleSaveItem={handleSaveGood} itemType="Goods" /> */}
      </div>
    </div>
  );
};

export default UserProfile;
