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
          <Link to={`/goods/${good.id}`} className="link">
            <h5>{good.name}</h5>
          </Link>
    </div>
  ));
  
  const forumServices = allServices.map((service) => (
    <div key={service.id} className="forum-item">
          <Link to={`/services/${service.id}`} className="link">
            <h5>{service.name}</h5>
          </Link>
    </div>
  ));
  
  const forumFrees = allFrees.map((free) => (
    <div key={free.id} className="forum-item">
          <Link to={`/frees/${free.id}`} className="link">
            <h5>{free.name}</h5>
          </Link>
    </div>
  ));
  

  return (
    <div className="home">
      <div className="background-image"></div>
      <div className="content">
        <div className="mainPageItemsContainer" key="mainPageItemsContainer">
          <div className="category-column">
            <Link to={`/goods`} className="link">  <h1>GOODS TO BARTER</h1></Link>
       
            {forumGoods}
          </div>
          <div className="category-column">
            <Link to={`/services`} className="link"> <h1>SERVICES TO BARTER</h1></Link>
           
            {forumServices}
          </div>
          <div className="category-column">
          <Link to={`/frees`} className="link" >  <h1>FREE STUFF</h1></Link> 
            {forumFrees}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
