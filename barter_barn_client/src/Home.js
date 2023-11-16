import React, {useContext} from 'react';
import { Link} from 'react-router-dom';
import { UserContext } from './UserContext.js';
import { ForumContext } from './ForumContext.js';
import GeneralCard from './GeneralCard';

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  const { allGoods, allServices, allFrees, setAllGoods, setAllServices, setAllFrees } = useContext(ForumContext)
  
  
  const forumGoods = allGoods.map((good) => (
    <div key={good.id} className="forum-item">
     <ul>
      <li>
        <Link to={`http://localhost:3000/goods/${good.id}`} className="link">
            {good.title}
            <h5>{good.title}</h5>
        </Link>
      </li>
    </ul>
  </div>
));

const forumServices = allServices.map((service) => {
    return(
    <div key={service.id} className="forum-item">
      <ul>
        <li>
        <Link to={`http://localhost:3000/services/${service.id}`} className="link">
            <h5>{service.title}</h5>
        </Link>
        </li>
      </ul>
    </div>
)});

const forumFrees = allFrees.map((free) => (
  <div key={free.id} className="forum-item">
    <ul>
      <li>
        <Link to={`http://localhost:3000/frees/${free.id}`} className="link">
          <h5>{free.title}</h5>
        </Link>
      </li>
    </ul>
  </div>
));
  

  return (
    <div className="home">
      <div className="background-image"></div> 
      <div className="content">
      <div className="mainPageItemsContainer">
                <div>
                    <h1>GOODS TO BARTER</h1>
                    {forumGoods.map(good => (
                      <GeneralCard 
                      allGoods={allGoods}
                      setAllGoods={setAllGoods}
                      />
                    ))}
                </div>
                <div>
                    <h1>SERVICES TO BARTER</h1>
                      {forumServices}
                </div>
                <div>
                    <h1>FREE STUFF</h1>
                      {forumFrees}
                </div>
            </div>
      </div>
    </div>
  );
};

export default Home;
