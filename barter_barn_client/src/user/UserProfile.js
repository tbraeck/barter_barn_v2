import React, {useContext, useState} from 'react';
import { Link} from 'react-router-dom';
import { UserContext } from '../context/UserContext.js';
import { ForumContext } from '../context/ForumContext.js';
  
const UserProfile = () => {
  const {user, setUser} = useContext(UserContext);
  const {allGoods, setAllGoods, allServices, setAllServices} = useContext(ForumContext);
const {usersStuff, setUsersStuff} = useState([])
  if (!user || !user.goods || !user.services || !user.frees || !user.communities) {
    return <p>Loading...</p>;
  }

const usersGoods = user.goods ? (
  user.goods.map((good) => (
    <div key={good.id} className="user-link">
      <Link to={`/goods/${good.id}`} className="forum-item">
        <h1>{good.name}</h1>
      </Link>
      <button className='btn btn-primary' onClick={() => handleDeleteClickGood(good.id)}>DELETE</button>
    </div>
  ))
) : null;

const usersServices = user.services ? (
user.services.map(service => (
  <div key={service.id} className="user-link">
          <Link to={`/services/${service.id}`} className="forum-item">
            <h1>{service.name}</h1>
          </Link>
          <button className='btn btn-primary' onClick={() => handleDeleteClickService(service.id)}>DELETE</button>
    </div>
)) ) : null;

const usersFrees = user.frees ? (
user.frees.map(free => (

  <div key={free.id} className="user-link">
          <Link to={`/frees/${free.id}`} className="forum-item">
            <h1>{free.name}</h1>
          </Link>
          <button className='btn btn-primary' onClick={() => handleDeleteClickFrees(free.id)}>DELETE</button>
    </div>
 
))) : null;

const usersCommunities = user.communities ? (
user.communities.map(community => (

  <div key={community.id} className="user-link">
          <Link to={`/communities/${community.id}`} className="forum-item">
            <h1>{community.name}</h1>
          </Link>
          <button className='btn btn-primary' onClick={() => handleDeleteClickCommunity(community.id)}>DELETE</button>
    </div>
 
))) : null;


const handleDeleteClickGood = (good_id) => {
  fetch(`goods/${good_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      if (response.ok) {
        // Remove the deleted good from the allGoods list
        const updatedGoods = allGoods.filter((good) => good.id !== good_id);
        setAllGoods(updatedGoods);
        console.error("Good deleted successfully");

      } else {
        console.error("Failed to delete good");
      }
    })
    .catch((error) => {
      console.error("Error deleting good:", error);
    });
};

const handleDeleteClickService = (service_id, ) => {
  fetch(`/services/${service_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((response) => {
    if (response.ok) {
      // Remove the deleted good from the allGoods list
      const updatedServices = allServices.filter((service) => service.id !== service_id);
      setAllServices(updatedServices);
      console.error("Service deleted successfully");

    } else {
      console.error("Failed to delete service");
    }
  })
  .catch((error) => {
    console.error("Error deleting service:", error);
  });
};

const handleDeleteClickFrees = (frees_id, ) => {
  fetch(`/frees/${frees_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((res) => res.json())
.then(() => {
  setUser((prevUser) => {
    const updatedFrees = Object.values(prevUser.saved_frees).filter(
      (frees) => frees.id !== frees_id
    );
    return {
      ...prevUser,
      saved_frees: updatedFrees
    };
  });
})
  .catch((error) => {
    console.error("Error deleting free stuff:", error);
  });
};

const handleDeleteClickCommunity = (community_id, ) => {
  fetch(`/communities/${community_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((res) => res.json())
.then(() => {
  setUser((prevUser) => {
    const updatedCommunities = Object.values(prevUser.saved_communities).filter(
      (community) => community.id !== community_id
    );
    return {
      ...prevUser,
      saved_communities: updatedCommunities
    };
  });
})
  .catch((error) => {
    console.error("Error deleting community event:", error);
  });
};


  return (
    <div className='home'>
    <div className="userProfile">
      <div className='user-h1'>
        <div>
          <h1 className='userNameTitle'>{user.username}'s Saved Items</h1>
        </div>
        <div className="mainPageItemsContainer" key="mainPageItemsContainer">
        <div className="category-column" style={{ backgroundColor: '#ffb3ba', margin: "20px" }}>
        <div>
          <h1 className='category-column-h1-user'> GOODS</h1>
          {usersGoods}
        </div>
        </div>
        <div className="category-column" style={{ backgroundColor: '#ffdfba', margin: "20px"  }}>
        <div>
          <h1 className='category-column-h1-user'>SERVICES</h1>
          {usersServices}
        </div>
        </div>
        <div className="category-column" style={{ backgroundColor: '#ffffba', margin: "20px"  }}>
        <div>
          <h1 className='category-column-h1-user'>FREE STUFF</h1>
          {usersFrees}
        </div>
        </div>
        <div className="category-column" style={{ backgroundColor: '#baffc9', margin: "20px"  }}>
        <div>
          <h1 className='category-column-h1-user'>COMMUNITIES</h1>
          {usersCommunities}
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
