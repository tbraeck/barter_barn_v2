import React, {useState, useEffect, useContext} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import { UserContext } from './UserContext.js';
import { ForumContext } from './ForumContext.js';
import Home from "./Home.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import GeneralCard from "./GeneralCard.js";

const App = () => {
  const {user, setUser} = useContext(UserContext);
  const { allGoods, allServices, allFrees, setAllGoods, setAllServices, setAllFrees } = useContext(ForumContext)
  
console.log("goods", allGoods)
console.log("services", allServices)
console.log("frees", allFrees)

  const forumGoods = allGoods.map((good) => (
    <div key={good.id} className="forum-item">
     <ul>
     <h1>
        <Link to={`http://localhost:3000/goods/${good.id}`} className="link">
            {good.title}
        </Link>
      </h1>
      </ul>
    </div>
  ));

  const forumServices = allServices.map((service) => {
    return(
    <div key={service.id} className="forum-item">
      <ul>
      <h1>
        <Link to={`http://localhost:3000/services/${service.id}`} className="link">
            {service.title}
        </Link>
      </h1>
      </ul>
    </div>
)});

  const forumFrees = allFrees.map((free) => (
    <div key={free.id} className="forum-item">
      <ul>
      <h1>
        <Link to={`http://localhost:3000/frees/${free.id}`} className="link">
            {free.title}
        </Link>
      </h1>
      </ul>
    </div>
  ));

  return (
    <div className="App">
      {/* <h1>This is my app</h1>
      <img src="https://media.tenor.com/MemzmgMAOJ8AAAAM/bite-tail-cute-dog.gif" alt="puppy"/>
      <p>This is just gibberish filler that I am typing here to get the space filled.</p> */}
      <div className='mainContainer'>
        <div className="header">
            {/* <Header user={user} setUser={setUser} handleLogout={handleLogout} /> */}
            <Header/>
        </div>
          <div>
            <Routes>
                <Route exact path="/" element={<Home /> } />  
                {/* <Route path="/forums" element={<ForumList allForum={allForum}  setAllForum={setAllForum} /> }/>
                <Route path="/forums/:id" element={<ForumCard  user={user} setUser={setUser} allForum={allForum} setAllForum={setAllForum}  />} />
                <Route path="/goods/:id" element={<GoodsCard    allForum={allForum} setAllForum={setAllForum}   />}/> 
                <Route path="/services/:id" element={<ServicesCard  allForum={allForum} setAllForum={setAllForum}  />}/> 
                <Route path="/free_stuffs/:id" element={<FreeStuffCard setAllForum={setAllForum} allForum={allForum}  />}/>
                <Route path="/featured" element={<FeatureCard  allGoods={allGoods}  setAllGoods={setAllGoods}  allForum={allForum} setAllForum={setAllForum} user={user} />} />
                <Route path="/forums/:id/edit" element={<ForumCard allForum={allForum} setAllForum={setAllForum} />}/>
                <Route path="/users/:user_id/goods/:good_id" element={<EditGoods user={user}  allForum={allForum}/>} />
                <Route path="/users/:user_id/services/:service_id" element={<EditServices user={user} allForum={allForum}/>} />
                <Route path="/users/:user_id/free_stuffs/:free_ stuffs_id" element={<EditFreeStuffs user={user}  allForum={allForum}/>} />
                <Route path="/user-profile"  element={user ? <UserProfile allForum={allForum}  user={user} setUser={setUser}/> : <Navigate to='/'/>} />  */}
            </Routes>
          </div> 
          <div>
            <div>
              {forumGoods}
            </div>
            <div>
              {forumServices}
            </div>
            <div>
              {forumFrees}
              <p>People are cool</p>
            </div>
          </div>
        <div className='footer--pin'>
          <Footer/>
        </div>
        </div>
        </div>
  );
}

export default App;
